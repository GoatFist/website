<script lang="ts">
	import '@ui-sdk/core/web.css';
	import '../app.css';
	import { page } from '$app/state';
	import SiteFooter from '#lib/SiteFooter.svelte';
	import SiteHeader from '#lib/SiteHeader.svelte';
	import ogGame from '#lib/assets/og-global-assault.png';
	import ogStudio from '#lib/assets/og-studio.png';
	import { i18n, locales, localizePath, stripLocale } from '#lib/i18n/index.ts';
	import { site, x } from '#lib/site.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	const t = $derived(i18n());
	// the page with its language prefix taken off, so every version can be named
	const path = $derived(stripLocale(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href="/brand/favicon.ico" sizes="48x48" />
	<link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0b0d10" />
	<link rel="canonical" href={site.url + page.url.pathname} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={t.locale.og} />
	{#each locales as locale (locale.code)}
		<link rel="alternate" hreflang={locale.code} href={site.url + localizePath(path, locale)} />
		{#if locale.code !== t.locale.code}<meta property="og:locale:alternate" content={locale.og} />{/if}
	{/each}
	<link rel="alternate" hreflang="x-default" href={site.url + path} />
	<meta
		property="og:image"
		content={site.url + (path.startsWith('/global-assault') ? ogGame : ogStudio)}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={x.handle} />
</svelte:head>

<a class="skip" href="#main">{t.m.common.skip}</a>
<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />

<style>
	.skip {
		position: absolute;
		left: var(--space-2);
		top: -4rem;
		z-index: 30;
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-1);
		background: var(--action);
		color: var(--action-text);
	}

	.skip:focus {
		top: var(--space-2);
	}
</style>
