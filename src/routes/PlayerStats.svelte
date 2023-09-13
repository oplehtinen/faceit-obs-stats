<script lang="ts">
	import PlayerTable from './PlayerTable.svelte';
	import PlayerMapTable from './PlayerMapTable.svelte';
	export let teams: Array<any>;
	export let tournamentId: string;
	export let matchStats: Array<any>;
	export let nextMap: any;

	//console.log(matchStats);
	//console.log(nextMap);

	if (nextMap > 0) {
		teams.forEach((team, i) => {
			team.roster.forEach((player, j) => {
				player.mapstats = matchStats.rounds[nextMap - 1].teams[i].players.find(
					(p: { player_id: any }) => p.player_id == player.player_id
				).player_stats;
				//player.mapstats = matchStats.rounds[nextMap - 1].teams[i].players[j].player_stats;
				//console.log(player.mapstats);
			});
		});

		// find the mapstats for each player, make sure the order is correct

		//console.log(teams);
		//teams = matchStats.rounds[nextMap - 1].teams;
	}
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	{#if nextMap > 0}
		<div class="grid w-full">
			<PlayerMapTable teamRoster={teams[0].roster} {tournamentId} />
		</div>
		<div class="divider divider-horizontal">VS</div>
		<div class="grid w-full">
			<PlayerMapTable teamRoster={teams[1].roster} {tournamentId} color="text-secondary-content" />
		</div>
	{:else}
		<div class="grid w-full">
			<PlayerTable teamRoster={teams[0].roster} {tournamentId} />
		</div>
		<div class="divider divider-horizontal">VS</div>
		<div class="grid w-full">
			<PlayerTable teamRoster={teams[1].roster} {tournamentId} color="text-secondary-content" />
		</div>
	{/if}
</div>
