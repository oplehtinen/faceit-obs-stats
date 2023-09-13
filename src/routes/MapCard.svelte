<script lang="ts">
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	export let map: any;
	export let teamData: any;
	export let nextMap: boolean;
	export let teams: any;
	console.log(teams);
</script>

<div
	class="card aspect-21/9 shadow-xl grid flex-grow image-full {nextMap
		? 'border-dotted border-2 border-slate-100/[.25]'
		: ''}"
	in:fly={{ y: -150, duration: 200, easing: circOut }}
>
	<figure><img src={teamData.mapImage} class="w-full" alt="map" /></figure>
	<div class="card-body justify-end">
		<h1 class="text-3xl text-primary">
			{teamData.mapName}
			{#if nextMap}
				<div class="badge badge-lg">Seuraava kartta</div>
			{/if}
		</h1>
		<div class="stats bg-base-200 opacity-80">
			{#each teamData as team, i}
				<div class="stat {team.color}">
					<div class="stat-figure">
						<div class="w-16 rounded-full">
							<img src={teams[i].avatar} alt="logo" />
						</div>
					</div>
					{#if team.stats}
						<div class="stat-value mt-3 {team.stats['Team Win'] == 0 ? 'text-3xl' : 'text-3xl'}">
							{team.stats['Final Score']}
							{#if team.stats['Team Win'] == 1}
								👑
							{/if}
						</div>
					{:else}
						<div class="stat-value {team.color}">{team['Win Rate %'] ?? '-'}%</div>
						<div class="stat-title {team.color}">Voittoprosentti</div>
						<div class="stat-desc {team.color}">
							{team.Wins ?? '-'}/{team.Matches ?? '-'} kartasta
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
