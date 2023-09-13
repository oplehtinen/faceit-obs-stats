<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeamStatsForMap } from '../lib/faceit';
	import MapCard from './MapCard.svelte';
	export let mapPicks: Array<string>;
	export let mapData: Array<any>;
	export let teams: Array<any>;
	export let matchStats: any;
	export let nextMap: any;
	console.log(teams);
	console.log(mapData);
	const getMapData = (mapName: string) => {
		const map = mapData.find((map) => map.game_map_id === mapName);
		console.log(map);
		return map;
	};
	let mapPicksData: Array<any> = [];
	const avatars = [teams[0].avatar, teams[1].avatar];
	onMount(async () => {
		console.log('MAPS:' + mapPicks.length);
		for (let i = 0; i < mapPicks.length; i++) {
			console.log('ITERATION: ' + i);
			mapPicksData[i] = await getTeamStatsForMap(teams, mapPicks[i]);
			mapPicksData[i].mapImage = getMapData(mapPicks[i]).image_lg;
			mapPicksData[i].mapName = getMapData(mapPicks[i]).name;
			console.log(mapPicksData[i].mapImage);
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
		}
	});
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	{#if mapPicksData}
		{#each mapPicksData as map, i}
			<MapCard {map} nextMap={i == nextMap ? true : false} teamData={mapPicksData[i]} {teams} />
			{#if i == 0 && mapPicksData.length > 1}
				<div class="divider text-primary divider-horizontal">&</div>
			{/if}
			{#if i == 1 && mapPicksData.length > 2}
				<div class="divider text-primary divider-horizontal">?</div>
			{/if}
		{/each}
	{/if}
</div>
