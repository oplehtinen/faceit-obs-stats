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
