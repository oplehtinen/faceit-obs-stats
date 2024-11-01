<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import { expoOut, expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let teamData: any;
	export let index: number;
	export let color: string = 'text-primary-content';
	console.log(teamData);
	onMount(async () => {});
</script>

<table
	out:fly={{ x: index == 0 ? -1000 : 1000, duration: 1500, easing: expoOut }}
	class="table table-auto table-lg text-base bg-base-100 bg-opacity-80 {color} w-full"
>
	<thead
		class="text-base text-gray-400"
		in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}
	>
		<tr in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
			{#if index == 0}
				<th class="pl-16">Peluri</th>
				{#if teamData}
					<th class="text-left">K/D</th>
					<th class="text-left">HS %</th>
					<th class="text-left">Voittoprosentti</th>
				{/if}
			{:else}
				{#if teamData}
					<th class="text-center">Voittoprosentti</th>
					<th class="text-center">HS %</th>
					<th class="text-center">K/D</th>
				{/if}
				<th class="text-right pr-16">Peluri</th>
			{/if}
		</tr>
	</thead>
	<tbody in:fly={{ x: index == 0 ? -550 : 1050, duration: 700, easing: expoIn }}>
		{#if teamData}
			{#each teamData as player}
				{#if index == 0}
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
						{#if player.stats?.Kills}
							<td class="text-left">
								{Math.round((player.stats.Kills / player.stats.Deaths + Number.EPSILON) * 100) /
									100}

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
							<td class="text-left">{player.stats['Average Headshots %']} %</td>
							<td class="text-left">{player.stats['Win Rate %']} %</td>
						{:else}
							<td>-</td>
							<td>-</td>
						{/if}
					</tr>
				{:else}
					<tr in:fly={{ x: 1050, duration: 700, easing: expoIn }}>
						{#if player.stats?.Kills}
							<td class="text-right">{player.stats['Win Rate %']} %</td>
							<td class="text-right">{player.stats['Average Headshots %']} %</td>
							<td class="text-right">
								{Math.round((player.stats.Kills / player.stats.Deaths + Number.EPSILON) * 100) /
									100}

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
						{:else}
							<td class="text-right">-</td>
							<td class="text-right">-</td>
						{/if}
						<td>
							<div class="flex items-center justify-end justify-items-stretch space-x-3 mx-5">
								<div class="flex content-start flex-row-reverse mx-5">
									<div class="avatar justify-start">
										<div class="mask mask-squircle w-12 h-12">
											{#if player.avatar != ''}
												<img src={player.avatar} alt="Avatar Tailwind CSS Component" />
											{:else}
												<div class="bg-neutral-focus text-neutral-content rounded-full w-24" />
											{/if}
										</div>
									</div>
									<div class="mx-5 text-right content-start">
										<div class="font-bold">{player.nickname}</div>
										<div class="text-sm bg-opacity-50">Faceit level: {player.game_skill_level}</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
				{/if}
			{/each}
		{/if}
	</tbody>
</table>
