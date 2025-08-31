<script lang="ts">
	import '../app.css';
	import { onDestroy } from 'svelte';
	import { PUBLIC_MATCHID } from '$env/static/public';
	import ScoreBoard from './ScoreBoard.svelte';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { writable } from 'svelte/store';
	import type { matchId } from '$lib/dataTypes';
	import { page } from '$app/stores';
	export let data;
	onMount(async () => {
		await tick();
		console.log(data);
		/* 	// find matching player stats for each player in the team roster
		if ($playerStatsStore) {
			$teamsStore.faction1.roster.forEach((player: any, i: number) => {
				const playerStat = playerStats.find((p: any) => p.player_id == player.player_id);
				if (playerStat) {
					player.stats = playerStat.stats;
				}
			});
			$teamsStore.faction2.roster.forEach((player: any, i: number) => {
				const playerStat = playerStats.find((p: any) => p.player_id == player.player_id);
				if (playerStat) {
					player.stats = playerStat.stats;
				}
			});
			console.log($teamsStore);
		} */

		/* 		console.log(playerStats);
		console.log(matchDetailsData);
		console.log(organizerData); */
	});
</script>

<div
	class="flex py-2 items-center justify-center h-screen animate-text bg-gradient-to-b from-secondary from-10% via-accent via-30% to-base-content to-90%"
>
	<div class="container-fluid mx-auto my-4 px-8 gap-4 flex flex-col h-full w-full justify-evenly">
		{#if data.matchDetailsData}
			<ScoreBoard />
		{:else}
			<!-- Show a minimal header when no match data is loaded -->
			<div class="text-center">
				<h1 class="text-2xl font-bold">Pappaliiga OBS</h1>
			</div>
		{/if}
		<slot />
	</div>
</div>
