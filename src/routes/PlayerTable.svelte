<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut, expoIn, expoOut } from 'svelte/easing';
	import { getTournamentStatsForPlayer } from '../lib/faceit';
	export let teamRoster: Array<any>;
	export let index = 0;
	export let tournamentId: any;
	export let color: string = 'neutral-content';
	let playerStats: Array<any>;

	let allPlayerStats;
	teamRoster;

	onMount(async () => {
		allPlayerStats = await getTournamentStatsForPlayer(
			'257e9332-35a6-44bc-bd20-85f9f51a29e1'
			//tournamentId
		);
		//(allPlayerStats);
		teamRoster.forEach((player) => {
			const playerStats = allPlayerStats.find(
				(p: { player_id: any }) => p.player_id == player.player_id
			);
			player.stats = playerStats ? playerStats.stats : {};
		});
		playerStats = teamRoster;
		console.log(playerStats);
	});
</script>

<table
	out:fly={{ x: index == 0 ? -1000 : 1000, duration: 1500, easing: expoOut }}
	class="table table-auto text-base opacity-90 {color} w-full"
>
	<thead in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
		<tr in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
			<th>Peluri</th>
			{#if playerStats && playerStats[0].stats.Kills}
				<th>K/D</th>
				<th>Voittoprosentti</th>
			{/if}
		</tr>
	</thead>
	<tbody in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
		{#if playerStats}
			{#each playerStats as player}
				<tr in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
					<td>
						<div class="flex items-center space-x-3 mx-5">
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
					{#if player.stats.Kills}
						<td>
							{Math.round((player.stats.Kills / player.stats.Deaths + Number.EPSILON) * 100) / 100}
							<br />
							{#if parseFloat(player.stats['Penta Kills']) == 1}
								<span class="badge {color} badge-ghost badge-sm"
									>{player.stats['Penta Kills']} ässä</span
								>
							{:else}
								<span class="badge {color} badge-ghost badge-sm"
									>{player.stats['Penta Kills']} ässää</span
								>
							{/if}
						</td>
						<td>{player.stats['Win Rate %']}%</td>
					{:else}
						<td>-</td>
						<td>-</td>
					{/if}
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
