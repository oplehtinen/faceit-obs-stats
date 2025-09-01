<script lang="ts">
	import { goto } from '$app/navigation';
	import { MOCK_MATCH_IDS } from '$lib/mockMatchData';

	// Mock scenarios with descriptions
	const mockScenarios = [
		{
			id: MOCK_MATCH_IDS.LIVE_UPDATING,
			name: 'Live Updating Match',
			description:
				'Real-time match simulation. Every fetch returns new values—watch stats and scores change!',
			status: 'LIVE',
			badge: 'badge-error'
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
	<div class="hero rounded-lg mb-8">
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
			<div
				class="card bg-base-100 shadow-xl {scenario.status === 'LIVE'
					? 'border-2 border-red-400 shadow-red-400/20'
					: ''}"
			>
				<div class="card-body">
					<div class="flex items-center justify-between mb-4">
						<h2 class="card-title text-lg flex items-center">
							{scenario.name}
							{#if scenario.status === 'LIVE'}
								<span class="animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full ml-2"
								></span>
							{/if}
						</h2>
						<div class="badge {scenario.badge}">{scenario.status}</div>
					</div>

					<p class="text-base-content/70 mb-4">
						{scenario.description}
					</p>

					<div class="card-actions justify-end gap-2">
						<button class="btn btn-outline btn-sm" on:click={() => viewMapStats(scenario.id)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
							Map Stats
						</button>
						<button class="btn btn-primary btn-sm" on:click={() => viewPlayerStats(scenario.id)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				About Demo Mode
			</h2>
			<div class="space-y-4">
				<p>This demo uses a single live-updating mock: every request returns fresh values.</p>
				<ul class="list-disc list-inside space-y-2 ml-4">
					<li>Randomized map, team, and player stats vary on every fetch.</li>
					<li>Great for debugging component updates and polling behavior.</li>
				</ul>
				<div class="alert alert-info">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Mock data follows the FACEIT API structure and updates live via polling.</span>
				</div>
			</div>
		</div>
	</div>
</div>
