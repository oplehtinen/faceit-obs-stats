<script lang="ts">
	import ScoreBoard from './ScoreBoard.svelte';
	import MapStats from './MapStats.svelte';
	import PlayerGeneralStats from './PlayerGeneralStats.svelte';
	import MapPicks from './MapPicks.svelte';
</script>

<svelte:head>
	<title>Pappaliiga OBS</title>
</svelte:head>

<div class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
	<div class="hero-content text-center">
		<div class="max-w-4xl">
			<h1 class="text-5xl font-bold text-white mb-8">Pappaliiga OBS</h1>
			<p class="text-xl text-white/80 mb-12">
				Professional FACEIT match statistics overlay system for esports broadcasting and streaming.
				View detailed match statistics, player performance data, and team comparisons.
			</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title text-primary">
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
						<p class="text-base-content/70">
							View comprehensive map-by-map statistics including round wins, team performance, and
							detailed breakdowns for each played map.
						</p>
						<div class="card-actions justify-end">
							<a href="/mapstats" class="btn btn-primary">View Map Stats</a>
						</div>
					</div>
				</div>

				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<h2 class="card-title text-secondary">
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
						<p class="text-base-content/70">
							Detailed player performance analytics including K/D ratios, ADR, headshot percentages,
							and individual player contributions.
						</p>
						<div class="card-actions justify-end">
							<a href="/playerstats" class="btn btn-secondary">View Player Stats</a>
						</div>
					</div>
				</div>
			</div>

			<div class="card bg-base-100/10 backdrop-blur-sm border border-white/20">
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
								• CS:GO URL:
								<code class="bg-black/30 px-2 py-1 rounded"
									>https://www.faceit.com/en/csgo/room/1-abc123.../scoreboard</code
								><br />
								• CS2 URL:
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

			<div class="mt-8">
				<div class="flex flex-wrap gap-4 justify-center">
					<div class="badge badge-primary badge-lg">FACEIT Integration</div>
					<div class="badge badge-secondary badge-lg">Real-time Data</div>
					<div class="badge badge-accent badge-lg">OBS Compatible</div>
					<div class="badge badge-neutral badge-lg">CS:GO & CS2 Support</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <MapStats /> -->
<!-- <MapPicks /> -->
<!-- <PlayerGeneralStats  /> -->
