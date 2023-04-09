<script lang="ts">
	import ScoreBoard from './ScoreBoard.svelte';
	import PlayerStats from './PlayerStats.svelte';
	import MapPicks from './MapPicks.svelte';
	import MapStats from './MapStats.svelte';
	import { onMount } from 'svelte';
	import { getMatchDetails } from '../lib/faceit';
	import { getTournamentDetails } from '../lib/faceit';
	import { getOrganizerDetails } from '../lib/faceit';
	import { maps } from '../lib/maps';
	let matchData: any;
	let mapPicks: Array<string>;
	let mapData: Array<any>;
	let teams: Array<any>;
	let tournamentData: any;
	let organizerData: any;
	let allMaps = maps;
	let startTime: any;
	let status = 'SCHEDULED';
	onMount(async () => {
		//matchData = await getMatchDetails("1-d429201c-2011-45b7-a403-69c3140c85e9");
		//matchData = await getMatchDetails('1-cfa9435d-8da0-4f0e-b709-6e13275af54f');
		matchData = await getMatchDetails('1-a367a700-ea8f-48a2-85a6-b2cb29a238a1');
		//matchData = await getMatchDetails('1-e4865262-5f2d-4105-a054-542539baa315');
		// every minute, fetch the match details and update the status
		status = matchData.status;
		const update = setInterval(async () => {
			matchData = await getMatchDetails(matchData.match_id);
			status = matchData.status;
			if (status === 'FINISHED') {
				clearInterval(update);
			}
		}, 10000);

		const unixTime = matchData.scheduled_at;
		const date = new Date(unixTime);
		const minutes = '0' + date.getMinutes();
		const seconds = '0' + date.getSeconds();
		startTime = { minutes, seconds };
		// every second, update the countdown
		const interval = setInterval(() => {
			startTime.seconds -= 1;
			if (startTime.seconds < 0) {
				startTime.seconds = 59;
				startTime.minutes -= 1;
			}
			if (startTime.minutes < 0) {
				clearInterval(interval);
			}
		}, 1000);

		//tournamentData = await getTournamentDetails(await matchData.competition_id);
		organizerData = await getOrganizerDetails(await matchData.organizer_id);
		organizerData.division = matchData.competition_name;
		console.log(organizerData);
		console.log(matchData);
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
	<div class="flex w-full">
		<div class="card w-full bg-black text-neutral-content">
			<div class="card-body items-center text-center">
				<div>
					<h2 class="card-title font-light text-3xl">{organizerData.name}</h2>
					<h3 class="card-subtitle text-2xl">{organizerData.division}</h3>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if status !== 'VOTING' && mapPicks && mapData && teams}
	<MapPicks {mapPicks} {mapData} {teams} />
{/if}
{#if status == 'VOTING' && mapData && teams}
	<MapStats mapData={allMaps} {teams} />
{/if}
<div class="divider divider-vertical" />

{#if teams && status !== 'VOTING'}
	<PlayerStats {teams} />
{/if}
