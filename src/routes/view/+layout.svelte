<script lang="ts">
	import ScoreBoard from '$lib/components/ScoreBoard.svelte';
	import { matchDetailsDataStore } from '../../stores';

	// Subscribe to match data to determine if we should show the scoreboard
	$: hasMatchData = $matchDetailsDataStore !== null;
</script>

<div class="flex flex-col gap-4 h-full">
	{#if hasMatchData}
		<div class="flex-shrink-0">
			<ScoreBoard />
		</div>
	{/if}

	<div class="flex-grow">
		<slot />
	</div>
</div>
