<script lang="ts">
	// Reusable avatar/logo component with error fallback
	export let src: string | undefined | null = undefined;
	export let alt: string = 'avatar';
	// Text used for fallback initials (e.g., player nickname or team name)
	export let text: string | undefined = undefined;
	// Optional additional classes to apply to the img/fallback root (sized by parent container)
	export let className: string = '';

	let errored = false;
	$: proxySrc = src
		? `/api/avatar?url=${encodeURIComponent(src)}&text=${encodeURIComponent(text ?? alt)}`
		: undefined;

	const showImage = () => !!src && !errored;

	const onError = () => {
		errored = true;
	};

	const getInitials = (name?: string) => {
		if (!name) return '?';
		const words = name.trim().split(/\s+/);
		if (words.length === 1) {
			return words[0].slice(0, 2).toUpperCase();
		}
		return (words[0][0] + words[1][0]).toUpperCase();
	};
</script>

{#if showImage()}
	<img
		src={proxySrc!}
		{alt}
		class={'w-full h-full object-cover ' + className}
		on:error={onError}
		draggable={false}
	/>
{:else}
	<div
		class={'w-full h-full flex items-center justify-center bg-neutral-focus text-neutral-content select-none ' +
			className}
	>
		<span class="font-bold text-xl leading-none">
			{getInitials(text ?? alt)}
		</span>
	</div>
{/if}

<style>
	/* No component-scoped styles; rely on Tailwind/DaisyUI */
</style>
