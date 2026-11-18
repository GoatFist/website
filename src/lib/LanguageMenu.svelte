<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import {
		Menu,
		MenuContent,
		MenuItemIndicator,
		MenuRadioGroup,
		MenuRadioItem,
		MenuTrigger
	} from '@ui-sdk/svelte/menu';
	import Icon from './Icon.svelte';
	import { i18n, locales, localizePath, stripLocale } from './i18n/index.ts';

	const t = $derived(i18n());

	/** The same page in another language (the hash kept). */
	const pathIn = (code: string) => {
		const target = locales.find((l) => l.code === code) ?? locales[0];
		return localizePath(stripLocale(page.url.pathname), target) + page.url.hash;
	};
</script>

<Menu>
	<MenuTrigger class="lang-trigger" aria-label="{t.m.common.language}: {t.locale.label}">
		<Icon name="globe" />
		<span class="code">{t.locale.prefix || 'pt'}</span>
	</MenuTrigger>
	<MenuContent class="lang-menu">
		<MenuRadioGroup value={t.locale.code} onValueChange={(code) => goto(pathIn(code))}>
			{#each locales as locale (locale.code)}
				<MenuRadioItem value={locale.code} closeOnSelect>
					<span lang={locale.code}>{locale.label}</span>
					<MenuItemIndicator />
				</MenuRadioItem>
			{/each}
		</MenuRadioGroup>
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

	:global(.lang-trigger:hover),
	:global(.lang-trigger[data-open]) {
		background: var(--surface-2);
	}

	.code {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	:global(.lang-menu) {
		min-width: 10rem;
	}
</style>
