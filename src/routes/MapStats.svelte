<script lang="ts">
	import { onMount } from 'svelte';
	import MapCard from './MapCard.svelte';
	import type { mapStatsForTeams, team } from '$lib/dataTypes';
	import { currentMatchId, useMockData } from '../stores';

	let mapStatsTeam: mapStatsForTeams | null = null;
	let teamArr: team[] = [];
	let loading = false;
	let error = '';
	let isMockData = false;

	// Export the mapStatsTeam so parent can access it
	export { mapStatsTeam };

	async function loadMatchData(matchId: string, mockMode: boolean = false) {
		if (!matchId) return;

		loading = true;
		error = '';

		try {
			const url = `/api/match-data?matchId=${encodeURIComponent(matchId)}${mockMode ? '&mock=true' : ''}`;
			const response = await fetch(url);
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to fetch match data');
			}

			mapStatsTeam = data.mapStatsTeam;
			teamArr = [data.teamsData.faction1, data.teamsData.faction2];
			isMockData = data._mockData || false;
		} catch (err) {
			console.error('Error loading match data:', err);
			error = err instanceof Error ? err.message : 'Failed to load match data';
			mapStatsTeam = null;
			teamArr = [];
			isMockData = false;
		} finally {
			loading = false;
		}
	}

	// React to match ID and mock mode changes
	$: if ($currentMatchId) {
		loadMatchData($currentMatchId, $useMockData);
	}
</script>

{#if loading}
	<div class="flex justify-center items-center p-8">
		<div class="loading loading-spinner loading-lg"></div>
		<span class="ml-4">Loading match data...</span>
	</div>
{:else if error}
	<div class="alert alert-error">
		<span>Error: {error}</span>
	</div>
{:else if !$currentMatchId}
	<div class="alert alert-info">
		<span>Please enter a match ID above to load map stats.</span>
	</div>
{:else if mapStatsTeam}
	<!-- Mock data indicator -->
	{#if isMockData}
		<div class="alert alert-info mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Demo Mode: This data is simulated for demonstration purposes.</span>
		</div>
	{/if}
	
	<div class="flex flex-wrap justify-around flex-row my-auto gap-2 mx-auto w-6/6 h-5/6">
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<div class="m-2">
				<MapCard data={map} nextMap={false} order={i * 300} teams={teamArr} />
			</div>
		{/each}
	</div>
{/if}
