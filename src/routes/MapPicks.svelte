<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeamStatsForMap } from '../lib/faceit';
	import MapCard from './MapCard.svelte';
	import type {
		mapData,
		mapName,
		mapStatsForTeams,
		matchStats,
		nextMapIndex,
		team
	} from '$lib/dataTypes';
	import MapStats from './MapStats.svelte';
	export let mapPicks: mapName[];
	export let mapData: mapData[];
	export let teams: team[];
	export let matchStats: matchStats[];
	export let nextMap: nextMapIndex;
	let mapStatsTeam: mapStatsForTeams;
	teams;
	mapData;
	const getMapData = (mapName: mapName) => {
		const map = mapData.find((map) => map.game_map_id === mapName);
		//console.log(map);
		map;
		return map;
	};
	let mapPicksData: Array<any> = [];
	const avatars = [teams[0].avatar, teams[1].avatar];
	onMount(async () => {
		mapStatsTeam = await getTeamStatsForMap(teams, mapPicks);
		console.log(matchStats);
		// get the bigger picture from mapData
		mapPicks.forEach((map, index) => {
			//console.log(map);
			const mapData = getMapData(map);
			const mapStats =
				matchStats.rounds && matchStats.rounds[index] ? matchStats.rounds[index].teams : null;
			console.log(mapStats);
			console.log(mapStatsTeam);
			mapStatsTeam[map].mapData.image_lg = mapData.image_lg;
			if (mapStats) {
				mapStatsTeam[map].stats = mapStats;
				mapStatsTeam[map].played = true;
			} else {
				mapStatsTeam[map].played = false;
			}
		});
		/* 'MAPS:' + mapPicks.length;
		for (let i = 0; i < mapPicks.length; i++) {
			'ITERATION: ' + i;
			mapPicksData[i] = await getTeamStatsForMap(teams, mapPicks[i]);
			mapPicksData[i].mapImage = getMapData(mapPicks[i]).image_lg;
			mapPicksData[i].mapName = getMapData(mapPicks[i])['label' ?? 'game_map_id'];
			mapPicksData[i].mapImage;
			if (
				// i == 0 &&
				matchStats &&
				mapPicksData[i][0] &&
				matchStats.rounds[i].teams[0].team_stats &&
				matchStats.rounds[i].teams[1].team_stats
			) {
				mapPicksData[i][0].stats = matchStats.rounds[i].teams[0].team_stats;
				mapPicksData[i][1].stats = matchStats.rounds[i].teams[1].team_stats;
			}

			mapPicksData[i][0].avatar = teams[0].avatar;
			mapPicksData[i][1].avatar = teams[1].avatar;
			mapPicksData[i][0].color = 'text-neutral-content';
			mapPicksData[i][1].color = 'text-secondary-content';
		} */
	});
</script>

<div class="flex flex-wrap justify-center flex-row my-4 mx-auto w-screen">
	{#if mapStatsTeam}
		{#each Object.entries(mapStatsTeam) as [key, map], i}
			<MapCard
				stats={map.stats}
				data={map.mapData}
				nextMap={i == nextMap ? true : false}
				playedMap={map.played}
				order={i * 300}
				{teams}
			/>
			{#if i == 0 && Object.entries(mapStatsTeam).length > 1}
				<div class="divider text-primary divider-horizontal">&</div>
			{/if}
			{#if i == 1 && Object.entries(mapStatsTeam).length > 2}
				<div class="divider text-primary divider-horizontal">?</div>
			{/if}
		{/each}
	{/if}
</div>
