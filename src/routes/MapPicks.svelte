<script lang="ts">
	import { onMount } from 'svelte';
	import { getTeamStatsForMap } from '../lib/faceit';
	import MapCard from './MapCard.svelte';
	export let mapPicks: Array<string>;
	export let mapData: Array<any>;
	export let team1Logo: string;
	export let team2Logo: string;
	export let teams: Array<any>;

	const getMapData = (mapName: string) => {
		const map = mapData.find((map) => map.guid === mapName);
		return map;
	};
	let mapPicksData: Array<any> = [];
	onMount(async () => {
		for (let i = 0; i < mapPicks.length; i++) {
			mapPicksData[i] = await getTeamStatsForMap(teams, mapPicks[i]);
			mapPicksData[i].mapImage = getMapData(mapPicks[i]).image_lg;
			mapPicksData[i].mapName = getMapData(mapPicks[i]).name;
			mapPicksData[i][0].color = 'text-neutral-content';
			mapPicksData[i][1].color = 'text-secondary-content';
		}
	});
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	{#if mapPicksData}
		{#each mapPicksData as map, i}
			<MapCard {map} teamData={mapPicksData[i]} teamLogo={team2Logo} />
			{#if i == 0}
				<div class="divider text-primary divider-horizontal">&</div>
			{/if}
		{/each}
	{/if}
</div>
