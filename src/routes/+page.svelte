<script lang="ts">
	import ScoreBoard from '$lib/components/ScoreBoard.svelte';
	import MapStats from '$lib/components/MapStats.svelte';
	import PlayerGeneralStats from '$lib/components/PlayerGeneralStats.svelte';
	import MapPicks from '$lib/components/MapPicks.svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	const origin = browser ? window.location.origin : '';
	const mapStatsUrl = `${origin}${base}/mapstats`;
	const playerStatsUrl = `${origin}${base}/playerstats`;
</script>

<svelte:head>
	<title>FACEIT OBS stats</title>
</svelte:head>

<div class="hero min-h-screen from-primary to-secondary">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<h1 class="text-5xl font-bold text-white mb-8">FACEIT OBS stats</h1>
			<p class="text-xl text-white/80 mb-12">
				FACEIT match statistics overlay system for esports broadcasting and streaming. View detailed
				match statistics, player performance data, and team comparisons.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title text-base-content">
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
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
							Map Statistics
						</h2>
						<p class="text-primary">
							View map-by-map statistics including round wins, team performance, and detailed
							breakdowns for each played map.
						</p>
						<div class="card-actions justify-end">
							<a href="/mapstats" class="btn btn-primary">View Map Stats</a>
						</div>
					</div>
				</div>

				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title text-base-content">
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
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							Player Statistics
						</h2>
						<p class="text-primary">
							Player performance analytics including K/D ratios, ADR, headshot percentages, and
							individual player contributions.
						</p>
						<div class="card-actions justify-end">
							<a href="/playerstats" class="btn btn-secondary">View Player Stats</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Demo Mode Card -->
			<div class="card bg-gradient-to-r from-accent to-accent shadow-xl mb-12">
				<div class="card-body">
					<h2 class="card-title text-white">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
						</svg>
						Demo Mode
					</h2>
					<p class="text-white/90">
						Try the application with realistic mock data! Preview different match scenarios including scheduled, ongoing, and finished matches.
					</p>
					<div class="card-actions justify-end">
						<a href="/demo" class="btn btn-white">View Demo</a>
					</div>
				</div>
			</div>

			<div class="card bg-base-100 backdrop-blur-sm border border-white/20">
				<div class="card-body">
					<h2 class="card-title text-white text-2xl mb-4">
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
						How to Use
					</h2>
					<div class="text-left space-y-4">
						<div class="step">
							<h3 class="font-semibold text-white text-lg">1. Get Match Data</h3>
							<p class="text-white/80">
								Navigate to either Map Statistics or Player Statistics and enter a FACEIT match ID
								or complete FACEIT match URL.
							</p>
						</div>
						<div class="step">
							<h3 class="font-semibold text-white text-lg">2. Supported URL Formats</h3>
							<p class="text-white/80">
								• Direct match ID: <code class="bg-black/30 px-2 py-1 rounded"
									>1-58d8dbd0-dc69-4077-9970-7893f3fc07dc</code
								><br />
								• FACEIT URL:
								<code class="bg-black/30 px-2 py-1 rounded"
									>https://www.faceit.com/en/cs2/room/1-abc123.../scoreboard</code
								>
							</p>
						</div>
						<div class="step">
							<h3 class="font-semibold text-white text-lg">3. View Statistics</h3>
							<p class="text-white/80">
								After entering the match data, you'll be redirected to a clean statistics view with
								comprehensive match analytics.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- OBS Integration -->
			<div class="card bg-base-100 backdrop-blur-sm border border-white/20 mt-8">
				<div class="card-body">
					<h2 class="card-title text-white text-2xl mb-4">
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
								d="M4 5h16M4 13h16M4 21h16"
							/>
						</svg>
						OBS Integration
					</h2>
					<div class="text-left space-y-3">
						<p class="text-white/80">
							Use this app directly in OBS as a Browser Source and input your match ID via Interact.
						</p>
						<ol class="list-decimal list-inside space-y-2 text-white/90">
							<li>
								In OBS: Sources → + → Browser Source. Set the URL to the page you need:
								<code class="bg-black/30 px-2 py-1 rounded">/mapstats</code> or
								<code class="bg-black/30 px-2 py-1 rounded">/playerstats</code>
								(Use your full site URL in production, e.g.,
								<code class="bg-black/30 px-2 py-1 rounded">{mapStatsUrl}</code>).
							</li>
							<li>Set size to match your canvas (e.g., 1920×1080). Click OK to add the source.</li>
							<li>
								Right‑click the Browser Source → Interact…, then paste your FACEIT match ID or full
								match URL and submit.
							</li>
						</ol>
						<p class="text-white/60 text-sm">
							Tip: Use “Refresh cache of current page” to reload, or enable “Shutdown source when
							not visible” to reset between scenes.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <MapStats /> -->
<!-- <MapPicks /> -->
<!-- <PlayerGeneralStats  /> -->
