<script lang="ts">
	import { page } from '$app/stores';
	import type { mapStatsForTeams, matchDetails } from '$lib/dataTypes';
	import MapCard from './MapCard.svelte';
	const match = $page.data.matchDetailsData as matchDetails;
	const mapStatsTeam = $page.data.pickedStats as mapStatsForTeams;
	const matchStats = $page.data.matchStats;
	console.log(mapStatsTeam);
	const teamArr = [$page.data.teamsData.faction1, $page.data.teamsData.faction2];
	const round = match.round || 1;
	if (round > 1 && matchStats) {
		const mapStats = matchStats[round - 2];
		for (const key in mapStatsTeam as any) {
			mapStatsTeam[round - 2].round_stats = mapStats.teams;
			mapStatsTeam[round - 2].played = true;
		}
	}
	console.log(mapStatsTeam);
</script>

{#if mapStatsTeam && Object.entries(mapStatsTeam).length > 0}
	<div class="flex flex-wrap h-1/5 flex-row">
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<MapCard
				data={map}
				playedMap={map.played}
				order={i * 300}
				teams={teamArr}
				nextMap={round - 1 == i ? true : false}
				picks={true}
			/>
			{#if i == 0 && Object.entries(mapStatsTeam).length > 1}
				<div class="divider text-primary divider-horizontal">&</div>
			{/if}
			{#if i == 1 && Object.entries(mapStatsTeam).length > 2}
				<div class="divider text-primary divider-horizontal">?</div>
			{/if}
		{/each}
	</div>
{/if}
