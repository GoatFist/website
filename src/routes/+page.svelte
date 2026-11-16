<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import Logo from '#lib/Logo.svelte';
	import { site } from '#lib/site.ts';

	const description =
		'A GOATFIST Interactive é um estúdio independente brasileiro. Estamos fazendo o Global Assault, um FPS online para jogar no celular.';

	const values = [
		{
			title: 'Servidor próprio',
			text: 'Os servidores do jogo são nossos. Assim a gente cuida da qualidade das partidas e corrige bug e trapaça sem esperar ninguém.'
		},
		{
			title: 'Celular primeiro',
			text: 'Começamos pelo celular, com controles e telas pensados para jogar com os dedos. Uma versão para PC pode vir depois.'
		},
		{
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
	<div class="wrap hero-grid">
		<div class="hero-copy">
			<h1>Jogos online para jogar com a galera.</h1>
			<p class="lead">
				A GOATFIST Interactive é um estúdio pequeno e independente. Nosso primeiro jogo é o
				<strong>Global Assault</strong>, um FPS online que estamos levando para o celular.
			</p>
			<div class="actions">
				<a class="btn" href="/global-assault">Conheça Global Assault <Icon name="arrow" size={18} /></a>
				<a class="link-arrow" href="#estudio">Sobre o estúdio</a>
			</div>
		</div>
		<div class="mark" aria-hidden="true"><Logo parts="icon" /></div>
	</div>
</section>

<section class="game" aria-labelledby="ga-title">
	<img
		class="art"
		src="/global-assault/key-art-1920.webp"
		srcset="/global-assault/key-art-960.webp 960w, /global-assault/key-art-1920.webp 1920w"
		sizes="100vw"
		alt=""
		width="1916"
		height="820"
		loading="lazy"
	/>
	<div class="wrap game-copy">
		<h2 id="ga-title">
			<img src="/global-assault/logotype-gold.webp" alt="Global Assault" width="1200" height="315" loading="lazy" />
		</h2>
		<p class="facts">FPS online · Celular · Beta fechado em breve</p>
		<p>
			Partidas rápidas em equipe, com os mapas e os modos de um FPS clássico. O beta fechado abre em breve no Android.
		</p>
		<a class="link-arrow on-art" href="/global-assault">Ver o jogo <Icon name="arrow" size={18} /></a>
	</div>
</section>

<section id="estudio" class="section" aria-labelledby="studio-title">
	<div class="wrap studio">
		<h2 id="studio-title">Como trabalhamos</h2>
		<div class="rows">
			{#each values as v (v.title)}
				<article>
					<h3>{v.title}</h3>
					<p>{v.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		overflow: hidden;
		padding-block: var(--section);
		border-bottom: 1px solid var(--rule);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		align-items: center;
		gap: var(--space-8);
	}

	h1 {
		max-width: 12ch;
		margin-bottom: var(--space-6);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3) var(--space-6);
		margin-top: var(--space-7);
	}

	/* The goat as a quiet mark in surface tone: the headline is the one dominant element. */
	.mark {
		justify-self: end;
		margin-right: calc(var(--gutter) * -1 - 4rem);
		font-size: clamp(14rem, 30vw, 28rem);
		--logo-icon: var(--surface-2);
	}

	.game {
		position: relative;
		isolation: isolate;
		display: flex;
		align-items: center;
		min-height: min(80vh, 46rem);
		padding-block: var(--section);
		background: var(--night);
		color: var(--bone);
	}

	.art {
		position: absolute;
		inset: 0;
		z-index: -2;
		width: 100%;
		max-width: none;
		height: 100%;
		object-fit: cover;
		object-position: 70% 30%;
	}

	/* A scrim, not decoration: it keeps the copy readable over any crop of the art. */
	.game::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(90deg, color-mix(in srgb, var(--night) 92%, transparent) 0%, color-mix(in srgb, var(--night) 60%, transparent) 50%, color-mix(in srgb, var(--night) 0%, transparent) 80%);
	}

	.game-copy > * {
		max-width: 30rem;
	}

	.game h2 {
		margin-bottom: var(--space-5);
	}

	.game h2 img {
		display: block;
		width: 100%;
		height: auto;
	}

	.facts {
		color: var(--steel);
		font-size: var(--text-sm);
	}

	.game p:not(.facts) {
		color: var(--bone);
		font-size: var(--text-lg);
		line-height: 1.55;
	}

	.on-art {
		margin-top: var(--space-4);
		color: var(--bone);
		text-decoration-color: color-mix(in srgb, var(--bone) 40%, transparent);
	}

	.studio {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
		gap: var(--space-8);
		align-items: start;
	}

	.studio h2 {
		position: sticky;
		top: calc(var(--header-height) + var(--space-6));
	}

	.rows article {
		display: grid;
		grid-template-columns: minmax(0, 14rem) minmax(0, 1fr);
		gap: var(--space-5);
		padding-block: var(--space-6);
		border-top: 1px solid var(--rule);
	}

	.rows article:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.rows h3 {
		margin: 0;
	}

	.rows p {
		margin: 0;
		max-width: var(--measure);
		color: var(--text-muted);
	}

	@media (max-width: 960px) {
		.hero-grid,
		.studio {
			grid-template-columns: 1fr;
		}

		.mark {
			display: none;
		}

		.studio h2 {
			position: static;
		}

		.rows article {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.game {
			align-items: flex-end;
		}

		.game::after {
			background: linear-gradient(0deg, color-mix(in srgb, var(--night) 95%, transparent) 15%, color-mix(in srgb, var(--night) 70%, transparent) 60%, color-mix(in srgb, var(--night) 35%, transparent) 100%);
		}
	}
</style>
