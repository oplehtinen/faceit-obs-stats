<script>
	import PlayerGeneralStats from '../PlayerGeneralStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
</script>

<svelte:head>
	<title>PlayerStats</title>
</svelte:head>

<div class="container mx-auto p-4">
	<MatchIdInput />
	<PlayerGeneralStats />
</div>
