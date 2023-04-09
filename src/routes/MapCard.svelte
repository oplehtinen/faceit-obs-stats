<script lang="ts">
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	export let map: any;
	export let teamData: any;
	console.log(teamData);
</script>

<div
	class="card aspect-21/9 shadow-xl grid flex-grow image-full"
	in:fly={{ y: -150, duration: 1100, easing: circOut }}
>
	<figure><img src={teamData.mapImage} class="w-full" alt="map" /></figure>
	<div class="card-body justify-end">
		<h1 class="text-3xl text-primary">{teamData.mapName}</h1>
		<div class="stats bg-base-200 opacity-90">
			{#each teamData as team, i}
				<div class="stat {team.color}">
					<div class="stat-figure">
						<div class="w-16 rounded-full">
							<img src={team.avatar} alt="logo" />
						</div>
					</div>
					<div class="stat-value {team.color}">{team['Win Rate %']}%</div>
					<div class="stat-title {team.color}">Voittoprosentti</div>
					<div class="stat-desc {team.color}">{team.Wins}/{team.Matches} kartasta</div>
				</div>
			{/each}
		</div>
	</div>
</div>
