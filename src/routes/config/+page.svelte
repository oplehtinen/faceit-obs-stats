<script lang="ts">
import { onMount } from 'svelte';
import { base } from '$app/paths';
import { maps as staticMapData } from '$lib/maps';

let activeMaps: string[] = [];
let availableMaps: string[] = [];
let loading = true;
let saving = false;
let message = '';
let messageType: 'success' | 'error' | '' = '';

onMount(async () => {
await loadConfig();
});

async function loadConfig() {
try {
loading = true;
const response = await fetch(`${base}/api/config/maps`);
const data = await response.json();
activeMaps = data.activeMaps || [];
availableMaps = data.availableMaps || [];
} catch (error) {
console.error('Failed to load config:', error);
message = 'Failed to load configuration';
messageType = 'error';
} finally {
loading = false;
}
}

async function saveConfig() {
try {
saving = true;
message = '';
messageType = '';

const response = await fetch(`${base}/api/config/maps`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ activeMaps })
});

const data = await response.json();

if (response.ok) {
message = 'Map pool configuration saved successfully!';
messageType = 'success';
} else {
message = data.error || 'Failed to save configuration';
messageType = 'error';
}
} catch (error) {
console.error('Failed to save config:', error);
message = 'Failed to save configuration';
messageType = 'error';
} finally {
saving = false;
}
}

function toggleMap(mapName: string) {
if (activeMaps.includes(mapName)) {
activeMaps = activeMaps.filter((m) => m !== mapName);
} else {
activeMaps = [...activeMaps, mapName];
}
}

function isActive(mapName: string): boolean {
return activeMaps.includes(mapName);
}

function getMapImage(mapName: string): string {
const mapKey = mapName as keyof typeof staticMapData;
return staticMapData[mapKey]?.image_lg || '';
}
</script>

<svelte:head>
<title>Map Pool Configuration - FACEIT OBS stats</title>
</svelte:head>

<div class="container mx-auto p-4 max-w-6xl">
<div class="mb-6">
<a href={`${base}/`} class="btn btn-ghost btn-sm gap-2">
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-5 w-5"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M10 19l-7-7m0 0l7-7m-7 7h18"
/>
</svg>
Back to Home
</a>
</div>

<div class="card bg-base-100 shadow-xl">
<div class="card-body">
<h1 class="card-title text-3xl mb-4">
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-8 w-8"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
/>
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
/>
</svg>
Map Pool Configuration
</h1>

<p class="text-base-content/70 mb-6">
Select which maps are included in the active map pool. These maps will be used for team
statistics and map picks analysis.
</p>

{#if message}
<div class="alert {messageType === 'success' ? 'alert-success' : 'alert-error'} mb-6">
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-6 w-6 shrink-0 stroke-current"
fill="none"
viewBox="0 0 24 24"
>
{#if messageType === 'success'}
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
/>
{:else}
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
/>
{/if}
</svg>
<span>{message}</span>
</div>
{/if}

{#if loading}
<div class="flex justify-center py-8">
<span class="loading loading-spinner loading-lg"></span>
</div>
{:else}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
{#each availableMaps as mapName}
<div
class="card bg-base-200 cursor-pointer transition-all duration-200 hover:scale-105 {isActive(
mapName
)
? 'ring-2 ring-primary'
: 'opacity-60'}"
role="button"
tabindex="0"
on:click={() => toggleMap(mapName)}
on:keydown={(e) => e.key === 'Enter' && toggleMap(mapName)}
>
<figure class="relative">
<img src={getMapImage(mapName)} alt={mapName} class="w-full h-32 object-cover" />
{#if isActive(mapName)}
<div class="absolute top-2 right-2 badge badge-primary badge-lg">
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-4 w-4 mr-1"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M5 13l4 4L19 7"
/>
</svg>
Active
</div>
{/if}
</figure>
<div class="card-body p-4">
<h2 class="card-title text-lg">{mapName}</h2>
</div>
</div>
{/each}
</div>

<div class="card-actions justify-between items-center">
<div class="text-sm text-base-content/70">
{activeMaps.length} of {availableMaps.length} maps selected
</div>
<button
class="btn btn-primary"
disabled={saving || activeMaps.length === 0}
on:click={saveConfig}
>
{#if saving}
<span class="loading loading-spinner"></span>
{/if}
Save Configuration
</button>
</div>
{/if}
</div>
</div>
</div>
