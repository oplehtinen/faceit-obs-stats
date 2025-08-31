<script lang="ts">
	import { onMount } from 'svelte';
	import MapCard from './MapCard.svelte';
	import type { mapStatsForTeams, team } from '$lib/dataTypes';
	import { currentMatchId } from '../stores';
	
	let mapStatsTeam: mapStatsForTeams | null = null;
	let teamArr: team[] = [];
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
			
			mapStatsTeam = data.mapStatsTeam;
			teamArr = [data.teamsData.faction1, data.teamsData.faction2];
		} catch (err) {
			console.error('Error loading match data:', err);
			error = err instanceof Error ? err.message : 'Failed to load match data';
			mapStatsTeam = null;
			teamArr = [];
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
		<span>Please enter a match ID above to load map stats.</span>
	</div>
{:else if mapStatsTeam}
	<div class="flex flex-wrap justify-around flex-row my-auto gap-2 mx-auto w-6/6 h-5/6">
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<div class="m-2">
				<MapCard data={map} nextMap={false} order={i * 300} teams={teamArr} />
			</div>
		{/each}
	</div>
{/if}
