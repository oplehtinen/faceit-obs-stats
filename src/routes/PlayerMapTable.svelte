<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut, expoIn, expoOut } from 'svelte/easing';
	import { getTournamentStatsForPlayer } from '../lib/faceit';
	import type { player, playerStat } from '$lib/dataTypes';
	export let teamRoster: player[];
	export let tournamentId: any;
	export let index = 0;
	export let color: string = 'text-primary-content';
	//export let : string = 'neutral-content';
	let playerStats: playerStat[];

	teamRoster;

	onMount(async () => {
		const allPlayerStats = await getTournamentStatsForPlayer(
			//'9a5a7b34-29dd-4708-95aa-e37b4128b9c2'
			tournamentId
		);
		//(allPlayerStats);
		teamRoster.forEach((player) => {
			const playerStats = allPlayerStats.find(
				(p: { player_id: any }) => p.player_id == player.player_id
			);
			player.stats = playerStats ? playerStats.stats : {};
		});
		playerStats = teamRoster;
		playerStats;
		// sort by highest kills
		playerStats.sort((a, b) => {
			return b.mapstats.Kills - a.mapstats.Kills;
		});
		console.log(playerStats);
	});
</script>

<table
	out:fly={{ x: index == 0 ? -1000 : 1000, duration: 1500, easing: expoOut }}
	class="table table-auto text-base {color} opacity-90 w-full"
>
	<thead in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
		<tr in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
			<th>Peluri</th>
			{#if playerStats}
				<th>K</th>
				<th>A</th>
				<th>D</th>
				<th>HS %</th>
			{/if}
		</tr>
	</thead>
	<tbody in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
		{#if playerStats}
			{#each playerStats as player}
				<tr in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									{#if player.avatar != ''}
										<img src={player.avatar} alt="Avatar Tailwind CSS Component" />
									{:else}
										<div class="bg-neutral-focus text-neutral-content rounded-full w-24" />
									{/if}
								</div>
							</div>
							<div>
								<div class="font-bold">{player.nickname}</div>
								<div class="text-sm bg-opacity-50">Faceit level: {player.game_skill_level}</div>
							</div>
						</div>
					</td>
					{#if player.mapstats.Kills}
						<td>
							{player.mapstats.Kills}
							<!-- 							<br />
							{#if parseFloat(player.mapstats['Penta Kills']) == 1}
								<span class="badge {color} badge-ghost badge-sm"
									>{player.mapstats['Penta Kills']} ässä</span
								>
							{:else}
								<span class="badge {color} badge-ghost badge-sm"
									>{player.mapstats['Penta Kills']} ässää</span
								>
							{/if} -->
						</td>
						<td>{player.mapstats.Assists}</td>
						<td>{player.mapstats.Deaths}</td>
						<td>{player.mapstats['Headshots %']}%</td>
					{/if}
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
