<script lang="ts">
	import {
		Menu,
		MenuContent,
		MenuItemIcon,
		MenuItemIndicator,
		MenuRadioGroup,
		MenuRadioItem,
		MenuTrigger
	} from '@ui-sdk/svelte/menu';
	import Icon from './Icon.svelte';
	import { i18n } from './i18n/index.ts';
	import { setTheme, theme, themes, type Theme } from './theme.svelte.ts';

	const t = $derived(i18n());

	const icons = { system: 'monitor', light: 'sun', dark: 'moon' } as const;
</script>

<Menu>
	<MenuTrigger class="theme-trigger" aria-label="{t.m.common.theme}: {t.m.common.themes[theme.value]}">
		<span class="light-icon"><Icon name="sun" /></span>
		<span class="dark-icon"><Icon name="moon" /></span>
	</MenuTrigger>
	<MenuContent class="theme-menu">
		<MenuRadioGroup value={theme.value} onValueChange={(value) => setTheme(value as Theme)}>
			{#each themes as value (value)}
				<MenuRadioItem {value} closeOnSelect>
					<MenuItemIcon><Icon name={icons[value]} size={16} /></MenuItemIcon>
					{t.m.common.themes[value]}
					<MenuItemIndicator />
				</MenuRadioItem>
			{/each}
		</MenuRadioGroup>
	</MenuContent>
</Menu>

<style>
	:global(.theme-trigger) {
		display: inline-grid;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		padding: 0;
		border: 1px solid var(--rule);
		border-radius: var(--radius-1);
		background: transparent;
		color: var(--text);
		cursor: pointer;
	}

	:global(.theme-trigger:hover),
	:global(.theme-trigger[data-open]) {
		background: var(--surface-2);
	}

	/* The trigger shows the theme in effect, a sun on light pages and a moon on dark ones; the menu names the choice. */
	.light-icon,
	.dark-icon {
		display: grid;
	}

	.dark-icon,
	:global(:root[data-theme='dark']) .light-icon {
		display: none;
	}

	:global(:root[data-theme='dark']) .dark-icon {
		display: grid;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root:not([data-theme='light'])) .light-icon {
			display: none;
		}

		:global(:root:not([data-theme='light'])) .dark-icon {
			display: grid;
		}
	}

	:global(.theme-menu) {
		min-width: 10rem;
	}
</style>
