<script lang="ts">
	import PlayerTable from './PlayerTable.svelte';
	export let team1Roster: Array<object>;
	export let team2Roster: Array<object>;
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	<div class="grid w-full">
		<PlayerTable teamRoster={team1Roster} />
	</div>
	<div class="divider divider-horizontal">VS</div>
	<div class="grid w-full">
		<PlayerTable teamRoster={team2Roster} color="text-secondary-content" />
	</div>
</div>
