<script>
	import MapStats from '../MapStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
	
	let mapStatsComponent: MapStats;
	$: dataLoaded = mapStatsComponent?.mapStatsTeam != null;
</script>

<svelte:head>
	<title>MapStats</title>
</svelte:head>

<div class="container mx-auto p-4">
	<MatchIdInput dataLoaded={dataLoaded} />
	<MapStats bind:this={mapStatsComponent} />
</div>
