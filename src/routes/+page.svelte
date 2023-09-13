<script lang="ts">
	import ScoreBoard from './ScoreBoard.svelte';
	import PlayerStats from './PlayerStats.svelte';
	import MapPicks from './MapPicks.svelte';
	import MapStats from './MapStats.svelte';
	import { onMount } from 'svelte';
	import { getMatchDetails } from '../lib/faceit';
	import { getTournamentDetails } from '../lib/faceit';
	import { getOrganizerDetails } from '../lib/faceit';
	import { getMatchStats } from '../lib/faceit';
	import { maps } from '../lib/maps';
	import IntroPage from './IntroPage.svelte';
	import { env } from '$env/dynamic/public';
	import Anim from './Anim.svelte';
	//import { matchId as matchIdString } from '$lib/stores.js';
	const matchId = env.PUBLIC_MATCHID;
	const matchIdString = matchId;
	let matchData: any;
	let mapPicks: Array<string>;
	let mapData: Array<any>;
	let teams: Array<any>;
	let tournamentData: any;
	let tournamentId: any;
	//let matchId: any;
	let matchStats: any;
	let organizerData: any;
	let allMaps = maps;
	let startTime: any = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	let nextMap = 0;
	let status = 'VOTING';
	//let matchId = $matchIdString;
	console.log('matchId: from da store' + matchId);
	//let matchId = env.PUBLIC_MATCHID;
	console.log('matchId:' + matchId);
	onMount(async () => {
		//matchData = await getMatchDetails('1-d429201c-2011-45b7-a403-69c3140c85e9');
		//matchData = await getMatchDetails('1-cfa9435d-8da0-4f0e-b709-6e13275af54f');
		//matchData = await getMatchDetails('1-5b56ced7-4e96-4900-87a3-1eaf4b6df238'); // random peli b03
		//matchData = await getMatchDetails('1-88c5a65c-8335-4697-91a7-a9dddf1dbf18'); // random peli
		//matchData = await getMatchDetails('1-eaea5eb1-0291-4352-b60d-f6d47fc5924f'); // random peli b01
		//matchData = await getMatchDetails('1-73922f88-3f0a-4148-98fd-02750f3fcec9'); // pe demopeli 20.00
		matchData = await getMatchDetails(matchId);
		console.log('matchId:' + matchData.match_id);

		status = matchData.status ?? 'VOTING';
		console.log('fetched match id: ' + matchData.match_id);
		const update = setInterval(async () => {
			console.log(matchId);
			matchData = await getMatchDetails(matchId);
			console.log(matchData);
			//status = matchData.status;
			console.log('match status: ' + status);
			if (status === 'FINISHED') {
				clearInterval(update);
			}
		}, 60000);

		const unixTime = matchData.scheduled_at;
		const timer = setInterval(async () => {
			const date = new Date(unixTime);
			const diff = date.getTime() - Date.now();
			const time = new Date(diff);
			const hours = time.getUTCHours();
			const minutes = time.getUTCMinutes();
			const seconds = time.getUTCSeconds();
			startTime = {
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};
		}, 1000);

		console.log(matchData);
		tournamentId = matchData.competition_id;
		//matchId = matchData.match_id;
		matchStats = await getMatchStats(matchId);
		nextMap =
			matchData.results && matchData.results.score
				? matchData.results.score.faction1 + matchData.results.score.faction2
				: 0;
		console.log('next map:' + nextMap);
		console.log(matchStats);
		//tournamentData = await getTournamentDetails(await matchData.competition_id);
		organizerData = await getOrganizerDetails(await matchData.organizer_id);
		organizerData.division = matchData.competition_name;
		console.log(organizerData);
		teams = [matchData.teams.faction1, matchData.teams.faction2];
		teams[0].score = matchData.results ? matchData.results.score.faction1 : 0;
		teams[1].score = matchData.results ? matchData.results.score.faction2 : 0;
		mapPicks = matchData.voting ? matchData.voting.map.pick : null;
		mapData = matchData.voting ? matchData.voting.map.entities : [maps];
	});
</script>

{#if teams && organizerData}
	<ScoreBoard {teams} {organizerData} {startTime} {status} />
{/if}

{#if status == 'SCHEDULED' && organizerData}
	<div class="divider divider-vertical" />
	<IntroPage {organizerData} />
{/if}

{#if status !== 'VOTING' && mapPicks && mapData && teams}
	<MapPicks {mapPicks} {mapData} {teams} {matchStats} {nextMap} />
{/if}
{#if status == 'VOTING' && mapData && teams}<MapStats mapData={allMaps} {teams} />{/if}

<div class="divider divider-vertical" />

{#if teams && tournamentId && status !== 'VOTING' && nextMap !== undefined && matchStats !== undefined}
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
					<div class="chat-bubble w-48 h-8 text-white">kyliys</div>
				</div>
				<div class="chat chat-start">
					<div class="chat-bubble w-48 h-8 text-white">kyliys</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble w-48 h-8 text-white">nuoritomppa</div>
				</div>
			</div>
		</div>
	</div>
</div>
 -->
