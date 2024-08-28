import { readable, writable } from "svelte/store";
import { browser } from '$app/environment';
import { page } from '$app/stores';
import type { tournamentId, matchDetails, matchStats, team, tournamentDetails } from "$lib/dataTypes.d.ts";
import type { matchId } from "$lib/dataTypes.d.ts";

export const status = writable("Initialized");

// create a writable store for the matchId
// also store the matchId in localStorage, keep it in sync
export const matchIdStore = writable('' as matchId);
export const matchId = writable('' as matchId);
if (browser) {
    /*   matchIdStore.set(localStorage.getItem('matchId') || '');
      matchId.subscribe(value => localStorage.setItem('matchId', value)); */
    // also update the store for the server
}

export const matchDetailsStore = writable<undefined | matchDetails>();
export const matchStatsStore = writable<undefined | matchStats[]>();
export const tournamentIdStore = writable<undefined | tournamentId>();
export const tournamentStore = writable<undefined | tournamentDetails>();
export const playerStatsStore = writable<undefined | unknown>();
export const organizerStore = writable<undefined | unknown>();
export const mapPicksStore = writable<undefined | unknown>();
export const nextMapIndexStore = writable(0);
export const tournamentMapsStore = readable([
    'Inferno',
    'Vertigo',
    'Ancient',
    'Mirage',
    'Nuke',
    'Dust2',
    'Anubis'
])
export const teamsStore = writable<undefined | {
    faction1: team;
    faction2: team;
}>();