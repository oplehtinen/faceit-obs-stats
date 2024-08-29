<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import type { mapData, mapStat, mapStatsForTeams, team } from '$lib/dataTypes';
	export let data: mapData;
	export let nextMap: boolean;
	export let teams: team[];
	export let order: number;
	export let playedMap = false;
	import { onMount } from 'svelte';
	const getBetterStats = (winPercent1: string, winPercent2: string) => {
		const winPercent1Num = parseFloat(winPercent1);
		const winPercent2Num = parseFloat(winPercent2);
		if (winPercent1Num > winPercent2Num) {
			return 'before:!bg-warning-content';
		} else if (winPercent1Num < winPercent2Num) {
			return 'before:!bg-info-content';
		} else {
			return 'before:!bg-bg-base-200';
		}
	};
</script>

<div
	class="card shadow-xl before:!bg-opacity-90 grid shrink image-full flex-1 {getBetterStats(
		data.stats[0]['Win Rate %'],
		data.stats[1]['Win Rate %']
	)} {nextMap ? 'border-dotted border-2 border-slate-100/[.25]' : ''}"
	in:fly={{ y: -150, duration: order, easing: expoIn }}
	out:fly={{ y: 150, duration: 500, easing: expoOut }}
>
	<figure><img src={data.img_regular} class="w-full" alt="map" /></figure>
	<div class="card-body justify-end">
		<h1 class="text-4xl text-primary capitalize">
			{data.label}
			{#if nextMap}
				<div class="badge badge-lg">Seuraava kartta</div>
			{/if}
		</h1>
		<div class="stats bg-base-200 bg-opacity-80">
			{#each data.stats as stat, i}
				<div class="stat {teams[i].color}">
					<div class="stat-figure">
						<div class="w-16 rounded-full">
							<img src={teams[i].avatar} alt="logo" />
						</div>
					</div>
					{#if playedMap}
						<!-- 	<div
							class="stat-value mt-3 {data.stats.team_stats['Team Win'] == 0
								? 'text-3xl'
								: 'text-3xl'}"
						>
							{data.stats.team_stats['Final Score']}
							{#if data.stats.team_stats['Team Win'] == 1}
								👑
							{/if}
						</div> -->
					{:else}
						<div class="stat-value text-5xl {i > 0 ? 'text-info' : ''}">
							{stat && stat.Matches > 0 ? stat['Win Rate %'] + '%' : '-'}
						</div>
						<!-- 	<div class="stat-title text-sm {i > 0 ? 'text-info' : ''}">Voittoprosentti</div> -->
						<div class="stat-desc text-lg {i > 0 ? 'text-info' : ''}">
							{(stat && stat.Wins) ?? '-'}/{(stat && stat.Matches) ?? '-'} kartasta
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
