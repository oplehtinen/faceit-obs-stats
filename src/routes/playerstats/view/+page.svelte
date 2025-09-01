<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentMatchId, useMockData } from '../../../stores';
	import PlayerGeneralStats from '../../PlayerGeneralStats.svelte';

	let playerStatsComponent;

	onMount(() => {
		// Get match ID and mock flag from URL query parameters
		const matchId = $page.url.searchParams.get('id');
		const mockFlag = $page.url.searchParams.get('mock') === 'true';
		
		if (matchId) {
			currentMatchId.set(matchId);
		}
		
		useMockData.set(mockFlag);
	});
</script>

<!-- Only show the stats component, no input field -->
<PlayerGeneralStats bind:this={playerStatsComponent} />
<PlayerGeneralStats bind:this={playerStatsComponent} />
