<script>
	import PlayerGeneralStats from '../PlayerGeneralStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
	
	let playerStatsComponent;
	$: dataLoaded = playerStatsComponent?.teamsData != null;
</script>

<svelte:head>
	<title>PlayerStats</title>
</svelte:head>

{#if dataLoaded}
	<!-- When data is loaded, show only the stats component -->
	<PlayerGeneralStats bind:this={playerStatsComponent} />
{:else}
	<!-- When no data, show the input form in a container -->
	<div class="container mx-auto p-4">
		<MatchIdInput dataLoaded={dataLoaded} />
		<PlayerGeneralStats bind:this={playerStatsComponent} />
	</div>
{/if}
