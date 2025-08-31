<script>
	import MapStats from '../MapStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
	
	let mapStatsComponent;
	$: dataLoaded = mapStatsComponent?.mapStatsTeam != null;
</script>

<svelte:head>
	<title>MapStats</title>
</svelte:head>

{#if dataLoaded}
	<!-- When data is loaded, show only the stats component -->
	<MapStats bind:this={mapStatsComponent} />
{:else}
	<!-- When no data, show the input form in a container -->
	<div class="container mx-auto p-4">
		<MatchIdInput dataLoaded={dataLoaded} />
		<MapStats bind:this={mapStatsComponent} />
	</div>
{/if}
