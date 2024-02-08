<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type {
		mapData,
		mapName,
		mapPicks,
		matchDetails,
		matchStatus,
		nextMapIndex,
		team
	} from '$lib/dataTypes.d.ts';
	import { onMount } from 'svelte';
	import {
		getMatchDetails,
		getMatchStats,
		getOrganizerDetails,
		getTournamentDetails
	} from '../lib/faceit';
	import { maps } from '$lib/maps';
	import { teams as teamsData } from '$lib/stores';
	import IntroPage from './IntroPage.svelte';
	import MapPicks from './MapPicks.svelte';
	import MapStats from './MapStats.svelte';
	import PlayerStats from './PlayerStats.svelte';
	import ScoreBoard from './ScoreBoard.svelte';
	//import { matchId as matchIdString } from '$lib/stores.js';
	const matchId = env.PUBLIC_MATCHID;
	const matchIdString = matchId;
	let matchData: matchDetails;
	let mapPicks: mapName[];
	let mapData: Array<any>;
	let teams: team[];
	import { get } from 'svelte/store';
	let tournamentData: any;
	let tournamentId: any;
	//let matchId: any;
	let matchStats: any;
	let organizerData: any;
	let allMaps: mapData[] = maps;
	let startTime: any = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	let carouselIndex = 1;
	let nextMap: nextMapIndex = 0;
	let status: matchStatus = 'SCHEDULED';
	let tournamentMaps: any[] = [];
	let mapInfo: {
		mapData: mapData | undefined;
		stats: any;
	};
	// get the teams from the store
	//let matchId = $matchIdString;
	'matchId: from da store' + matchId;
	//let matchId = env.PUBLIC_MATCHID;
	'matchId:' + matchId;
	onMount(async () => {
		//matchData = await getMatchDetails('1-d429201c-2011-45b7-a403-69c3140c85e9');
		//matchData = await getMatchDetails('1-cfa9435d-8da0-4f0e-b709-6e13275af54f');
		//matchData = await getMatchDetails('1-5b56ced7-4e96-4900-87a3-1eaf4b6df238'); // random peli b03
		//matchData = await getMatchDetails('1-88c5a65c-8335-4697-91a7-a9dddf1dbf18'); // random peli
		//matchData = await getMatchDetails('1-eaea5eb1-0291-4352-b60d-f6d47fc5924f'); // random peli b01
		//matchData = await getMatchDetails('1-73922f88-3f0a-4148-98fd-02750f3fcec9'); // pe demopeli 20.00
		matchData = await getMatchDetails(matchId);
		teamsData.subscribe((value) => {
			teams = value;
		});
		status = matchData.status ?? 'VOTING';
		'fetched match id: ' + matchData.match_id;
		const update = setInterval(async () => {
			matchId;
			matchData = await getMatchDetails(matchId);
			//status = matchData.status;
			'match status: ' + status;
			if (status === 'FINISHED') {
				clearInterval(update);
			}
		}, 60000);

		// rotate carouselIndex every 5 seconds
		/* 		const carousel = setInterval(() => {
			carouselIndex++;
			if (carouselIndex > 1) {
				carouselIndex = 0;
			}
			//console.log(carouselIndex);
		}, 20000); */

		matchData;
		tournamentId = matchData.competition_id;
		//matchId = matchData.match_id;
		matchStats = await getMatchStats(matchId);
		teams = $teamsData;
		nextMap = matchData.results && matchData.results.score ? teams[0].score + teams[1].score : 0;
		//nextMap = 1;
		tournamentMaps = [
			'de_inferno',
			'de_vertigo',
			'de_ancient',
			'de_mirage',
			'de_nuke',
			'de_overpass',
			'de_anubis'
		];
		//tournamentMaps = matchData.voting ? matchData.voting.map.entities.map((map) => map.guid) : [];
		//console.log('next map:' + nextMap);
		tournamentData = await getTournamentDetails(await matchData.competition_id);
		organizerData = organizerData
			? organizerData
			: await getOrganizerDetails(await matchData.organizer_id);
		organizerData.division = matchData.competition_name;
		organizerData;

		if (nextMap > 0 && matchStats.rounds) {
			mapInfo = {
				mapData: allMaps.find((map) => map.game_map_id === tournamentMaps[nextMap - 1]),
				stats: [
					matchStats.rounds[nextMap - 1].teams[0].team_stats,
					matchStats.rounds[nextMap - 1].teams[1].team_stats
				]
			};
		}
		console.log(mapInfo);
		mapPicks = matchData.voting ? matchData.voting.map.pick : [];
		mapData = [...maps];
	});
	console.log('nextMap: ' + nextMap);
	$: console.log('status: ' + status);
</script>

<div class="h-1/6">
	{#if teams && organizerData}
		<ScoreBoard {teams} {organizerData} {startTime} {status} />
	{/if}
</div>

<!-- {#if status !== 'VOTING' && mapPicks && mapData && teams}
	<MapPicks {mapPicks} {mapData} {teams} {matchStats} {nextMap} />
{/if} -->
<!-- {#if carouselIndex == 0 && status !== 'VOTING' && mapPicks && mapData && teams}
	<MapPicks {mapPicks} {mapData} {teams} {matchStats} {nextMap} />
{/if} -->
<div class="h-5/6 flex justify-end flex-column flex-wrap w-full">
	<!-- 		{#if carouselIndex == 0 && status !== 'VOTING' && mapPicks && mapPicks.length > 0 && mapData && teams}
		<MapPicks {mapPicks} {mapData} {teams} {matchStats} {nextMap} />
	{:else if carouselIndex == 0 && status !== 'VOTING' && mapData && teams}
		<MapStats {teams} {tournamentMaps} />
	{/if}
	{#if carouselIndex == 0 && status !== 'VOTING' && mapData && teams}
		<MapStats {teams} {tournamentMaps} />
	{/if}
	{#if carouselIndex == 1 && status !== 'VOTING' && nextMap !== undefined && matchStats !== undefined}
		<PlayerStats {teams} {tournamentId} {matchStats} {nextMap} {mapInfo} />
	{/if} -->
	<div class="flex w-full mt-8">
		<div class="card w-full bg-black text-neutral-content">
			<div class="card-body items-center flex-row justify-around text-center text-primary">
				<div>
					<h2 class="card-title font-light text-3xl">Pappaliiga</h2>
					<h3 class="card-subtitle text-5xl">6. divisioona</h3>
				</div>
				<div class="w-64 rounded-full">
					<img src={'https://i.imgur.com/ohVJhgV.png'} alt="logo" />
				</div>
				<button class="btn gap-2 text-lg">Haastattelu</button>
				<div class="flex-row justify-around">
					<h2 class="card-title font-light text-3xl text-white mb-4">Pelaajat</h2>
					<div class="chat chat-start">
						<div class="chat-bubble w-48 h-8 text-white">Kyliys</div>
					</div>
					<div class="chat chat-start">
						<div class="chat-bubble w-48 h-8 text-white">Jortsi</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{#if organizerData}
	<!-- 	<div class="divider divider-vertical" /> -->
	<IntroPage {organizerData} {status} />
{/if}

{#if status == 'SCHEDULED' && mapData && teams}
	<MapStats mapData={allMaps} {teams} />
{/if}

{#if teams && tournamentId && status !== 'VOTING' && nextMap !== undefined && matchStats !== undefined}
	<div class="divider divider-vertical" />
	<PlayerStats {teams} {tournamentId} {matchStats} {nextMap} />
{:else}{/if}

<!-- <div class="flex w-full mt-8">
	<div class="card w-full bg-black text-neutral-content">
		<div class="card-body items-center flex-row justify-around text-center text-primary">
			<div>
				<h2 class="card-title font-light text-3xl">Pappaliiga</h2>
				<h3 class="card-subtitle text-5xl">6. divisioona</h3>
			</div>
			<button class="btn gap-2 text-lg">Haastattelu</button>
			<div class="flex-row justify-around">
				<h2 class="card-title font-light text-3xl text-white mb-4">Pelaajat</h2>
				<div class="chat chat-start">
					<div class="chat-bubble w-48 h-8 text-white">rauta</div>
				</div>
				<div class="chat chat-start">
					<div class="chat-bubble w-48 h-8 text-white">Mafala</div>
				</div>
								<div class="chat chat-end">
					<div class="chat-bubble w-48 h-8 text-white">nuoritomppa</div>
				</div>
			</div>
		</div>
	</div>
</div>
 -->
