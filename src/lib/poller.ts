import {
    currentMatchId,
    useMockData,
    loadingStore,
    errorStore,
    matchDetailsDataStore,
    teamsDataStore,
    mapStatsTeamStore,
    playerStatsStore,
    pickedMapsStore,
    pickedStatsStore,
    matchStatsStore
} from '../stores';

let interval: NodeJS.Timeout | null = null;
let lastKey = '';

function buildUrl(matchId: string, mockMode: boolean) {
    const params = new URLSearchParams();
    params.set('matchId', matchId);
    if (mockMode) params.set('mock', 'true');
    return `/api/match-data?${params.toString()}`;
}

function deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    } catch {
        return false;
    }
}

function setIfChanged<T>(store: { subscribe: any; set: (v: T) => void }, next: T) {
    const prev = getValue(store as any) as T;
    if (!deepEqual(prev, next)) {
        store.set(next as any);
    }
}

export async function fetchAndUpdate(matchId: string, mockMode: boolean, opts: { showLoading?: boolean } = {}) {
    if (!matchId) return;
    try {
        if (opts.showLoading) loadingStore.set(true);
        errorStore.set('');
        const res = await fetch(buildUrl(matchId, mockMode), { cache: 'no-store' });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to fetch match data');

        // Update granular stores so components can subscribe to only what they need
        setIfChanged(matchDetailsDataStore, data.matchDetailsData ?? null);
        setIfChanged(teamsDataStore, data.teamsData ?? null);
        setIfChanged(mapStatsTeamStore, data.mapStatsTeam ?? null);
        setIfChanged(playerStatsStore, data.playerStats ?? null);
        setIfChanged(pickedMapsStore, data.pickedMaps ?? []);
        setIfChanged(pickedStatsStore, data.pickedStats ?? {});
        setIfChanged(matchStatsStore, data.matchStats ?? null);
    } catch (e: any) {
        errorStore.set(e?.message || 'Failed to fetch match data');
    } finally {
        if (opts.showLoading) loadingStore.set(false);
    }
}

export function startPolling(matchId: string, mockMode: boolean, intervalMs = 2000) {
    stopPolling();
    lastKey = `${matchId}|${mockMode}`;
    // Immediate fetch to populate quickly, show loading during first fetch
    fetchAndUpdate(matchId, mockMode, { showLoading: true });
    interval = setInterval(() => {
        // Only continue if the selected match/mock flag hasn’t changed
        const keyNow = `${getValue(currentMatchId)}|${getValue(useMockData)}`;
        if (keyNow !== lastKey) {
            stopPolling();
            return;
        }
        fetchAndUpdate(matchId, mockMode, { showLoading: false });
    }, intervalMs);
}

export function stopPolling() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

// Small helper to read a store synchronously
function getValue<T>(store: { subscribe: (fn: (v: T) => void) => () => void }): T {
    let value!: T;
    const unsubscribe = store.subscribe((v) => (value = v));
    unsubscribe();
    return value;
}

// Wire reactive behavior so consumers can simply set currentMatchId/useMockData
currentMatchId.subscribe((id) => {
    if (!id) {
        stopPolling();
        return;
    }
    const mock = getValue(useMockData);
    startPolling(id, mock, 2000);
});

useMockData.subscribe((mock) => {
    const id = getValue(currentMatchId);
    if (!id) {
        stopPolling();
        return;
    }
    startPolling(id, mock, 2000);
});
