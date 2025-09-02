<script lang="ts">
	import MapCard from './MapCard.svelte';
	import type { mapStatsForTeams, team } from '$lib/dataTypes';
	import {
		currentMatchId,
		mapStatsTeamStore,
		teamsDataStore,
		loadingStore,
		errorStore,
		useMockData
	} from '../../stores';

	let mapStatsTeam: mapStatsForTeams | null = null;
	let teamArr: team[] = [];
	let loading = false;
	let error = '';
	let isMockData = false;
	export { mapStatsTeam };
	let mapEntries: [string, any][] = [];

	// Subscribe to centralized stores (populated by lib/poller)
	$: mapStatsTeam = $mapStatsTeamStore as mapStatsForTeams | null;
	$: mapEntries = mapStatsTeam ? Object.entries(mapStatsTeam) : [];
	$: teamArr = $teamsDataStore
		? ([$teamsDataStore.faction1, $teamsDataStore.faction2] as team[])
		: [];
	$: loading = $loadingStore;
	$: error = $errorStore;
	$: isMockData = $useMockData;
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Demo Mode: This data is simulated for demonstration purposes.</span>
		</div>
	{/if}

	<div class="flex flex-wrap justify-around flex-row my-auto gap-4 mx-auto w-5/6 h-4/6">
		{#each mapEntries as [key, map], i (key)}
			<div class="m-2">
				<MapCard data={map} nextMap={false} order={i * 300} teams={teamArr} />
			</div>
		{/each}
	</div>
{/if}
