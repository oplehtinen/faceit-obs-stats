<script lang="ts">
	import PlayerStats from '../PlayerStats.svelte';
	import { env } from '$env/dynamic/public';
	import type { matchDetails, matchId, matchStatus, nextMapIndex, team } from '$lib/dataTypes.d.ts';
	import { onMount } from 'svelte';
	import {
		getMatchDetails,
		getMatchStats,
		getOrganizerDetails,
		getTournamentDetails
	} from '$lib/faceit';
	import { maps } from '$lib/maps';
	import { tick } from 'svelte';
	const matchId = env.PUBLIC_MATCHID as matchId;
	let matchData: matchDetails;
	let tournamentId: any;
	let show = false;
	let matchStats: any;
	let nextMap: nextMapIndex = 0;
	let mapInfo: {
		mapData: any;
		stats: any;
	};
	import { teams as teamsData } from '$lib/stores';
	import { get } from 'svelte/store';
	let teams: any;

	onMount(async () => {
		await tick();
		console.log(teamsData);
		teamsData.subscribe((value) => {
			teams = value;
			console.log(teams);
			show = true;
		});
		matchData = await getMatchDetails(matchId);
		matchStats = await getMatchStats(matchId);
		tournamentId = matchData.competition_id;
		console.log(tournamentId);
		console.log(matchStats);
		console.log(nextMap);
		console.log(mapInfo);
		matchStats = await getMatchStats(matchId);
		mapInfo = {
			mapData: maps.find((map) => map.name === nextMap.map),
			stats: nextMap
		};
	});
</script>

{#if show && teams}
	<PlayerStats {teams} {tournamentId} {matchStats} {nextMap} {mapInfo} />
{/if}
