<script>
	import PlayerGeneralStats from '../PlayerGeneralStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
	
	let playerStatsComponent;
	$: dataLoaded = playerStatsComponent?.teamsData != null;
</script>

<svelte:head>
	<title>PlayerStats</title>
</svelte:head>

<div class="container mx-auto p-4">
	<MatchIdInput dataLoaded={dataLoaded} />
	<PlayerGeneralStats bind:this={playerStatsComponent} />
</div>
