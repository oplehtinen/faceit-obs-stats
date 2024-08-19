<script lang="ts">
	import ScoreBoard from './ScoreBoard.svelte';
	import {
		organizerStore,
		matchDetailsStore,
		matchIdStore,
		teamsStore,
		tournamentMapsStore,
		playerStatsStore
	} from '$lib/stores';
	import MapStats from './MapStats.svelte';
	import PlayerStats from './PlayerStats.svelte';
	import PlayerGeneralStats from './PlayerGeneralStats.svelte';
	import MapPicks from './MapPicks.svelte';
</script>

<ScoreBoard />

<!-- <MapStats /> -->

<!-- <MapPicks /> -->
<!-- <PlayerGeneralStats /> -->
