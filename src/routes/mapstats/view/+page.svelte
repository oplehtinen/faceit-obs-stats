<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentMatchId } from '../../../stores';
	import MapStats from '../../MapStats.svelte';

	let mapStatsComponent;

	onMount(() => {
		// Get match ID from URL query parameter
		const matchId = $page.url.searchParams.get('id');
		if (matchId) {
			currentMatchId.set(matchId);
		}
	});
</script>

<svelte:head>
	<title>MapStats</title>
</svelte:head>

<!-- Only show the stats component, no input field -->
<MapStats bind:this={mapStatsComponent} />