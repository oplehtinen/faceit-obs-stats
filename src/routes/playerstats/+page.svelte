<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	onMount(async () => {
		await tick();
	});
</script>
