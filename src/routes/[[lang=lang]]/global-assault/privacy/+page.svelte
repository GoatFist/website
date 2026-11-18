<script lang="ts">
	import LegalPage from '#lib/LegalPage.svelte';
	import { i18n } from '#lib/i18n/index.ts';
	import { legalBody } from '#lib/legal/index.ts';
	import { site } from '#lib/site.ts';

	const t = $derived(i18n());
	const m = $derived(t.m.legal.privacy);
	// the body in the page's language (src/lib/legal/privacy/<locale>.svelte)
	const Body = $derived(legalBody('privacy', t.locale));
</script>

<svelte:head>
	<title>{m.title} | Global Assault</title>
	<meta name="description" content={m.description} />
	<meta property="og:url" content={site.url + t.href('/global-assault/privacy')} />
</svelte:head>

<LegalPage title={m.title} updated={m.updated}>
	<Body />
</LegalPage>
