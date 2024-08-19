<script lang="ts">
	// get the stored view from the server store
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	onMount(async () => {
		await tick();
		console.log($page);
	});
</script>

<div class="m-auto flex justify-center items-center lg:container">
	<div class="join">
		<input class="join-item btn" type="radio" name="options" aria-label="Radio 1" />
		<input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
		<input class="join-item btn" type="radio" name="options" aria-label="Radio 3" />
	</div>
</div>
