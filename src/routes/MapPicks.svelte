<script lang="ts">
	import { page } from '$app/stores';
	import type { mapStatsForTeams, matchDetails } from '$lib/dataTypes';
	import MapCard from './MapCard.svelte';
	const match = $page.data.matchDetailsData as matchDetails;
	const mapStatsTeam = $page.data.pickedStats as mapStatsForTeams;
	const matchStats = $page.data.matchStats;
	console.log(mapStatsTeam);
	const teamArr = [$page.data.teamsData.faction1, $page.data.teamsData.faction2];
	const roundsPlayed = match.results?.score.faction1 + match.results?.score.faction2 || 0;
	console.log('MATCH ROUND:' + roundsPlayed);
	if (matchStats) {
		for (let i = 0; i < roundsPlayed; i++) {
			const mapStatsRound = matchStats[i];
			console.log('round processed:' + i);
			mapStatsTeam[i].round_stats = mapStatsRound.teams;
			mapStatsTeam[i].played = true;
		}
	}
	/* 	for (const key in mapStatsTeam) {
		mapStatsTeam[rounds]
	} */
	console.log(mapStatsTeam);
</script>

{#if mapStatsTeam && Object.entries(mapStatsTeam).length > 0}
	<div class="flex flex-wrap h-1/5 flex-row">
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			{#if match.status == 'FINISHED' && roundsPlayed == 2 && i == 2}<br />
			{:else}
				<MapCard
					data={map}
					playedMap={map.played}
					order={i * 300}
					teams={teamArr}
					nextMap={roundsPlayed == i}
					picks={true}
				/>
				{#if i == 0 && Object.entries(mapStatsTeam).length > 1}
					<div class="divider text-primary divider-horizontal">&</div>
				{/if}
				{#if i == 1 && Object.entries(mapStatsTeam).length > 2}
					<div class="divider text-primary divider-horizontal">?</div>
				{/if}
			{/if}
		{/each}
	</div>
{:else}
	<div class="skeleton flex flex-wrap h-1/5 w-6/6 opacity-40 flex-row"></div>
{/if}
