<script lang="ts">
	import { expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import PlayerTable from './PlayerTable.svelte';
	import type { teams } from '$lib/dataTypes';
	import {
		currentMatchId,
		matchDetailsDataStore,
		teamsDataStore,
		loadingStore,
		errorStore,
		useMockData
	} from '../stores';

	let teamsData: teams | null = null;
	let tournamentId: string | null = null;
	let loading = false;
	let error = '';
	let isMockData = false;

	// Export the teamsData so parent can access it
	export { teamsData };

	// Subscribe to centralized stores (populated by lib/poller)
	$: teamsData = $teamsDataStore as teams | null;
	$: tournamentId = $matchDetailsDataStore ? $matchDetailsDataStore.competition_id : null;
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
		<span>Please enter a match ID above to load player stats.</span>
	</div>
{:else if teamsData && tournamentId}
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
