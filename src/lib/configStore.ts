import { writable } from 'svelte/store';

export interface MapPoolConfig {
	activeMaps: string[];
}

// Default map pool - CS2 active duty maps as of 2024
const defaultMapPool: MapPoolConfig = {
	activeMaps: ['Inferno', 'Train', 'Ancient', 'Mirage', 'Nuke', 'Dust2', 'Anubis']
};

// Create writable store
export const mapPoolConfig = writable<MapPoolConfig>(defaultMapPool);

// Load from localStorage if available (browser only)
if (typeof window !== 'undefined') {
	const stored = localStorage.getItem('mapPoolConfig');
	if (stored) {
		try {
			mapPoolConfig.set(JSON.parse(stored));
		} catch (e) {
			console.error('Failed to parse stored map pool config:', e);
		}
	}

	// Subscribe to changes and persist to localStorage
	mapPoolConfig.subscribe((value) => {
		localStorage.setItem('mapPoolConfig', JSON.stringify(value));
	});
}

export function getDefaultMapPool(): MapPoolConfig {
	return defaultMapPool;
}
