<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import { discord, site } from '#lib/site.ts';

	const description =
		'Global Assault: o FPS online clássico, reconstruído para o celular pela GoatFist Interactive. Seis modos, servidores próprios e beta fechado no Android em breve.';

	// Facts from the game's tables (gam-server content/tables) and the beta plan (docs/BETA_ROADMAP.md).
	const stats = [
		{ value: '6', label: 'Modos de jogo' },
		{ value: '29', label: 'Mapas no catálogo' },
		{ value: '480', label: 'Armas no catálogo' },
		{ value: 'Android', label: 'Plataforma do beta' }
	];

	const features = [
		'Controles de toque feitos para este jogo',
		'Partida rápida e salas personalizadas',
		'Bots completam as vagas da partida',
		'Servidor valida movimento, tiros e dano',
		'Loja, inventário, mochilas e visuais',
		'Amigos e chat dentro do jogo',
		'Conteúdo novo sem baixar outro APK',
		'Sem anúncios e sem rastreadores'
	];

	const modes = [
		{
			name: 'Mata-mata em equipe',
			text: 'Ataque contra defesa com renascimento. Vence quem chegar primeiro ao limite de abates ou liderar quando o tempo acabar.',
			tags: ['Equipe', 'Renascimento']
		},
		{
			name: 'Missão de bomba',
			text: 'Rodadas sem renascimento: um lado planta a bomba, o outro defende ou desarma. A rodada acaba quando um time cai ou a bomba decide.',
			tags: ['Equipe', 'Rodadas', 'Plantar/desarmar']
		},
		{
			name: 'Sala de sniper',
			text: 'Mata-mata em equipe em que a única arma principal permitida é o rifle de precisão.',
			tags: ['Equipe', 'Regras']
		},
		{
			name: 'Caçador-rei',
			text: 'Uma sequência de abates coroa o Caçador-rei, que recebe a minigun. Derrube o rei antes que ele derrube o seu time.',
			tags: ['Equipe', 'Diversão']
		},
		{
			name: 'Corrida armamentista',
			text: 'Cada marca de abates entrega a próxima arma da escada, sem trocar de arma no caminho. Chegue ao fim antes do outro time.',
			tags: ['Equipe', 'Progressão']
		},
		{
			name: 'Vampiro',
			text: 'Caçadores contra vampiros. Quem cai vira vampiro, a fúria transforma um caçador em licano e uma estaca encerra a rodada de um vampiro.',
			tags: ['Rodadas', 'Infecção']
		}
	];
</script>

<svelte:head>
	<title>Global Assault — FPS online para celular</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Global Assault" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{site.url}/global-assault" />
	<link rel="preload" as="image" href="/global-assault/hero-1920.webp" imagesrcset="/global-assault/hero-960.webp 960w, /global-assault/hero-1920.webp 1920w" imagesizes="100vw" />
</svelte:head>

<section class="hero">
	<img
		class="art"
		src="/global-assault/hero-1920.webp"
		srcset="/global-assault/hero-960.webp 960w, /global-assault/hero-1920.webp 1920w"
		sizes="100vw"
		alt=""
		width="1916"
		height="820"
	/>
	<div class="wrap hero-inner">
		<p class="pill"><span class="dot" aria-hidden="true"></span> Beta fechado em breve · Android</p>
		<h1>
			<img class="logotype" src="/global-assault/logotype.webp" alt="Global Assault" width="1200" height="400" />
		</h1>
		<p class="tagline">O FPS online clássico, reconstruído para o celular.</p>
		<p class="lead">
			A troca de tiros, os mapas e os modos que marcaram uma geração, com controles de toque, servidores próprios
			e partidas online com bots completando as vagas.
		</p>
		<div class="actions">
			<a class="btn btn-primary" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> Entrar no Discord
			</a>
			<a class="btn btn-ghost" href="#modos">Modos de jogo</a>
		</div>
	</div>
</section>

<section class="stats" aria-label="Em números">
	<dl class="wrap">
		{#each stats as s (s.label)}
			<div>
				<dt>{s.label}</dt>
				<dd>{s.value}</dd>
			</div>
		{/each}
	</dl>
</section>

<section class="section" aria-labelledby="about-title">
	<div class="wrap about">
		<div>
			<p class="eyebrow">O jogo</p>
			<h2 id="about-title">Fiel ao clássico. Feito para o toque.</h2>
			<p class="lead">
				Mantemos a sensação do original: o recuo das armas, o ritmo das partidas e as regras de cada modo. O que muda é
				o que o celular pede: controles, interface e uma rede nova, em que o servidor confere cada jogada.
			</p>
		</div>
		<ul class="features">
			{#each features as f (f)}
				<li><span class="check"><Icon name="check" size={16} /></span>{f}</li>
			{/each}
		</ul>
	</div>
</section>

<section id="modos" class="section modes-section" aria-labelledby="modes-title">
	<div class="wrap">
		<p class="eyebrow">Combate</p>
		<h2 id="modes-title">Modos de jogo</h2>
		<p class="lead">Seis modos jogados online, do mata-mata clássico às rodadas de vampiro.</p>
		<ol class="modes">
			{#each modes as m, i (m.name)}
				<li>
					<div class="mode-head">
						<h3>{m.name}</h3>
						<span class="n">{String(i + 1).padStart(2, '0')}</span>
					</div>
					<p>{m.text}</p>
					<ul class="tags" aria-label="Características">
						{#each m.tags as t (t)}<li>{t}</li>{/each}
					</ul>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section beta-section" aria-labelledby="beta-title">
	<div class="wrap">
		<div class="beta">
			<div>
				<p class="eyebrow">Beta fechado</p>
				<h2 id="beta-title">Quer jogar primeiro?</h2>
				<p>
					O beta fechado começa no Android com algumas centenas de jogadores convidados: conta, inventário e progresso
					ficam salvos. Os convites e as novidades saem primeiro no nosso Discord.
				</p>
			</div>
			<a class="btn btn-dark" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> Entrar no Discord
			</a>
		</div>
	</div>
</section>

<section class="game-footer" aria-label="Global Assault">
	<div class="wrap game-footer-inner">
		<img src="/global-assault/logotype.webp" alt="Global Assault" width="240" height="80" />
		<nav aria-label="Global Assault">
			<a href={discord} target="_blank" rel="noopener">Discord <Icon name="external" size={14} /></a>
			<a href="/global-assault/privacy">Política de Privacidade</a>
			<a href="/global-assault/terms">Termos de Uso</a>
		</nav>
	</div>
</section>

<style>
	.hero {
		position: relative;
		isolation: isolate;
		display: flex;
		align-items: flex-end;
		min-height: min(88vh, 50rem);
		padding-block: 7rem var(--space-7);
		overflow: hidden;
		background: var(--night);
		color: var(--bone);
	}

	.art {
		position: absolute;
		inset: 0;
		z-index: -2;
		width: 100%;
		height: 100%;
		max-width: none;
		object-fit: cover;
		object-position: 62% 25%;
	}

	/* The art is the same in both themes: the copy sits on a night scrim, so it reads on any crop. */
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(90deg, rgb(11 13 16 / 0.92) 0%, rgb(11 13 16 / 0.7) 45%, rgb(11 13 16 / 0.1) 75%),
			linear-gradient(0deg, var(--night) 0%, transparent 40%);
	}

	.pill {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		margin-bottom: var(--space-5);
		padding: var(--space-1) var(--space-3);
		border: 1px solid rgb(226 255 4 / 0.4);
		border-radius: 999px;
		background: rgb(226 255 4 / 0.08);
		color: var(--volt);
		font-family: var(--font-display);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--volt);
		box-shadow: 0 0 0 4px rgb(226 255 4 / 0.2);
	}

	h1 {
		margin: 0 0 var(--space-3);
		max-width: 34rem;
	}

	.logotype {
		display: block;
		width: 100%;
		height: auto;
	}

	.tagline {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 700;
		margin-bottom: var(--space-3);
	}

	.hero .lead {
		color: #c4c8ce;
		max-width: 34rem;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-6);
	}

	.btn-ghost {
		border-color: rgb(240 240 240 / 0.35);
		color: var(--bone);
	}

	.btn-ghost:hover {
		border-color: var(--bone);
	}

	.stats {
		background: var(--night);
		color: var(--bone);
		border-top: 1px solid #23272e;
		border-bottom: 1px solid var(--ui-border);
	}

	.stats dl {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		margin: 0;
	}

	.stats div {
		display: flex;
		flex-direction: column-reverse;
		gap: var(--space-1);
		padding: var(--space-6) var(--space-4);
		border-left: 1px solid #23272e;
	}

	.stats div:first-child {
		border-left: 0;
		padding-left: 0;
	}

	.stats dt {
		color: var(--steel);
		font-size: var(--text-xs);
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.stats dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: 700;
		line-height: 1;
		color: var(--volt);
	}

	.about {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: var(--space-7);
		align-items: center;
	}

	.features {
		display: grid;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.features li {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--ui-border);
		border-radius: var(--radius-md);
		background: var(--surface);
		font-weight: 500;
	}

	.check {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: var(--radius-sm);
		background: var(--volt);
		color: var(--night);
	}

	.modes-section {
		background: var(--ui-muted);
		border-block: 1px solid var(--ui-border);
	}

	.modes {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-4);
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
	}

	.modes > li {
		display: flex;
		flex-direction: column;
		padding: var(--space-6) var(--space-5);
		border: 1px solid var(--ui-border);
		border-radius: var(--radius-lg);
		background: var(--surface);
		transition: border-color 0.15s;
	}

	.modes > li:hover {
		border-color: var(--accent);
	}

	.mode-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-3);
	}

	.mode-head h3 {
		margin-bottom: var(--space-3);
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.n {
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--accent);
	}

	.modes p {
		flex: 1;
		color: var(--ui-muted-foreground);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.tags li {
		padding: 0.15rem var(--space-2);
		border-radius: var(--radius-sm);
		background: var(--ui-muted);
		color: var(--ui-foreground);
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.beta-section {
		padding-bottom: var(--space-7);
	}

	.beta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
		padding: clamp(1.75rem, 1rem + 3vw, 3.5rem);
		border-radius: var(--radius-lg);
		background: var(--volt);
		color: var(--night);
	}

	.beta .eyebrow {
		color: var(--night);
	}

	.beta h2 {
		margin-bottom: var(--space-3);
	}

	.beta p:not(.eyebrow) {
		max-width: 36rem;
		margin: 0;
	}

	.btn-dark {
		background: var(--night);
		color: var(--bone);
	}

	.btn-dark:hover {
		background: #1c2027;
	}

	.game-footer {
		border-top: 1px solid var(--ui-border);
	}

	.game-footer-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		padding-block: var(--space-6);
	}

	.game-footer img {
		width: 9rem;
		height: auto;
	}

	.game-footer nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-5);
	}

	.game-footer a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		color: var(--ui-foreground);
		font-size: var(--text-sm);
		text-decoration: none;
	}

	.game-footer a:hover {
		color: var(--accent);
	}

	@media (max-width: 960px) {
		.about {
			grid-template-columns: 1fr;
		}

		.modes {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.stats dl {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.stats div:nth-child(odd) {
			border-left: 0;
			padding-left: 0;
		}

		.stats div:nth-child(n + 3) {
			border-top: 1px solid #23272e;
		}

		.modes {
			grid-template-columns: 1fr;
		}

		.beta {
			flex-direction: column;
			align-items: flex-start;
		}

		.hero::after {
			background: linear-gradient(0deg, var(--night) 10%, rgb(11 13 16 / 0.75) 60%, rgb(11 13 16 / 0.35) 100%);
		}
	}
</style>
