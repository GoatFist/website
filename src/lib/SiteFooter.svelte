		{#if stripLocale(page.url.pathname).startsWith('/global-assault')}
			<p class="note">{t.m.footer.note}</p>
		{/if}
		<nav class="langs" aria-label={t.m.common.language}>
			{#each locales as locale (locale.code)}
				<a href={localizePath(stripLocale(page.url.pathname), locale)} lang={locale.code} hreflang={locale.code} aria-current={locale.code === t.locale.code ? 'true' : undefined}>{locale.label}</a>
			{/each}
		</nav><script lang="ts">
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import { i18n, locales, localizePath, stripLocale } from './i18n/index.ts';
	import { discord, x } from './site.ts';

	const t = $derived(i18n());
	const year = new Date().getFullYear();
	const groups = $derived([
		{
			title: t.m.footer.studio,
			links: [
				{ href: t.href('/'), label: t.m.footer.home },
				{ href: t.href('/#estudio'), label: t.m.footer.howWeWork },
				{ href: x.url, label: `X ${x.handle}` }
			]
		},
		{
			title: 'Global Assault',
			links: [
				{ href: t.href('/global-assault'), label: t.m.footer.theGame },
				{ href: discord, label: 'Discord' },
				{ href: t.href('/global-assault/privacy'), label: t.m.footer.privacy },
				{ href: t.href('/global-assault/terms'), label: t.m.footer.terms }
			]
		}
	]);
</script>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="about">
				<a class="brand" href={t.href('/')} aria-label={t.m.common.home}><Logo /></a>
				<p>{t.m.footer.about}</p>
			</div>
			{#each groups as group (group.title)}
				<nav aria-label={group.title}>
					<p class="title">{group.title}</p>
					<ul>
						{#each group.links as link (link.href)}
							<li>
								{#if link.href.startsWith('http')}
									<a href={link.href} target="_blank" rel="noopener">
										{link.label}
										<Icon name="external" size={14} />
										<span class="sr-only">{t.m.common.newTab}</span>
									</a>
								{:else}
									<a href={link.href}>{link.label}</a>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>
		{#if page.url.pathname.startsWith('/global-assault')}
			<p class="note">
				O Global Assault é um projeto da comunidade, sem fins lucrativos, e uma homenagem viva a um FPS clássico que saiu
				do ar. Mantemos o jogo de pé para todo mundo jogar, de graça. Não temos nenhum vínculo com as empresas que
				criaram ou publicaram o jogo original.
			</p>
		{/if}
		<div class="bottom">
			<p>© {year} GOATFIST Interactive</p>
			<p>{t.m.footer.noTracking}</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		margin-top: auto;
		background: var(--surface-1);
		font-size: var(--text-sm);
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr));
		gap: var(--space-8) var(--space-6);
		padding-block: var(--space-9) var(--space-8);
	}

	.brand {
		display: inline-flex;
		max-width: 100%;
		font-size: 3.5rem;
	}

	.about p {
		max-width: 22rem;
		margin: var(--space-5) 0 0;
		color: var(--text-muted);
	}

	.title {
		margin-bottom: var(--space-4);
		color: var(--text-muted);
	}

	ul {
		display: grid;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--text);
		text-decoration: none;
	}

	li a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.note {
		max-width: var(--measure);
		margin: 0;
		padding-block: var(--space-6);
		border-top: 1px solid var(--rule);
		color: var(--text-muted);
		font-size: var(--text-sm);
		line-height: 1.6;
	}

	.langs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-5);
		padding-block: var(--space-5);
		border-top: 1px solid var(--rule);
		font-size: var(--text-sm);
	}

	.langs a {
		color: var(--text-muted);
		text-decoration: none;
	}

	.langs a:hover {
		color: var(--text);
		text-decoration: underline;
		text-underline-offset: 0.25em;
	}

	.langs a[aria-current='true'] {
		color: var(--text);
		font-weight: 600;
	}

	.bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-2) var(--space-5);
		padding-block: var(--space-5);
		border-top: 1px solid var(--rule);
		color: var(--text-muted);
		font-size: var(--text-xs);
	}

	.bottom p {
		margin: 0;
	}

	@media (max-width: 760px) {
		.top {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding-block: var(--space-8) var(--space-7);
		}

		.about {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 360px) {
		.brand {
			font-size: 3rem;
		}
	}
</style>
