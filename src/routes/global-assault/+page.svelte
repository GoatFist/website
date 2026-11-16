<script lang="ts">
	import { site } from '#lib/site.ts';

	const description =
		'Global Assault é um FPS online para celular da GoatFist Interactive, em desenvolvimento. Beta fechado em breve.';

	const features = [
		{
			title: 'Partidas rápidas em equipe',
			text: 'Confrontos curtos e intensos, feitos para uma partida no intervalo ou uma noite inteira com o esquadrão.'
		},
		{
			title: 'Controles para a tela de toque',
			text: 'Mira, movimento e HUD desenhados para o celular, ajustáveis ao jeito de cada jogador.'
		},
		{
			title: 'Servidores próprios',
			text: 'Partidas hospedadas por nós, com conteúdo entregue pela nossa infraestrutura para o jogo evoluir sem esperar a loja.'
		},
		{
			title: 'Sem anúncios',
			text: 'Nada de anúncios interrompendo a partida e nenhuma ferramenta de rastreamento no jogo.'
		}
	];
</script>

<svelte:head>
	<title>Global Assault — GoatFist Interactive</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Global Assault" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{site.url}/global-assault" />
</svelte:head>

<section class="hero">
	<div class="wrap">
		<p class="eyebrow">FPS online · Celular · Em desenvolvimento</p>
		<h1>
			<img src="/global-assault/logotype.webp" alt="Global Assault" width="1200" height="400" />
		</h1>
		<p class="lead">
			Um tiro em primeira pessoa online, rápido e competitivo, feito para jogar no celular com os amigos.
			O beta fechado está chegando.
		</p>
		<p class="status"><span class="dot" aria-hidden="true"></span> Beta fechado em breve</p>
	</div>
</section>

<section class="wrap features" aria-labelledby="features-title">
	<h2 id="features-title">O que estamos construindo</h2>
	<div class="grid">
		{#each features as feature (feature.title)}
			<article>
				<h3>{feature.title}</h3>
				<p>{feature.text}</p>
			</article>
		{/each}
	</div>
</section>

<section class="wrap legal" aria-labelledby="legal-title">
	<h2 id="legal-title">Documentos</h2>
	<ul>
		<li><a href="/global-assault/privacy">Política de Privacidade</a></li>
		<li><a href="/global-assault/terms">Termos de Uso</a> <span class="tag">rascunho</span></li>
	</ul>
</section>

<style>
	.hero {
		padding-block: clamp(3rem, 8vw, 6rem) clamp(2.5rem, 6vw, 4rem);
		text-align: center;
		background:
			radial-gradient(50rem 26rem at 50% 0%, var(--accent-soft), transparent 70%),
			var(--ui-background);
		border-bottom: 1px solid var(--ui-border);
	}

	h1 {
		margin: 0 auto 1.5rem;
		max-width: 40rem;
	}

	h1 img {
		display: block;
		width: 100%;
		height: auto;
	}

	.lead {
		margin-inline: auto;
	}

	.status {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1rem;
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		background: var(--ui-muted);
		font-weight: 600;
		font-size: 0.95rem;
	}

	.dot {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: var(--accent);
	}

	.features {
		margin-top: clamp(3rem, 7vw, 5rem);
	}

	h2 {
		font-size: clamp(1.6rem, 3.5vw, 2.2rem);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-4);
		margin-top: 1.5rem;
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	article {
		padding: var(--space-6);
		border: 1px solid var(--ui-border);
		border-radius: var(--radius-md);
		background: var(--surface);
	}

	article h3 {
		font-size: 1.1rem;
	}

	article p {
		margin: 0;
		color: var(--ui-muted-foreground);
	}

	.legal {
		margin-top: clamp(3rem, 7vw, 4.5rem);
	}

	.legal ul {
		padding-left: 1.2rem;
	}

	.legal li {
		margin-bottom: 0.4rem;
	}

	.tag {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.1rem 0.45rem;
		border-radius: var(--ui-radius);
		border: 1px solid var(--draft-border);
		background: var(--draft);
	}
</style>
