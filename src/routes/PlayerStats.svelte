<script lang="ts">
	import PlayerTable from './PlayerTable.svelte';
	export let teams: Array<any>;
</script>

<div class="flex justify-center flex-row flex-grow my-4 w-auto">
	<div class="grid w-full">
		<PlayerTable teamRoster={teams[0].roster} />
	</div>
	<div class="divider divider-horizontal">VS</div>
	<div class="grid w-full">
		<PlayerTable teamRoster={teams[1].roster} color="text-secondary-content" />
	</div>
</div>
