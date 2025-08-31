<script>
	import MapStats from '../MapStats.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
</script>

<svelte:head>
	<title>MapStats</title>
</svelte:head>

<div class="container mx-auto p-4">
	<MatchIdInput />
	<MapStats />
</div>
