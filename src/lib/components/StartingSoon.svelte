<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';

	export let countdownMinutes: number = 0;

	const dispatch = createEventDispatcher();

	let timeLeft = 0;
	let interval: NodeJS.Timeout | null = null;
	let isActive = false;
	let hasStarted = false;
	let hasCompleted = false;

	$: if (countdownMinutes > 0 && !hasStarted) {
		startCountdown();
	} else if (countdownMinutes === 0) {
		stopCountdown();
	}

	function startCountdown() {
		timeLeft = countdownMinutes * 60; // Convert minutes to seconds
		isActive = true;
		hasStarted = true;
		hasCompleted = false;

		if (interval) {
			clearInterval(interval);
		}

		interval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				finishCountdown();
			}
		}, 1000);
	}

	function finishCountdown() {
		isActive = false;
		hasCompleted = true;
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
		dispatch('complete');
	}

	function stopCountdown() {
		isActive = false;
		hasStarted = false;
		hasCompleted = false;
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	function formatTime(seconds: number): string {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	}

	onDestroy(() => {
		stopCountdown();
	});
</script>

{#if isActive && timeLeft > 0}
	<div class="card bg-base-100 bg-opacity-80 shadow-xl p-6 text-center">
		<div class="card-body">
			<h1 class="text-4xl font-bold text-primary mb-2">KOHTA MENNÄÄN</h1>
			<div class="text-6xl font-mono text-base-content">
				{formatTime(timeLeft)}
			</div>
			<p class="text-lg text-base-content mt-2">Lähetys alkaa pian</p>
		</div>
	</div>
{/if}
