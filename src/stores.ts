import { writable } from 'svelte/store';

export const endpointData = writable({});
export const matchData = writable({});
export const tournamentData = writable({});
export const organizerData = writable({});
export const matchStats = writable({});
export const tournamentStats = writable({});

// Store for current match ID - will be used by stats pages
export const currentMatchId = writable('');

// Store for mock mode flag
export const useMockData = writable(false);

// Centralized data stores populated by the auto-refresh poller
export const matchDetailsDataStore = writable<any | null>(null);
export const teamsDataStore = writable<any | null>(null);
export const mapStatsTeamStore = writable<any | null>(null);
export const playerStatsStore = writable<any | null>(null);
export const pickedMapsStore = writable<string[]>([]);
export const pickedStatsStore = writable<Record<number, unknown>>({});
export const matchStatsStore = writable<any[] | null>(null);

// Polling meta stores
export const loadingStore = writable<boolean>(false);
export const errorStore = writable<string>('');
