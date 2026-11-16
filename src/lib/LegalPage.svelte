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
		<p class="eyebrow">Global Assault · Documentos</p>
		<h1>{title}</h1>
		{#if updated}<p class="date">Última atualização: {updated}</p>{/if}
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

	.date {
		color: var(--ui-muted-foreground);
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
