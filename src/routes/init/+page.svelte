<script lang="ts">
	//import { updateMatchId } from '$lib/dispatch';
	import { enhance } from '$app/forms';
	import { onDestroy } from 'svelte';
	import { matchId } from '$lib/stores';
	import { onMount } from 'svelte';
	import { page, navigating } from '$app/stores';
	export let data;
	export let form;
	//let matchId = data?.matchId;
	data;
	onMount(async () => {
		'matchId:' + $matchId;
		if (form?.success && data) {
			('form success');
			const newMatchId: string = url?.toString().split('/').pop()?.toString() || '';
			updateMatchId(newMatchId);
		}
	});

	const updateMatchId = async (newMatchId: string) => {
		'matchId:' + matchId;
		const response = await fetch('/api/match', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newMatchId: $matchId })
		});
		const data = await response.json();
		data;
	};

	//onDestroy(unsubscribe);
	$: async () => {};
</script>

<div class="flex items-center justify-center h-screen bg-secondary">
	<div class="card w-96 bg-base-100 shadow-xl p-10">
		<a href="/" aria-current={$page.url.pathname === '/'}> home </a>
		<div class="alert">
			Aktiivinen peli: <a
				class="text-primary"
				href="https://www.faceit.com/en/csgo/room/{$matchId}"
				target="_blank">{$matchId}</a
			>
		</div>
		<form method="POST" use:enhance class="pt-4">
			<input
				name="matchUrl"
				type="text"
				bind:value={$matchId}
				on:input={(e) => {
					$matchId = $matchId.replace('https://www.faceit.com/en/csgo/room/', '');
					'matchId:' + $matchId;
					updateMatchId($matchId);
				}}
				placeholder="faceit.com/en/csgo/room/1-id"
				class="input input-bordered input-lg w-full max-w-xs"
			/>
			<button class="btn btn-lg btn-block mt-4">Hiihtää hiihtää</button>
		</form>
	</div>
</div>
