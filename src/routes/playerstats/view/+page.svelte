<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentMatchId } from '../../../stores';
	import PlayerGeneralStats from '../../PlayerGeneralStats.svelte';

	let playerStatsComponent;

	onMount(() => {
		// Get match ID from URL query parameter
		const matchId = $page.url.searchParams.get('id');
		if (matchId) {
			currentMatchId.set(matchId);
		}
	});
</script>

<!-- Only show the stats component, no input field -->
<PlayerGeneralStats bind:this={playerStatsComponent} />
