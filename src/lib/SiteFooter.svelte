<script lang="ts">
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import { footerLinks } from './site.ts';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="about">
				<a class="brand" href="/" aria-label="GOATFIST Interactive, início"><Logo /></a>
				<p>Estúdio independente de jogos. Agora fazendo o Global Assault.</p>
			</div>
			{#each footerLinks as group (group.title)}
				<nav aria-label={group.title}>
					<p class="title">{group.title}</p>
					<ul>
						{#each group.links as link (link.href)}
							<li>
								{#if link.href.startsWith('http')}
									<a href={link.href} target="_blank" rel="noopener">
										{link.label}
										<Icon name="external" size={14} />
										<span class="sr-only">(abre em outra aba)</span>
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
			<p>Sem cookies, anúncios ou rastreadores.</p>
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
