<script lang="ts">
	import { page } from '$app/state';
	import { i18n } from '#lib/i18n/index.ts';

	const t = $derived(i18n());
	const m = $derived(t.m.error);
	const missing = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{missing ? m.notFoundTitle : m.errorTitle} — GOATFIST Interactive</title>
</svelte:head>

<section class="wrap error">
	<h1>{missing ? m.notFound : m.failed}</h1>
	<p class="lead">
		{missing ? m.notFoundLead : m.failedLead}
	</p>
	<a class="btn" href={t.href('/')}>{m.back}</a>
</section>

<style>
	.error {
		padding-block: var(--section);
	}

	h1 {
		font-size: var(--text-2xl);
	}

	.lead {
		margin-bottom: var(--space-7);
	}
</style>
