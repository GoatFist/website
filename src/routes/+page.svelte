<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import Logo from '#lib/Logo.svelte';
	import { site } from '#lib/site.ts';

	const description =
		'A GOATFIST Interactive é um estúdio independente brasileiro. Estamos fazendo o Global Assault, um FPS online para jogar no celular.';

	const facts = [
		{ term: 'Gênero', value: 'FPS online' },
		{ term: 'Plataforma', value: 'Celular' },
		{ term: 'Status', value: 'Beta fechado em breve' }
	];

	const values = [
		{
			n: '01',
			title: 'Servidor próprio',
			text: 'Os servidores do jogo são nossos. Assim a gente cuida da qualidade das partidas e corrige bug e trapaça sem esperar ninguém.'
		},
		{
			n: '02',
			title: 'Celular primeiro',
			text: 'Começamos pelo celular, com controles e telas pensados para jogar com os dedos. Uma versão para PC pode vir depois.'
		},
		{
			n: '03',
			title: 'Sem anúncio',
			text: 'Nenhum anúncio no meio da partida e nenhuma ferramenta de rastreamento. O jogo guarda só o que precisa para funcionar.'
		}
	];
</script>

<svelte:head>
	<title>GOATFIST Interactive — estúdio independente de jogos</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="GOATFIST Interactive" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site.url} />
</svelte:head>

<section class="hero">
	<div class="mark" aria-hidden="true"><Logo parts="icon" /></div>
	<div class="wrap hero-inner">
		<p class="eyebrow">Estúdio independente</p>
		<h1>Jogos de tiro para jogar com a galera.</h1>
		<p class="lead">
			A GOATFIST Interactive é um estúdio pequeno e independente. Nosso primeiro jogo é o
			<strong>Global Assault</strong>, um FPS online que estamos levando para o celular.
		</p>
		<div class="actions">
			<a class="btn btn-primary" href="/global-assault">Conheça Global Assault <Icon name="arrow" size={18} /></a>
			<a class="btn btn-secondary" href="#estudio">Sobre o estúdio</a>
		</div>
	</div>
</section>

<section class="section" aria-labelledby="ga-title">
	<div class="wrap">
		<a class="game" href="/global-assault">
			<div class="game-copy">
				<p class="eyebrow">Em desenvolvimento</p>
				<h2 id="ga-title">
					<img src="/global-assault/logotype-gold.webp" alt="Global Assault" width="1200" height="315" />
				</h2>
				<p>
					Partidas rápidas em equipe, com os mapas e os modos de um FPS clássico. O beta fechado abre em breve
					no Android.
				</p>
				<span class="more">Ver o jogo <Icon name="arrow" size={18} /></span>
			</div>
			<dl class="facts">
				{#each facts as fact (fact.term)}
					<div>
						<dt>{fact.term}</dt>
						<dd>{fact.value}</dd>
					</div>
				{/each}
			</dl>
		</a>
	</div>
</section>

<section id="estudio" class="section studio" aria-labelledby="studio-title">
	<div class="wrap">
		<p class="eyebrow">O estúdio</p>
		<h2 id="studio-title">Como trabalhamos</h2>
		<ol class="values">
			{#each values as v (v.n)}
				<li>
					<span class="n">{v.n}</span>
					<h3>{v.title}</h3>
					<p>{v.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(4rem, 3rem + 8vw, 9rem);
		border-bottom: 1px solid var(--ui-border);
		background:
			radial-gradient(45rem 28rem at 78% 30%, var(--accent-soft), transparent 70%),
			var(--ui-background);
	}

	.mark {
		position: absolute;
		right: max(-6rem, calc((100vw - var(--content)) / 2 - 4rem));
		top: 50%;
		translate: 0 -50%;
		font-size: clamp(16rem, 34vw, 30rem);
		--logo-icon: var(--mark);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
	}

	.hero h1 {
		max-width: 13ch;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-6);
	}

	.game {
		display: grid;
		grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
		gap: var(--space-7);
		align-items: center;
		padding: clamp(1.5rem, 1rem + 3vw, 3rem);
		border: 1px solid var(--ui-border);
		border-radius: var(--radius-lg);
		background: var(--surface);
		color: inherit;
		text-decoration: none;
		transition: border-color 0.15s;
	}

	.game:hover {
		border-color: var(--accent);
	}

	.game h2 {
		max-width: 26rem;
		margin-bottom: var(--space-5);
	}

	.game h2 img {
		display: block;
		width: 100%;
		height: auto;
	}

	.game-copy p:not(.eyebrow) {
		color: var(--ui-muted-foreground);
		max-width: 34rem;
	}

	.more {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--accent);
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.facts {
		display: grid;
		gap: var(--space-5);
		margin: 0;
	}

	.facts div {
		padding-left: var(--space-4);
		border-left: 2px solid var(--accent);
	}

	dt {
		font-size: var(--text-xs);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ui-muted-foreground);
	}

	dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: 700;
	}

	.studio {
		padding-top: 0;
	}

	.values {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-5);
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
	}

	.values li {
		padding: var(--space-6) var(--space-5);
		border-top: 2px solid var(--ui-border);
	}

	.n {
		display: block;
		margin-bottom: var(--space-4);
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--accent);
	}

	.values p {
		margin: 0;
		color: var(--ui-muted-foreground);
	}

	/* Beside the headline only where the two can't meet; behind it as a watermark below that. */
	@media (max-width: 1180px) {
		.mark {
			opacity: 0.1;
			right: -5rem;
		}
	}

	@media (max-width: 900px) {

		.values {
			grid-template-columns: 1fr;
			gap: 0;
		}

		.values li {
			padding-inline: 0;
		}
	}

	@media (max-width: 760px) {
		.game {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}
	}
</style>
