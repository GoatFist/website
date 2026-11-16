<script lang="ts">
	import { site } from '#lib/site.ts';
	import Logo from '#lib/Logo.svelte';

	const description =
		'GoatFist Interactive é um estúdio independente de jogos. Estamos desenvolvendo Global Assault, um FPS online para celular.';
</script>

<svelte:head>
	<title>GoatFist Interactive — estúdio independente de jogos</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="GoatFist Interactive" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site.url} />
</svelte:head>

<section class="hero">
	<div class="wrap grid">
		<div>
			<p class="eyebrow">Estúdio independente</p>
			<h1>Jogos online feitos para jogar com os amigos.</h1>
			<p class="lead">
				Somos a GoatFist Interactive, um estúdio pequeno que faz jogos de ação competitivos. Nosso primeiro título é
				<strong>Global Assault</strong>, um FPS online para celular.
			</p>
			<div class="actions">
				<a class="cta" href="/global-assault">Conheça Global Assault</a>
				<a class="cta secondary" href="#estudio">Sobre o estúdio</a>
			</div>
		</div>
		<div class="mark"><Logo parts="icon" /></div>
	</div>
</section>

<section class="wrap feature" aria-labelledby="ga-title">
	<div class="card">
		<div>
			<p class="eyebrow">Em desenvolvimento</p>
			<h2 id="ga-title">Global Assault</h2>
			<p>
				Tiroteio rápido em equipe, partidas curtas e controles pensados para a tela de toque. Um FPS
				online para celular, com servidores próprios e o beta fechado chegando em breve.
			</p>
			<a href="/global-assault">Ver o jogo →</a>
		</div>
		<dl>
			<div>
				<dt>Gênero</dt>
				<dd>FPS online</dd>
			</div>
			<div>
				<dt>Plataforma</dt>
				<dd>Celular</dd>
			</div>
			<div>
				<dt>Status</dt>
				<dd>Beta fechado em breve</dd>
			</div>
		</dl>
	</div>
</section>

<section id="estudio" class="wrap studio" aria-labelledby="studio-title">
	<p class="eyebrow">O estúdio</p>
	<h2 id="studio-title">Como trabalhamos</h2>
	<div class="values">
		<article>
			<h3>Online de verdade</h3>
			<p>
				Construímos nossos próprios servidores e a nossa entrega de conteúdo, para que as partidas
				sejam justas e o jogo continue evoluindo depois do lançamento.
			</p>
		</article>
		<article>
			<h3>Feito para o celular</h3>
			<p>
				Controles, interface e desempenho pensados para a tela de toque desde o início, não adaptados
				depois.
			</p>
		</article>
		<article>
			<h3>Respeito ao jogador</h3>
			<p>
				Sem anúncios e sem ferramentas de rastreamento. Coletamos apenas o que o jogo precisa para
				funcionar, como explica a nossa <a href="/global-assault/privacy">política de privacidade</a>.
			</p>
		</article>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(3rem, 9vw, 7rem) clamp(2.5rem, 6vw, 4.5rem);
		background:
			radial-gradient(60rem 30rem at 85% 10%, var(--accent-soft), transparent 70%),
			var(--ui-background);
		border-bottom: 1px solid var(--ui-border);
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
		align-items: center;
		gap: 3rem;
	}

	.mark {
		justify-self: center;
		font-size: clamp(10rem, 22vw, 17rem);
		--logo-icon: var(--ember);
	}

	h1 {
		font-size: clamp(2.3rem, 6.5vw, 4.25rem);
		font-weight: 800;
		letter-spacing: -0.035em;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}

	.feature {
		margin-top: clamp(2.5rem, 6vw, 4.5rem);
	}

	.card {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		gap: 2.5rem;
		padding: clamp(1.5rem, 4vw, 2.75rem);
		border: 1px solid var(--ui-border);
		border-radius: calc(var(--ui-radius) * 3);
		background: var(--surface);
	}

	.card h2 {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
	}

	.card a {
		font-weight: 600;
	}

	dl {
		display: grid;
		gap: 1rem;
		margin: 0;
		align-content: center;
	}

	dl div {
		padding-left: 1rem;
		border-left: 2px solid var(--accent);
	}

	dt {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--ui-muted-foreground);
	}

	dd {
		margin: 0;
		font-weight: 650;
	}

	.studio {
		margin-top: clamp(3.5rem, 8vw, 6rem);
	}

	.studio h2 {
		font-size: clamp(1.7rem, 3.5vw, 2.25rem);
	}

	.values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.values article {
		padding: 1.5rem;
		border-radius: calc(var(--ui-radius) * 2);
		background: var(--ui-muted);
	}

	.values h3 {
		font-size: 1.15rem;
	}

	.values p {
		color: var(--ui-muted-foreground);
		margin: 0;
	}

	@media (max-width: 760px) {
		.grid,
		.card {
			grid-template-columns: 1fr;
		}

		.mark {
			display: none;
		}
	}
</style>
