<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeamStatsForMap } from '../lib/faceit';
	import MapCard from './MapCard.svelte';
	export let mapData: Array<any>;
	export let teams: Array<any>;

	const getMapData = (mapName: string) => {
		const map = mapData.find((map) => map.guid === mapName);
		return map;
	};
	let mapPicksData: Array<any> = [];
	onMount(async () => {
		console.log(mapData[0]);
		//mapPicksData = mapData;
		console.log(mapData);
		for (let i = 0; i < mapData.length; i++) {
			mapPicksData[i] = await getTeamStatsForMap(teams, mapData[i].game_map_id);
			mapPicksData[i].mapImage = mapData[i].image_lg;
			mapPicksData[i].mapName = mapData[i].name;

			mapPicksData[i][0].avatar = teams[0].avatar;
			mapPicksData[i][1].avatar = teams[1].avatar;
			mapPicksData[i][0].color = 'text-neutral-content';
			mapPicksData[i][1].color = 'text-secondary-content';
		}
		console.log(mapPicksData.length);
		console.log(mapData.length);
	});
</script>

<div class="flex justify-center flex-row flex-wrap mx-4 w-auto">
	{#if mapPicksData.length == mapData.length}
		{#each mapPicksData as map, i}
			{#if map[0].Matches && map[1].Matches}
				<div class="m-4">
					<MapCard {map} teamData={mapPicksData[i]} />
				</div>
			{/if}
		{/each}
	{/if}
</div>
