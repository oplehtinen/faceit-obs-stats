<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeamStatsForMap } from '../lib/faceit';
	import MapCard from './MapCard.svelte';
	import type { mapStatsForTeams, team } from '$lib/dataTypes';
	export let teams: team[];
	export let tournamentMaps: Array<string>;
	let mapStatsTeam: mapStatsForTeams;
	onMount(async () => {
		console.log(tournamentMaps);
		mapStatsTeam = await getTeamStatsForMap(teams, tournamentMaps);
		console.log(mapStatsTeam);
	});
</script>

<div class="flex flex-wrap justify-center flex-row my-4 mx-auto w-screen">
	{#if mapStatsTeam}
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<div class="m-2">
				<MapCard stats={map.stats} data={map.mapData} nextMap={false} order={i * 300} {teams} />
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
