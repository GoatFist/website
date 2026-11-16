<script lang="ts">
	import icon from './brand/icon.svg?raw';
	import goatfist from './brand/goatfist.svg?raw';
	import interactive from './brand/interactive.svg?raw';

	// lockup: icon + GOATFIST + INTERACTIVE; compact: without INTERACTIVE, for sizes where it falls under the kit's 6 px minimum.
	let { parts = 'lockup' }: { parts?: 'lockup' | 'compact' | 'icon' } = $props();
</script>

<!-- The brand kit's vectors (GoatFist/brand, vectors/), drawn in currentColor so the theme colours them. -->
<span class="logo" data-parts={parts} aria-hidden="true">
	<span class="icon">{@html icon}</span>
	{#if parts !== 'icon'}
		<span class="words">
			<span class="goatfist">{@html goatfist}</span>
			{#if parts === 'lockup'}<span class="interactive">{@html interactive}</span>{/if}
		</span>
	{/if}
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.55em;
		height: 1em;
		color: var(--text);
	}

	.logo :global(svg) {
		display: block;
		height: 100%;
		width: auto;
	}

	.icon {
		height: 1em;
		color: var(--logo-icon, currentColor);
	}

	.words {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15em;
	}

	.goatfist {
		height: 0.42em;
	}

	[data-parts='compact'] .goatfist {
		height: 0.5em;
	}

	.interactive {
		height: 0.11em;
		color: var(--text-muted);
	}
</style>
