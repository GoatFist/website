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
		background: color-mix(in srgb, var(--ui-background) 82%, transparent);
		backdrop-filter: saturate(1.5) blur(12px);
		border-bottom: 1px solid var(--ui-border);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: var(--space-6);
		height: var(--header-height);
	}

	.brand {
		display: inline-flex;
		flex-shrink: 0;
		font-size: 2rem;
		--logo-icon: var(--mark);
	}

	.links {
		display: flex;
		align-items: stretch;
		align-self: stretch;
		gap: var(--space-5);
		margin-left: auto;
	}

	.links a {
		position: relative;
		display: inline-flex;
		align-items: center;
		color: var(--ui-muted-foreground);
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
	}

	.links a:hover,
	.links a[aria-current='page'] {
		color: var(--ui-foreground);
	}

	.links a[aria-current='page']::after {
		content: '';
		position: absolute;
		inset: auto 0 -1px;
		height: 2px;
		background: var(--accent);
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
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: 1px solid var(--ui-border);
		border-radius: var(--radius-md);
		background: transparent;
		color: var(--ui-foreground);
		cursor: pointer;
	}

	:global(.sheet-close) {
		display: inline-grid;
	}

	:global(.sheet-backdrop) {
		background: rgb(0 0 0 / 0.5);
	}

	:global(.sheet) {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		width: min(22rem, 88vw);
		height: 100%;
		padding: var(--space-4) var(--gutter) var(--space-6);
		background: var(--ui-background);
		border-left: 1px solid var(--ui-border);
	}

	.sheet-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: calc(var(--header-height) - var(--space-4) * 2);
	}

	:global(.sheet-title) {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--ui-muted-foreground);
	}

	.sheet-links {
		display: flex;
		flex-direction: column;
	}

	.sheet-links a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-4) 0;
		border-bottom: 1px solid var(--ui-border);
		color: var(--ui-foreground);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 700;
		text-decoration: none;
	}

	.sheet-links a[aria-current='page'] {
		color: var(--accent);
	}

	.sheet-theme {
		margin-top: auto;
	}

	.sheet-theme p {
		margin-bottom: var(--space-3);
		font-size: var(--text-sm);
		color: var(--ui-muted-foreground);
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
