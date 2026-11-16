<script lang="ts">
	import '@ui-sdk/core/web.css';
	import '../app.css';
	import { page } from '$app/state';
	import SiteFooter from '#lib/SiteFooter.svelte';
	import SiteHeader from '#lib/SiteHeader.svelte';
	import { site, x } from '#lib/site.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href="/brand/favicon.ico" sizes="48x48" />
	<link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0b0d10" />
	<link rel="canonical" href={site.url + page.url.pathname} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="pt_BR" />
	<meta
		property="og:image"
		content={site.url + (page.url.pathname.startsWith('/global-assault') ? '/global-assault/og-image.png' : '/brand/og-image.png')}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={x.handle} />
</svelte:head>

<a class="skip" href="#main">Pular para o conteúdo</a>
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
