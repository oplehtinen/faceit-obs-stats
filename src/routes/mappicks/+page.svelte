<script>
	import MapPicks from '$lib/components/MapPicks.svelte';
	import MatchIdInput from '$lib/components/MatchIdInput.svelte';
	import PlayerGeneralStats from '$lib/components/PlayerGeneralStats.svelte';
</script>

<svelte:head>
	<title>MapPicks</title>
</svelte:head>
<div class="container mx-auto p-4">
	<MatchIdInput pageType="mappicks" />
</div>
