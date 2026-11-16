<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		updated,
		draft = false,
		children
	}: { title: string; updated?: string; draft?: boolean; children: Snippet } = $props();
</script>

<article class="wrap legal">
	<header>
		<p class="eyebrow">Global Assault · Documentos</p>
		<h1>{title}</h1>
		{#if updated}<p class="date">Última atualização: {updated}</p>{/if}
		{#if draft}
			<p class="draft" role="note">
				<strong>Rascunho.</strong> Este documento ainda não é a versão final e não tem valor como termo definitivo.
			</p>
		{/if}
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

	.draft {
		padding: 1rem 1.15rem;
		border: 1px solid var(--draft-border);
		border-radius: calc(var(--ui-radius) * 2);
		background: var(--draft);
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

	.legal :global(.notice) {
		border-left: 3px solid var(--accent);
		padding-left: 1rem;
	}

	.legal :global(footer) {
		margin-top: 2.5rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--ui-border);
		color: var(--ui-muted-foreground);
		font-size: 0.9rem;
	}
</style>
