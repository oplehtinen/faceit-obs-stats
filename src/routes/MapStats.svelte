<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import MapCard from './MapCard.svelte';
	import type { mapStatsForTeams, team } from '$lib/dataTypes';
	let mapStatsTeam: mapStatsForTeams;
	onMount(() => {
		mapStatsTeam = $page.data.mapStatsTeam as mapStatsForTeams;
		console.log($page.data);
		console.log(mapStatsTeam);
	});
	const teamArr = [$page.data.teamsData.faction1, $page.data.teamsData.faction2];
</script>

<div class="flex flex-wrap justify-around flex-row my-auto gap-8 mx-auto w-6/6 h-4/6">
	{#if mapStatsTeam}
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<div class="m-2">
				<MapCard data={map} nextMap={false} order={i * 300} teams={teamArr} />
			</div>
		{/each}
	{/if}
	<!-- 	{#if mapPicksData.length == mapData.length}
		{#each mapPicksData as map, i}
			{#if map != null && map[0].Matches}
				<div class="m-4">
					<MapCard {map} nextMap={false} teamData={mapPicksData[i]} {teams} />
				</div>
			{/if}
		{/each}
	{/if} -->
</div>
