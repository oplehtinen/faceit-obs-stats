import { writable } from "svelte/store";
import { browser } from '$app/environment';
import { page } from '$app/stores';

export const status = writable("Initialized");

// create a writable store for the matchId
// also store the matchId in localStorage, keep it in sync
export const matchId = writable('');
if (browser) {
    matchId.set(localStorage.getItem('matchId') || '');
    matchId.subscribe(value => localStorage.setItem('matchId', value));
    // also update the store for the server
}

export const matchDetails = writable(null);

export const matchData = writable(null);

export const matchResults = writable(null);

export const matchStatus = writable(null);

export const matchVoting = writable(null);

export const mapData = writable(null);

export const mapStatsForTeams = writable(null);

export const teams = writable();