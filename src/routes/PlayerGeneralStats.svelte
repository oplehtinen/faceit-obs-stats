<script lang="ts">
	import { expoIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PlayerTable from './PlayerTable.svelte';
	import type { teams } from '$lib/dataTypes';
	import { page } from '$app/stores';
	console.log($page.data);
	const teams = $page.data.teamsData as teams;
	const tournamentId = $page.data.matchDetailsData.competition_id;
</script>

{#if teams && tournamentId}
	<div class="flex justify-center flex-row flex-grow my-4 w-auto">
		<div class="grid w-full">
			<PlayerTable teamData={teams.faction1.roster} index={0} color="primary-content" />
		</div>
		<div out:fly={{ y: 2000, duration: 500, easing: expoIn }} class="divider divider-horizontal">
			VS
		</div>
		<div class="grid w-full">
			<PlayerTable teamData={teams.faction2.roster} index={1} color="text-info" />
		</div>
	</div>
{/if}
