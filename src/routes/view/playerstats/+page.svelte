<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { currentMatchId, useMockData } from '../../../stores';
	import PlayerGeneralStats from '$lib/components/PlayerGeneralStats.svelte';
	import StartingSoon from '$lib/components/StartingSoon.svelte';

	let playerStatsComponent;
	let countdownMinutes = 0;

	onMount(() => {
		// Get match ID and mock flag from URL query parameters
		const matchId = $page.url.searchParams.get('id');
		const mockFlag = $page.url.searchParams.get('mock') === 'true';
		const countdown = $page.url.searchParams.get('countdown');

		if (matchId) {
			currentMatchId.set(matchId);
		}

		useMockData.set(mockFlag);

		// Set countdown if provided
		if (countdown && !isNaN(parseInt(countdown))) {
			countdownMinutes = parseInt(countdown);
		}
	});
</script>

<!-- Show Starting Soon component if countdown is specified -->
{#if countdownMinutes > 0}
	<StartingSoon {countdownMinutes} />
{/if}
<!-- Show player stats at the bottom -->
<PlayerGeneralStats bind:this={playerStatsComponent} />
