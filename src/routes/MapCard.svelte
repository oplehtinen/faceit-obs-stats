<script lang="ts">
	import WinIcon from './WinIcon.svelte';

	import { fade, fly } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import type { mapData, mapStat, mapStatsForTeams, team } from '$lib/dataTypes';
	export let data: mapData;
	export let nextMap: boolean;
	export let teams: team[];
	export let order: number;
	export let playedMap = false;
	export let picks = false;
	import { onMount } from 'svelte';
	const getBetterStats = (winPercent1: number, winPercent2: number) => {
		if (winPercent1 > winPercent2) {
			return 'before:!bg-warning-content';
		} else if (winPercent1 < winPercent2) {
			return 'before:!bg-info-content';
		} else {
			return 'before:!bg-bg-base-200';
		}
	};
</script>

{#if data.map_stats}
	<div
		class="card shadow-xl before:!bg-opacity-90 grid h-16 shrink image-full flex-1 {getBetterStats(
			data.map_stats[0]['Win Rate %'],
			data.map_stats[1]['Win Rate %']
		)} {nextMap ? 'border-dotted border-2 border-slate-100/[.25]' : ''}"
		in:fly={{ y: -150, duration: order, easing: expoIn }}
		out:fly={{ y: 150, duration: 500, easing: expoOut }}
	>
		<figure><img src={data.img_regular} class="w-full" alt="map" /></figure>
		<div class="card-body justify-end">
			<h1 class="text-4xl text-primary capitalize {picks}">
				{data.label}
				{#if nextMap && !playedMap}
					<div class="badge badge-lg">Seuraava kartta</div>
				{/if}
			</h1>
			<div class="stats bg-base-200 bg-opacity-80">
				{#each data.map_stats as stat, i}
					<div
						class=" {data.round_stats && data.round_stats[i].team_stats['Team Win'] == '1'
							? 'bg-success-content bg-opacity-60'
							: ''}
						stat flex flex-row justify-between items-center {i == 1 ? '!flex-row-reverse' : 'flex-row'}"
					>
						<div class="stat-figure">
							<div class="w-16 rounded-full">
								<img src={teams[i].avatar} alt="logo" />
							</div>
						</div>
						{#if playedMap && data.round_stats}
							<div class="stat-value text-6xl {i > 0 ? 'text-info' : ''} ">
								{data.round_stats[i].team_stats['Final Score']}
								{#if data.round_stats[i].team_stats['Team Win'] == '1'}
									<WinIcon></WinIcon>
								{/if}
							</div>
						{:else}
							<div class="flex flex-col">
								<div class="stat-value text-5xl {i > 0 ? 'text-info' : ''}">
									{stat && stat.Matches > 0 ? stat['Win Rate %'] + '%' : '-'}
								</div>
								<!-- 	<div class="stat-title text-sm {i > 0 ? 'text-info' : ''}">Voittoprosentti</div> -->
								<div class="stat-desc text-lg {i > 0 ? 'text-info' : ''}">
									{(stat && stat.Wins) ?? '-'}/{(stat && stat.Matches) ?? '-'} kartasta
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
