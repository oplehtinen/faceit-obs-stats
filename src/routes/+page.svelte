<script lang="ts">
	import ScoreBoard from './ScoreBoard.svelte';
	import PlayerStats from './PlayerStats.svelte';
	import MapPicks from './MapPicks.svelte';
	import { onMount } from 'svelte';
	import { getMatchDetails } from '../lib/faceit';
	let matchData: any;
	let team1: string;
	let team2: string;
	let team1Score: number;
	let team2Score: number;
	let team1Roster: Array<object>;
	let team2Roster: Array<object>;
	let mapPicks: Array<string>;
	let mapData: Array<any>;
	let team1Logo: string;
	let team2Logo: string;
	let teams: Array<any>;
	onMount(async () => {
		//matchData = await getMatchDetails("1-d429201c-2011-45b7-a403-69c3140c85e9");
		matchData = await getMatchDetails('1-cfa9435d-8da0-4f0e-b709-6e13275af54f');
		console.log(matchData);
		team1 = matchData.teams.faction1;
		team2 = matchData.teams.faction2;
		teams = [matchData.teams.faction1, matchData.teams.faction2];
		team1Score = matchData.results.score.faction1 ?? 0;
		team2Score = matchData.results.score.faction2 ?? 0;
		team1Roster = matchData.teams.faction1.roster;
		team2Roster = matchData.teams.faction2.roster;
		mapPicks = matchData.voting.map.pick;
		mapData = matchData.voting.map.entities;
		team1Logo = matchData.teams.faction1.avatar;
		team2Logo = matchData.teams.faction2.avatar;
	});
</script>

{#if matchData}
	<ScoreBoard team1={team1.name} team2={team2.name} {team1Score} {team2Score} />
{/if}

{#if mapPicks}
	<MapPicks {mapPicks} {mapData} {teams} {team1Logo} {team2Logo} />
{/if}
<div class="divider divider-vertical" />

{#if team1Roster}
	<PlayerStats {team1Roster} {team2Roster} />
{/if}
