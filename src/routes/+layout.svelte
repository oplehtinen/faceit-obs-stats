<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import '$lib/poller';
	import { page } from '$app/stores';
	export let data;
	onMount(async () => {
		await tick();
		console.log(data);
	});
	$: isHome = $page.url.pathname === '/';
</script>

<div
	class={`flex py-2 items-center justify-center ${isHome ? 'min-h-screen' : 'h-screen'} bg-gradient-to-br from-secondary/45 via-accent/50 to-base-content/45 bg-[length:300%_300%] animate-bg-pan-breathe`}
>
	<div
		class={`container-fluid mx-auto my-4 px-8 gap-4 flex flex-col w-full justify-evenly ${isHome ? '' : 'h-full'}`}
	>
		<slot />
	</div>
</div>
