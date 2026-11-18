<script lang="ts">
	import { page } from '$app/state';
	import { Menu, MenuContent, MenuItem, MenuTrigger } from '@ui-sdk/svelte/menu';
	import Icon from './Icon.svelte';
	import { i18n, locales, localizePath, stripLocale } from './i18n/index.ts';

	// `footer`: the language's name and a chevron, opening upward (the footer's last line); otherwise the header's globe and code.
	let { footer = false }: { footer?: boolean } = $props();

	const t = $derived(i18n());
	const pathIn = (locale: (typeof locales)[number]) => localizePath(stripLocale(page.url.pathname), locale) + page.url.hash;
</script>

<!-- Items are links, kept mounted while closed, so every version of the page is a link search engines follow. -->
<Menu>
	<MenuTrigger class="lang-trigger" data-footer={footer || undefined} aria-label="{t.m.common.language}: {t.locale.label}">
		<Icon name="globe" size={footer ? 16 : 20} />
		{#if footer}
			<span>{t.locale.label}</span>
			<Icon name="chevron" size={14} />
		{:else}
			<span class="code">{t.locale.prefix || 'pt'}</span>
		{/if}
	</MenuTrigger>
	<MenuContent class="lang-menu" keepMounted side={footer ? 'top' : 'bottom'} align={footer ? 'start' : 'end'} sideOffset={8}>
		{#each locales as locale (locale.code)}
			<MenuItem>
				{#snippet render({ props })}
					<a {...props} href={pathIn(locale)} lang={locale.code} hreflang={locale.code} aria-current={locale.code === t.locale.code ? 'true' : undefined}>
						{locale.label}
						{#if locale.code === t.locale.code}<Icon name="check" size={14} />{/if}
					</a>
				{/snippet}
			</MenuItem>
		{/each}
	</MenuContent>
</Menu>

<style>
	:global(.lang-trigger) {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 2.75rem;
		padding: 0 var(--space-3);
		border: 1px solid var(--rule);
		border-radius: var(--radius-1);
		background: transparent;
		color: var(--text);
		cursor: pointer;
	}

	:global(.lang-trigger[data-footer]) {
		gap: var(--space-2);
		font-size: var(--text-sm);
	}

	:global(.lang-trigger:hover),
	:global(.lang-trigger[data-open]) {
		background: var(--surface-2);
	}

	:global(.lang-trigger[data-footer] svg:last-child) {
		transition: rotate 0.15s;
	}

	:global(.lang-trigger[data-footer][data-open] svg:last-child) {
		rotate: 180deg;
	}

	.code {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	:global(.lang-menu) {
		min-width: 11rem;
	}

	:global(.lang-menu a) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		color: inherit;
		text-decoration: none;
	}

	:global(.lang-menu a[aria-current='true']) {
		font-weight: 600;
	}
</style>
