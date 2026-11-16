<script lang="ts">
	import Logo from './Logo.svelte';
	import { footerLinks } from './site.ts';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="about">
				<a class="brand" href="/" aria-label="GoatFist Interactive, início"><Logo /></a>
				<p>Estúdio independente de jogos online. Fazendo Global Assault, um FPS para celular.</p>
			</div>
			{#each footerLinks as group (group.title)}
				<nav aria-label={group.title}>
					<p class="title">{group.title}</p>
					<ul>
						{#each group.links as link (link.href)}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>
		<div class="bottom">
			<p>© {year} GoatFist Interactive</p>
			<p>Sem cookies, anúncios ou rastreadores.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		margin-top: auto;
		border-top: 1px solid var(--ui-border);
		background: var(--ui-muted);
		font-size: var(--text-sm);
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr));
		gap: var(--space-7) var(--space-6);
		padding-block: var(--space-7);
	}

	.brand {
		display: inline-flex;
		font-size: 3.5rem;
		max-width: 100%;
		--logo-icon: var(--mark);
	}

	.about p {
		max-width: 22rem;
		margin: var(--space-5) 0 0;
		color: var(--ui-muted-foreground);
	}

	.title {
		margin-bottom: var(--space-3);
		font-family: var(--font-display);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ui-muted-foreground);
	}

	ul {
		display: grid;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li a {
		color: var(--ui-foreground);
		text-decoration: none;
	}

	li a:hover {
		color: var(--accent);
	}

	.bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-2) var(--space-5);
		padding-block: var(--space-5);
		border-top: 1px solid var(--ui-border);
		color: var(--ui-muted-foreground);
		font-size: var(--text-xs);
	}

	.bottom p {
		margin: 0;
	}

	@media (max-width: 760px) {
		.top {
			grid-template-columns: repeat(2, minmax(0, 1fr));
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
