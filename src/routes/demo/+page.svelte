<script lang="ts">
	import { goto } from '$app/navigation';
	import { MOCK_MATCH_IDS } from '$lib/mockMatchData';

	// Mock scenarios with descriptions
	const mockScenarios = [
		{
			id: MOCK_MATCH_IDS.SCHEDULED,
			name: 'Scheduled Match',
			description: 'Match is ready to start, no gameplay yet. Shows map picks and team information.',
			status: 'READY',
			badge: 'badge-info'
		},
		{
			id: MOCK_MATCH_IDS.ONGOING_MAP1,
			name: 'Ongoing Match - First Map',
			description: 'First map in progress with live score 8-4. Demonstrates ongoing match statistics.',
			status: 'ONGOING',
			badge: 'badge-warning'
		},
		{
			id: MOCK_MATCH_IDS.ONGOING_MAP2,
			name: 'Ongoing Match - Deciding Map',
			description: 'Series 1-1, third map live with 8-4 score. Shows complex match progression.',
			status: 'ONGOING',
			badge: 'badge-warning'
		},
		{
			id: MOCK_MATCH_IDS.FINISHED,
			name: 'Finished Match',
			description: 'Complete best-of-3 series with final results 2-1. Shows comprehensive statistics.',
			status: 'FINISHED',
			badge: 'badge-success'
		}
	];

	function viewMapStats(matchId: string) {
		goto(`/mapstats/view?id=${encodeURIComponent(matchId)}&mock=true`);
	}

	function viewPlayerStats(matchId: string) {
		goto(`/playerstats/view?id=${encodeURIComponent(matchId)}&mock=true`);
	}
</script>

<svelte:head>
	<title>Demo - FACEIT OBS Stats</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-6xl">
	<!-- Header -->
	<div class="hero bg-gradient-to-r from-primary to-secondary rounded-lg mb-8">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-4xl font-bold text-white">Demo Mode</h1>
				<p class="py-6 text-white/90">
					Preview the application with different match scenarios based on FACEIT API data
				</p>
			</div>
		</div>
	</div>

	<!-- Navigation -->
	<div class="breadcrumbs text-sm mb-6">
		<ul>
			<li><a href="/" class="link link-hover">Home</a></li>
			<li>Demo</li>
		</ul>
	</div>

	<!-- Mock Scenarios Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		{#each mockScenarios as scenario}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<div class="flex items-center justify-between mb-4">
						<h2 class="card-title text-lg">{scenario.name}</h2>
						<div class="badge {scenario.badge}">{scenario.status}</div>
					</div>
					
					<p class="text-base-content/70 mb-4">
						{scenario.description}
					</p>

					<div class="card-actions justify-end gap-2">
						<button 
							class="btn btn-outline btn-sm"
							on:click={() => viewMapStats(scenario.id)}
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
							Map Stats
						</button>
						<button 
							class="btn btn-primary btn-sm"
							on:click={() => viewPlayerStats(scenario.id)}
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Player Stats
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Information Card -->
	<div class="card bg-base-100 shadow-xl mt-8">
		<div class="card-body">
			<h2 class="card-title">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				About Demo Mode
			</h2>
			<div class="space-y-4">
				<p>
					This demo mode uses comprehensive mock data that simulates different FACEIT CS2 match states:
				</p>
				<ul class="list-disc list-inside space-y-2 ml-4">
					<li><strong>Scheduled:</strong> Match ready to start with team rosters and map picks</li>
					<li><strong>Ongoing:</strong> Live matches with realistic scores and player statistics</li>
					<li><strong>Finished:</strong> Complete match results with full statistical breakdowns</li>
				</ul>
				<div class="alert alert-info">
					<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>Mock data is based on the official FACEIT API structure and provides realistic match scenarios for testing and demonstration.</span>
				</div>
			</div>
		</div>
	</div>
</div>