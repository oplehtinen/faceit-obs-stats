<script lang="ts">
	import type { matchDetails, team, teams } from '$lib/dataTypes';
	import { onMount } from 'svelte';
	import { matchDetailsDataStore, teamsDataStore, organizerData } from '../../stores';

	// Use reactive statements to get data from stores
	$: match = $matchDetailsDataStore as matchDetails | null;
	$: teamData = $teamsDataStore as teams | null;
	$: organizerDataValue = $organizerData;

	onMount(() => {
		console.log('ScoreBoard mounted with data:', { match, teamData, organizerDataValue });
	});
</script>

<div class="stats shadow w-auto flex bg-opacity-80 justify-between flex-row mt-4">
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teamData?.faction1.avatar} alt="Team 1 logo" />
		</div>
	</div>
	<div class="stat place-items-center">
		<div class="text-3xl">{teamData?.faction1.name}</div>
		<div class="text-6xl font-bold leading-none">{match?.results?.score?.faction1 || 0}</div>
	</div>
	<div class="stat w-64 place-items-center text-primary">
		<!-- 	<span class="countdown font-mono text-2xl">
				<span style="--value:{startTime.minutes};" />:
				<span style="--value:{startTime.seconds};" />
			</span> -->
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={organizerDataValue?.avatar} alt="Organizer logo" />
		</div>
	</div>

	<div class="stat place-items-center">
		<div class="text-3xl text-info">{teamData?.faction2.name}</div>
		<div class="text-6xl font-bold text-info leading-none">
			{match?.results?.score?.faction2 || 0}
		</div>
	</div>
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teamData?.faction2.avatar} alt="Team 2 logo" />
		</div>
	</div>
</div>
