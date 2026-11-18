<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { baseLocale, i18n, localizePath, stripLocale } from './i18n/index.ts';

	let {
		title,
		updated,
		children
	}: { title: string; updated?: string; children: Snippet } = $props();
	const t = $derived(i18n());
</script>

<article class="wrap legal">
	<header>
		<p class="kicker">{t.m.legal.kicker}</p>
		<h1>{title}</h1>
		{#if updated}<p class="date">{t.m.legal.updated} <time>{updated}</time></p>{/if}
		{#if t.locale.code !== baseLocale.code}
			<p class="translation">
				{t.m.legal.translation}
				<a href={localizePath(stripLocale(page.url.pathname), baseLocale)} lang={baseLocale.code}>{t.m.legal.translationLink}</a>.
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

	.translation {
		margin-top: var(--space-3);
		color: var(--text-muted);
		font-size: var(--text-sm);
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
