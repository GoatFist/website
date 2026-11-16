<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		updated,
		children
	}: { title: string; updated?: string; children: Snippet } = $props();
</script>

<article class="wrap legal">
	<header>
		<p class="kicker">Global Assault</p>
		<h1>{title}</h1>
		{#if updated}<p class="date">Última atualização: <time>{updated}</time></p>{/if}
	</header>
	{@render children()}
</article>

<style>
	.legal {
		max-width: 50rem;
		padding-block: clamp(2.5rem, 6vw, 4rem) 0;
		line-height: 1.72;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 2.8rem);
	}

	header {
		margin-bottom: var(--space-8);
		padding-bottom: var(--space-6);
		border-bottom: 1px solid var(--rule);
	}

	.kicker {
		margin-bottom: var(--space-4);
		color: var(--text-muted);
	}

	.date time {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
	}

	.date {
		color: var(--text-muted);
	}

	.legal :global(section) {
		margin-top: 2.25rem;
	}

	.legal :global(h2) {
		font-size: 1.3rem;
	}

	.legal :global(li) {
		margin-bottom: 0.5rem;
	}

	.legal :global(ul) {
		padding-left: 1.35rem;
	}

	.legal :global(a) {
		overflow-wrap: anywhere;
	}
</style>
