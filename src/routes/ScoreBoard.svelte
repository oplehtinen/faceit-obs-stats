<script lang="ts">
	export let teams: Array<any>;
	export let organizerData: any;
	export let startTime: any;
	export let status: string;
	import { onMount } from 'svelte';
	onMount(() => {
		status == 'SCHEDULED' ? (status = '') : status;
		status == 'VOTING' ? (status = 'KARTTAVALINTA') : status;
		status == 'READY' ? (status = 'ONKS PELII?') : status;
		status == 'LIVE' ? (status = 'VÄLIAIKA?') : status;
		status == 'FINISHED' ? (status = 'LÄHETYS PÄÄTTYY') : status;
	});
</script>

<div class="stats shadow w-auto flex bg-opacity-90 justify-between flex-row mt-4">
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teams[0].avatar} />
		</div>
	</div>
	<div class="stat place-items-center">
		<div class="text-3xl">{teams[0].name}</div>
		<div class="stat-value">{teams[0].score}</div>
	</div>
	<div class="stat w-64 place-items-center text-primary">
		<!-- 		{#if (status = 'BLBLsdhsdhB')}
			<span class="countdown font-mono text-2xl">
				<span style="--value:{startTime.minutes};" />:
				<span style="--value:{startTime.seconds};" />
			</span>
		{/if} -->
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={organizerData.avatar} />
		</div>
	</div>

	<div class="stat place-items-center">
		<div class="text-3xl text-secondary-content">{teams[1].name}</div>
		<div class="stat-value text-secondary-content">{teams[1].score}</div>
	</div>
	<div class="avatar w-64 stat place-items-center">
		<div class="w-24 h-24 rounded mix-blend-screen">
			<img src={teams[1].avatar} />
		</div>
	</div>
</div>
