<script lang="ts">
	import { page } from '$app/stores';
	import type { mapStatsForTeams, matchDetails } from '$lib/dataTypes';
	import MapCard from './MapCard.svelte';
	const match = $page.data.matchDetailsData as matchDetails;
	const mapStatsTeam = $page.data.pickedStats;
	console.log(mapStatsTeam);
	const teamArr = [$page.data.teamsData.faction1, $page.data.teamsData.faction2];
</script>

<div class="flex flex-wrap justify-center flex-row h-2/3 my-16 mx-auto">
	{#if mapStatsTeam}
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<MapCard data={map} playedMap={map.played} order={i * 300} teams={teamArr} />
			{#if i == 0 && Object.entries(mapStatsTeam).length > 1}
				<div class="divider text-primary divider-horizontal">&</div>
			{/if}
			{#if i == 1 && Object.entries(mapStatsTeam).length > 2}
				<div class="divider text-primary divider-horizontal">?</div>
			{/if}
		{/each}
	{/if}
</div>
