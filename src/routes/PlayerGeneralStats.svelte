<script lang="ts">
	import { expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import PlayerTable from './PlayerTable.svelte';
	import type { teams } from '$lib/dataTypes';
	import { currentMatchId, useMockData } from '../stores';

	let teamsData: teams | null = null;
	let tournamentId: string | null = null;
	let loading = false;
	let error = '';
	let isMockData = false;
	let isLiveUpdating = false;
	let autoRefreshInterval: NodeJS.Timeout | null = null;

	// Export the teamsData so parent can access it
	export { teamsData };

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

			teamsData = data.teamsData;
			tournamentId = data.matchDetailsData.competition_id;
			isMockData = data._mockData || false;
			isLiveUpdating = data._liveUpdating || false;

			// Setup auto-refresh for live updating data
			if (isLiveUpdating) {
				setupAutoRefresh(matchId, mockMode);
			} else {
				clearAutoRefresh();
			}
		} catch (err) {
			console.error('Error loading match data:', err);
			error = err instanceof Error ? err.message : 'Failed to load match data';
			teamsData = null;
			tournamentId = null;
			isMockData = false;
			isLiveUpdating = false;
			clearAutoRefresh();
		} finally {
			loading = false;
		}
	}

	function setupAutoRefresh(matchId: string, mockMode: boolean) {
		clearAutoRefresh();
		// Refresh every 5 seconds for live updating data
		autoRefreshInterval = setInterval(() => {
			// Only refresh if the component is still mounted and we're still on the same match
			if ($currentMatchId === matchId) {
				loadMatchData(matchId, mockMode);
			}
		}, 5000);
	}

	function clearAutoRefresh() {
		if (autoRefreshInterval) {
			clearInterval(autoRefreshInterval);
			autoRefreshInterval = null;
		}
	}

	// React to match ID and mock mode changes
	$: if ($currentMatchId) {
		loadMatchData($currentMatchId, $useMockData);
	}

	// Cleanup on component destroy
	onDestroy(() => {
		clearAutoRefresh();
	});
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
		<span>Please enter a match ID above to load player stats.</span>
	</div>
{:else if teamsData && tournamentId}
	<!-- Mock data indicator -->
	{#if isMockData}
		<div class="alert alert-info mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Demo Mode: This data is simulated for demonstration purposes.</span>
		</div>
	{/if}

	<!-- Live updating indicator -->
	{#if isLiveUpdating}
		<div class="alert alert-warning mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>
				<strong>LIVE:</strong> This match data updates automatically every 5 seconds.
				<span class="animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
			</span>
		</div>
	{/if}
	
	<div class="flex justify-center flex-row flex-grow my-4 w-auto">
		<div class="grid w-full">
			<PlayerTable teamData={teamsData.faction1.roster} index={0} color="primary-content" />
		</div>
		<div out:fly={{ y: 2000, duration: 500, easing: expoIn }} class="divider divider-horizontal">
			VS
		</div>
		<div class="grid w-full">
			<PlayerTable teamData={teamsData.faction2.roster} index={1} color="text-info" />
		</div>
	</div>
{/if}
