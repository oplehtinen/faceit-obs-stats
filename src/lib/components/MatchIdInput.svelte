<script lang="ts">
	import { goto } from '$app/navigation';

	export let pageType: 'mapstats' | 'playerstats' = 'mapstats';

	let inputValue = '';

	// Function to extract match ID from FACEIT URL or return as-is if it's already an ID
	function extractMatchId(input: string): string {
		// If input contains faceit.com URL, extract the match ID from it
		// Updated pattern to handle both csgo and cs2, and various trailing paths
		const faceitUrlPattern = /faceit\.com\/en\/(?:csgo|cs2)\/room\/([^/?]+)/;
		const match = input.match(faceitUrlPattern);

		if (match && match[1]) {
			return match[1];
		}

		// Otherwise, assume it's already a match ID
		return input.trim();
	}

	function handleSubmit() {
		if (inputValue.trim()) {
			const matchId = extractMatchId(inputValue);
			// Redirect to the appropriate view page with the match ID as query parameter
			const redirectUrl = `/${pageType}/view?id=${encodeURIComponent(matchId)}`;
			goto(redirectUrl);
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	}
</script>

<div class="card bg-base-100 shadow-md p-4 mb-4">
	<div class="form-control">
		<label class="label" for="match-id-input">
			<span class="label-text">Match ID or FACEIT URL</span>
		</label>
		<div class="input-group">
			<input
				id="match-id-input"
				type="text"
				placeholder="Enter match ID or https://www.faceit.com/en/cs2/room/1-abc123..."
				class="input input-bordered w-full"
				bind:value={inputValue}
				on:keypress={handleKeyPress}
			/>
			<button class="btn btn-primary" on:click={handleSubmit}> Load Match </button>
		</div>
	</div>
</div>
