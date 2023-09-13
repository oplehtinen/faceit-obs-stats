<script lang="ts">
	import '../app.css';
	import { onDestroy } from 'svelte';
	import { status } from '$lib/stores';
	let statusText = '';
	const unsubscribe = status.subscribe((value) => (statusText = value));
	onDestroy(unsubscribe);
</script>

<div
	class="flex items-center justify-center h-screen animate-text bg-gradient-to-b from-secondary from-10% via-accent via-30% to-base-content to-90%"
>
	<div class="container flex flex-col h-screen w-screen justify-around">
		<slot />
	</div>
</div>
