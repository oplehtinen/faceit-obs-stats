<script lang="ts">
	import '../app.css';
	import { onDestroy } from 'svelte';
	import { status } from '$lib/stores';
	let statusText = '';
	const unsubscribe = status.subscribe((value) => (statusText = value));
	onDestroy(unsubscribe);
</script>

<div
	class="flex py-2 items-center justify-center h-screen animate-text bg-gradient-to-b from-secondary from-10% via-accent via-30% to-base-content to-90%"
>
	<div class="container-fluid mx-auto my-4 px-8 gap-4 flex flex-col h-full w-full justify-evenly">
		<slot />
	</div>
</div>
