<script lang="ts">
	import { expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PlayerTable from './PlayerTable.svelte';
	import type { teams } from '$lib/dataTypes';
	import { currentMatchId } from '../stores';
	
	let teamsData: teams | null = null;
	let tournamentId: string | null = null;
	let loading = false;
	let error = '';
	
	async function loadMatchData(matchId: string) {
		if (!matchId) return;
		
		loading = true;
		error = '';
		
		try {
			const response = await fetch(`/api/match-data?matchId=${encodeURIComponent(matchId)}`);
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.error || 'Failed to fetch match data');
			}
			
			teamsData = data.teamsData;
			tournamentId = data.matchDetailsData.competition_id;
		} catch (err) {
			console.error('Error loading match data:', err);
			error = err instanceof Error ? err.message : 'Failed to load match data';
			teamsData = null;
			tournamentId = null;
		} finally {
			loading = false;
		}
	}
	
	// React to match ID changes
	$: if ($currentMatchId) {
		loadMatchData($currentMatchId);
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
		<span>Please enter a match ID above to load player stats.</span>
	</div>
{:else if teamsData && tournamentId}
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
