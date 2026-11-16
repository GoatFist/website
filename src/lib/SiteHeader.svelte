<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import {
		Drawer,
		DrawerBackdrop,
		DrawerClose,
		DrawerContent,
		DrawerTitle,
		DrawerTrigger
	} from '@ui-sdk/svelte/drawer';
	import {
		SegmentedControl,
		SegmentedControlIndicator,
		SegmentedControlItem
	} from '@ui-sdk/svelte/segmented-control';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import ThemeMenu from './ThemeMenu.svelte';
	import { nav } from './site.ts';
	import { readTheme, setTheme, theme, themes, type Theme } from './theme.svelte.ts';

	let open = $state(false);

	$effect(readTheme);
	afterNavigate(() => (open = false));

	const current = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href.split('#')[0]) && !href.includes('#');
</script>

<header class="header">
	<div class="wrap bar">
		<a class="brand" href="/" aria-label="GOATFIST Interactive, início">
			<Logo parts="compact" />
		</a>

		<nav class="links" aria-label="Principal">
			{#each nav as item (item.href)}
				<a href={item.href} aria-current={current(item.href) ? 'page' : undefined}>{item.label}</a>
			{/each}
		</nav>

		<div class="actions">
			<ThemeMenu />
			<Drawer side="right" bind:open>
				<DrawerTrigger class="menu-trigger" aria-label="Abrir menu">
					<Icon name="menu" />
				</DrawerTrigger>
				<DrawerBackdrop class="sheet-backdrop" />
				<DrawerContent class="sheet">
					<div class="sheet-head">
						<DrawerTitle class="sheet-title">Menu</DrawerTitle>
						<DrawerClose class="sheet-close" aria-label="Fechar menu">
							<Icon name="close" />
						</DrawerClose>
					</div>
					<nav class="sheet-links" aria-label="Principal">
						{#each nav as item (item.href)}
							<a href={item.href} aria-current={current(item.href) ? 'page' : undefined}>
								{item.label}
								<Icon name="arrow" size={18} />
							</a>
						{/each}
					</nav>
					<div class="sheet-theme">
						<p id="sheet-theme-label">Tema</p>
						<SegmentedControl
							aria-labelledby="sheet-theme-label"
							value={theme.value}
							onValueChange={(value) => setTheme(value as Theme)}
						>
							<SegmentedControlIndicator />
							{#each themes as t (t.value)}
								<SegmentedControlItem value={t.value}>{t.label}</SegmentedControlItem>
							{/each}
						</SegmentedControl>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 20;
		background: var(--surface);
		border-bottom: 1px solid var(--rule);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: var(--space-7);
		height: var(--header-height);
	}

	.brand {
		display: inline-flex;
		flex-shrink: 0;
		font-size: 2rem;
	}

	.links {
		display: flex;
		align-self: stretch;
		gap: var(--space-6);
		margin-left: auto;
	}

	.links a {
		position: relative;
		display: inline-flex;
		align-items: center;
		color: var(--text-muted);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
	}

	.links a:hover,
	.links a[aria-current='page'] {
		color: var(--text);
	}

	.links a[aria-current='page']::after {
		content: '';
		position: absolute;
		inset: auto 0 -1px;
		height: 2px;
		background: var(--link);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	:global(.menu-trigger),
	:global(.sheet-close) {
		display: none;
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

	:global(.sheet-close) {
		display: inline-grid;
	}

	:global(.sheet-backdrop) {
		background: color-mix(in srgb, var(--night) 60%, transparent);
	}

	:global(.sheet) {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);
		width: min(24rem, 90vw);
		height: 100%;
		padding: 0 var(--gutter) var(--space-7);
		background: var(--surface);
		border-left: 1px solid var(--rule);
	}

	.sheet-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
	}

	:global(.sheet-title) {
		margin: 0;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--text-muted);
	}

	.sheet-links {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--rule);
	}

	.sheet-links a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-5) 0;
		border-bottom: 1px solid var(--rule);
		color: var(--text);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 500;
		text-decoration: none;
	}

	.sheet-links a[aria-current='page'] {
		color: var(--link);
	}

	.sheet-theme {
		margin-top: auto;
	}

	.sheet-theme p {
		margin-bottom: var(--space-3);
		font-size: var(--text-sm);
		color: var(--text-muted);
	}

	.sheet-theme :global([data-slot='segmented-control']) {
		width: 100%;
	}

	.sheet-theme :global([data-slot='segmented-control-item']) {
		flex: 1;
	}

	@media (max-width: 720px) {
		.links {
			display: none;
		}

		.actions {
			margin-left: auto;
		}

		:global(.menu-trigger) {
			display: inline-grid;
		}
	}

	@media (max-width: 360px) {
		.brand {
			font-size: 1.75rem;
		}
	}
</style>
