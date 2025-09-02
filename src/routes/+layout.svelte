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

{#if isHome}
	<!-- Top-left GitHub button (home page only) -->
	<a
		href="https://github.com/oplehtinen/faceit-obs-stats"
		target="_blank"
		rel="noopener noreferrer"
		class="fixed top-3 left-3 z-50 btn btn-ghost btn-sm gap-2"
		aria-label="View project on GitHub"
		title="View on GitHub"
	>
		<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" class="inline-block">
			<path
				fill="currentColor"
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8Z"
			/>
		</svg>
		<span class="hidden sm:inline">GitHub</span>
	</a>
{/if}

<div
	class={`flex py-2 items-center justify-center ${isHome ? 'min-h-screen' : 'h-screen'} bg-gradient-to-br from-secondary/45 via-accent/50 to-base-content/45 bg-[length:300%_300%] animate-bg-pan-breathe`}
>
	<div
		class={`container-fluid mx-auto my-4 px-8 gap-4 flex flex-col w-full justify-evenly ${isHome ? '' : 'h-full'}`}
	>
		<slot />
	</div>
</div>
