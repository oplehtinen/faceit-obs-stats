<script lang="ts">
	import PlayerTable from './PlayerTable.svelte';
	import PlayerMapTable from './PlayerMapTable.svelte';
	import type { mapData, team, tournamentId } from '$lib/dataTypes.d.ts';
	import { fly } from 'svelte/transition';
	import { expoIn } from 'svelte/easing';
	import MapCard from './MapCard.svelte';
	import type { player } from '$lib/dataTypes.d.ts';
	import type { matchStats } from '$lib/dataTypes.d.ts';
	export let teams: { faction1: team; faction2: team };
	export let tournamentId: tournamentId;
	export let matchStats: matchStats[];
	export let nextMap: any;
	export let mapInfo: undefined | { mapData: mapData; stats: any };
	let color = 'text-primary-content';
	let mapName: string;
	//(matchStats);
	//(nextMap);
	const teamArr = [teams.faction1, teams.faction2];
	console.log(matchStats);

	if (nextMap > 0) {
		teamArr.forEach((team, i) => {
			team.roster.forEach((player: player, j) => {
				player.mapstats = matchStats[nextMap - 1].teams[i].players.find(
					(p: { player_id: any }) => p.player_id == player.player_id
				).player_stats;
				//player.mapstats = matchStats.rounds[nextMap - 1].teams[i].players[j].player_stats;
				//(player.mapstats);
			});
		});
		console.log(teamArr);
		// find the mapstats for each player, make sure the order is correct

		//(teams);
		//teams = matchStats.rounds[nextMap - 1].teams;
		mapName = matchStats[nextMap - 1].round_stats.Map.replace('de_', '');
	}
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	{#if nextMap > 0 && nextMap < 3}
		<div class="grid w-full">
			<PlayerMapTable
				teamRoster={teamArr[0].roster}
				index={0}
				{tournamentId}
				color="primary-content"
			/>
		</div>
		<div
			out:fly={{ y: 2000, duration: 500, easing: expoIn }}
			class="divider justify-between w-max divider-horizontal w-24"
		>
			<div class="w-24 flex flex-col text-2xl text-center justify-evenly">
				<div class="text-white font-light">{nextMap}. kartta</div>
				<div class="text-white capitalize">{mapName}</div>
				<div class="flex w-24 text-center font-bold justify-evenly">
					<div>{matchStats[nextMap - 1].teams[0].team_stats['Final Score']}</div>
					<span class="text-white">{' '}</span>
					<div class={teamArr[1].color}>
						{matchStats[nextMap - 1].teams[1].team_stats['Final Score']}
					</div>
				</div>
			</div>
		</div>
		<div class="grid w-full">
			<PlayerMapTable
				teamRoster={teamArr[1].roster}
				index={1}
				{tournamentId}
				color="text-secondary-content"
			/>
		</div>
	{:else}
		<div class="grid w-full">
			<PlayerTable
				teamRoster={teamArr[0].roster}
				index={0}
				{tournamentId}
				color="primary-content"
			/>
		</div>
		<div out:fly={{ y: 2000, duration: 500, easing: expoIn }} class="divider divider-horizontal">
			VS
		</div>
		<div class="grid w-full">
			<PlayerTable
				teamRoster={teamArr[1].roster}
				{tournamentId}
				index={1}
				color="text-secondary-content"
			/>
		</div>
	{/if}
</div>
