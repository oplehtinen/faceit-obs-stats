<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import type { matchDetails, team } from '$lib/dataTypes';
	import { maps as staticMapData } from '$lib/maps';
	import {
		currentMatchId,
		teamsDataStore,
		matchDetailsDataStore,
		loadingStore,
		errorStore,
		useMockData
	} from '../../stores';

	let match: matchDetails | null = null;
	let teamArr: team[] = [];
	let loading = false;
	let error = '';
	let isMockData = false;

	// Subscribe to centralized stores
	$: match = $matchDetailsDataStore as matchDetails | null;
	$: teamArr = $teamsDataStore
		? ([$teamsDataStore.faction1, $teamsDataStore.faction2] as team[])
		: [];
	$: loading = $loadingStore;
	$: error = $errorStore;
	$: isMockData = $useMockData;

	// Get all available maps from voting entities or picked maps
	$: allMaps = match?.voting?.map?.entities || [];
	$: pickedMaps = match?.voting?.map?.pick || [];

	// Determine map status (picked or banned)
	// If a map is in pickedMaps, it's picked; otherwise it's banned from the pool
	$: mapStatuses = allMaps.map((mapEntity) => {
		const isPicked = pickedMaps.includes(mapEntity.guid);
		return {
			...mapEntity,
			status: isPicked ? 'picked' : 'banned'
		};
	});

	// If entities are not available, use the picked maps list and static map data
	$: fallbackMaps = pickedMaps.map((mapGuid, index) => {
		const mapName = mapGuid.replace('de_', '');
		const capitalizedName = mapName.charAt(0).toUpperCase() + mapName.slice(1);
		const mapKey = capitalizedName as keyof typeof staticMapData;
		const mapInfo = staticMapData[mapKey];

		return {
			guid: mapGuid,
			name: capitalizedName,
			image_lg: mapInfo?.image_lg || '',
			image_sm: mapInfo?.image_sm || '',
			class_name: mapGuid,
			game_map_id: mapGuid,
			status: 'picked'
		};
	});

	// Use entities if available, otherwise use fallback
	$: displayMaps = allMaps.length > 0 ? mapStatuses : fallbackMaps;

	// Get status badge class
	const getStatusClass = (status: string) => {
		if (status === 'picked') {
			return 'badge-success';
		} else if (status === 'banned') {
			return 'badge-error';
		}
		return 'badge-neutral';
	};

	// Get status text
	const getStatusText = (status: string) => {
		if (status === 'picked') {
			return 'PICKED';
		} else if (status === 'banned') {
			return 'BANNED';
		}
		return 'AVAILABLE';
	};
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
		<span>Please enter a match ID above to load pick/ban phase.</span>
	</div>
{:else if displayMaps.length > 0}
	{#if isMockData}
		<div class="alert alert-info mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Demo Mode: This data is simulated for demonstration purposes.</span>
		</div>
	{/if}

	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		{#each displayMaps as map, i (map.guid)}
			<div
				class="card shadow-xl image-full"
				in:fly={{ y: -50, duration: 300 + i * 100, easing: expoIn }}
				out:fly={{ y: 50, duration: 300, easing: expoOut }}
			>
				<figure>
					<img src={map.image_lg} class="w-full h-full object-cover" alt={map.name} />
				</figure>
				<div class="card-body justify-between p-4">
					<div class="card-actions justify-end">
						<div class="badge {getStatusClass(map.status)} badge-lg">
							{getStatusText(map.status)}
						</div>
					</div>
					<h2 class="card-title text-3xl text-primary capitalize">
						{map.name}
					</h2>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="alert alert-warning">
		<span>No map data available for this match.</span>
	</div>
{/if}
