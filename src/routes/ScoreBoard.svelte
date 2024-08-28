<script lang="ts">
	import type { matchDetails, team, teams } from '$lib/dataTypes';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const match = $page.data.matchDetailsData as matchDetails;
	const teams = $page.data.teamsData as teams;
	const organizerData = $page.data.organizerData;
	onMount(() => {
		console.log($page.data);
	});
</script>

<div class="stats shadow w-auto flex bg-opacity-80 justify-between flex-row mt-4">
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teams.faction1.avatar} />
		</div>
	</div>
	<div class="stat place-items-center">
		<div class="text-3xl">{teams.faction1.name}</div>
		<div class="stat-value">{match.results?.score.faction1 || 0}</div>
	</div>
	<div class="stat w-64 place-items-center text-primary">
		<!-- 	<span class="countdown font-mono text-2xl">
				<span style="--value:{startTime.minutes};" />:
				<span style="--value:{startTime.seconds};" />
			</span> -->
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={organizerData.avatar} />
		</div>
	</div>

	<div class="stat place-items-center">
		<div class="text-3xl text-info">{teams.faction2.name}</div>
		<div class="stat-value text-info">{match.results?.score.faction2 || 0}</div>
	</div>
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teams.faction2.avatar} />
		</div>
	</div>
</div>
