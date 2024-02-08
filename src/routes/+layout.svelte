<script lang="ts">
	import '../app.css';
	import { onDestroy } from 'svelte';
	import { status, teams } from '$lib/stores';
	import { getMatchDetails, getMatchStats } from '$lib/faceit';
	import { onMount } from 'svelte';

	let statusText = '';
	let matchStats: matchStats;
	let nextMap: number;
	import { PUBLIC_MATCHID } from '$env/static/public';
	const matchId = PUBLIC_MATCHID;
	const unsubscribe = status.subscribe((value) => (statusText = value));
	onMount(async () => {
		matchStats = await getMatchStats(matchId);
		const matchData = await getMatchDetails(matchId);
		const teams = [matchData.teams.faction1, matchData.teams.faction2];
		teams[0].score = matchData.results ? parseFloat(matchData.results.score.faction1) : 0;
		teams[1].score = matchData.results ? parseFloat(matchData.results.score.faction2) : 0;
		teams[0].color = 'text-neutral-content';
		teams[1].color = 'text-secondary-content';
		$teams = teams;
		console.log(teams);
		nextMap = matchData.results && matchData.results.score ? teams[0].score + teams[1].score : 0;
	});
	onDestroy(unsubscribe);
</script>

<div
	class="flex py-2 items-center justify-center h-screen animate-text bg-gradient-to-b from-secondary from-10% via-accent via-30% to-base-content to-90%"
>
	<div class="container-fluid mx-auto my-4 px-8 gap-4 flex flex-col h-full w-full justify-evenly">
		<slot />
	</div>
</div>
