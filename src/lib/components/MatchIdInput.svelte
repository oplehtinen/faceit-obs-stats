<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let pageType: 'mapstats' | 'playerstats' | 'mappicks' = 'mapstats';

	let inputValue = '';
	let countdownMinutes = '';

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
			// Build redirect URL with match ID
			let redirectUrl = `${base}/view/${pageType}?id=${encodeURIComponent(matchId)}`;

			// Add countdown parameter if it's playerstats and countdown is specified
			if (
				pageType === 'playerstats' &&
				countdownMinutes &&
				String(countdownMinutes).trim() &&
				!isNaN(parseInt(String(countdownMinutes)))
			) {
				redirectUrl += `&countdown=${encodeURIComponent(String(countdownMinutes))}`;
			}

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

		{#if pageType === 'playerstats'}
			<label class="label mt-4" for="countdown-input">
				<span class="label-text">Starting Soon Countdown (minutes)</span>
			</label>
			<div class="input-group">
				<input
					id="countdown-input"
					type="number"
					placeholder="Enter countdown time in minutes (optional)"
					class="input input-bordered w-full"
					bind:value={countdownMinutes}
					on:keypress={handleKeyPress}
					min="0"
					max="60"
				/>
			</div>
		{/if}
	</div>
</div>
