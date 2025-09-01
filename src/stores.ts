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
