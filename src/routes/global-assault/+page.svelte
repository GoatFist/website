<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import { discord, site } from '#lib/site.ts';

	const description =
		'Global Assault é o FPS online clássico, agora no celular. Seis modos, servidores próprios e beta fechado no Android em breve.';

	// Facts from the game's tables (gam-server content/tables) and the beta plan (docs/BETA_ROADMAP.md).
	const stats = [
		{ value: '6', label: 'Modos de jogo' },
		{ value: '29', label: 'Mapas no catálogo' },
		{ value: '480', label: 'Armas no catálogo' },
		{ value: 'Android', label: 'Plataforma do beta' }
	];

	const features = [
		'Controles de toque que você pode ajustar',
		'Partida rápida ou sala com os amigos',
		'Bots entram quando falta gente',
		'O servidor confere cada tiro',
		'Loja, inventário e visuais',
		'Lista de amigos e chat',
		'Atualizações sem baixar o app de novo',
		'Nenhum anúncio'
	];

	const modes = [
		{
			name: 'Mata-mata em equipe',
			text: 'Dois times, renascimento liberado. Ganha quem bater a meta de abates primeiro ou estiver na frente quando o tempo acabar.',
			tags: ['Equipe', 'Renascimento']
		},
		{
			name: 'Missão de bomba',
			text: 'Um time planta a bomba e o outro tenta impedir ou desarmar. Morreu, só volta na próxima rodada.',
			tags: ['Equipe', 'Rodadas', 'Plantar/desarmar']
		},
		{
			name: 'Sala de sniper',
			text: 'Mata-mata em equipe só com rifle de precisão. Quem erra o primeiro tiro costuma não ter o segundo.',
			tags: ['Equipe', 'Regras']
		},
		{
			name: 'Caçador-rei',
			text: 'Quem faz uma sequência de abates vira o Caçador-rei e ganha uma minigun. O time adversário precisa derrubá-lo.',
			tags: ['Equipe', 'Diversão']
		},
		{
			name: 'Corrida armamentista',
			text: 'A cada tantos abates você ganha a próxima arma da lista e não pode trocar. Vence o time que chegar ao fim primeiro.',
			tags: ['Equipe', 'Progressão']
		},
		{
			name: 'Vampiro',
			text: 'Caçadores contra vampiros. Quem morre vira vampiro. Um caçador com a fúria cheia vira licano, e a estaca tira um vampiro da rodada.',
			tags: ['Rodadas', 'Infecção']
		}
	];

	// Bomb mission is shown large; the other modes follow as rows.
	const featured = modes[1];
	const others = modes.filter((m) => m !== featured);
</script>

<svelte:head>
	<title>Global Assault — o FPS clássico, agora no celular</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Global Assault" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{site.url}/global-assault" />
	<link
		rel="preload"
		as="image"
		href="/global-assault/key-art-1920.webp"
		imagesrcset="/global-assault/key-art-960.webp 960w, /global-assault/key-art-1920.webp 1920w"
		imagesizes="100vw"
	/>
</svelte:head>

<section class="hero">
	<img
		class="art"
		src="/global-assault/key-art-1920.webp"
		srcset="/global-assault/key-art-960.webp 960w, /global-assault/key-art-1920.webp 1920w"
		sizes="100vw"
		alt=""
		width="1916"
		height="820"
	/>
	<div class="wrap hero-inner">
		<p class="label status">Beta fechado em breve · Android</p>
		<h1>
			<img class="logotype" src="/global-assault/logotype-gold.webp" alt="Global Assault" width="1200" height="315" />
		</h1>
		<p class="tagline">O FPS clássico, agora no celular.</p>
		<p class="hero-lead">
			Os mapas, as armas e os modos que muita gente jogou nos anos 2000, de volta com controles de toque e servidores
			novos.
		</p>
		<div class="actions">
			<a class="btn" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> Entrar no Discord
			</a>
			<a class="link-arrow on-art" href="#modos">Modos de jogo <Icon name="arrow" size={18} /></a>
		</div>
	</div>
	<dl class="wrap readouts" aria-label="Em números">
		{#each stats as s (s.label)}
			<div>
				<dt class="label">{s.label}</dt>
				<dd>{s.value}</dd>
			</div>
		{/each}
	</dl>
</section>

<section class="section" aria-labelledby="about-title">
	<div class="wrap about">
		<div>
			<p class="label">O jogo</p>
			<h2 id="about-title">O mesmo jogo, na palma da mão</h2>
			<p class="lead">
				O jeito como as armas atiram e o ritmo das partidas continuam iguais. Mudamos o que precisava mudar para jogar
				no celular, como os controles e as telas.
			</p>
			<p class="lead">
				Por trás, o servidor confere cada tiro, o que deixa a trapaça bem mais difícil. Começamos pelo celular, mas
				nada impede uma versão para PC mais para frente.
			</p>
		</div>
		<ul class="features">
			{#each features as f (f)}
				<li>{f}</li>
			{/each}
		</ul>
	</div>
</section>

<section id="modos" class="section modes-section" aria-labelledby="modes-title">
	<div class="wrap">
		<div class="panel-head">
			<p class="label">Modos</p>
			<p class="label">{String(modes.length).padStart(2, '0')} jogáveis</p>
		</div>
		<h2 id="modes-title">Modos de jogo</h2>
		<p class="lead">São seis modos, todos já testados em partidas online.</p>

		<article class="featured">
			<p class="label">Modo em destaque</p>
			<h3>{featured.name}</h3>
			<p class="featured-text">{featured.text}</p>
			<p class="tags">{featured.tags.join(' / ')}</p>
		</article>

		<ul class="modes">
			{#each others as m (m.name)}
				<li>
					<h3>{m.name}</h3>
					<p>{m.text}</p>
					<p class="tags">{m.tags.join(' / ')}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section" aria-labelledby="beta-title">
	<div class="wrap">
		<div class="beta">
			<div>
				<p class="label">Beta fechado</p>
				<h2 id="beta-title">Quer jogar antes de todo mundo?</h2>
				<p class="beta-text">
					O beta fechado vai começar no Android, com algumas centenas de jogadores convidados. Sua conta e seu
					progresso ficam salvos. Os convites saem pelo Discord, então entra lá para não perder.
				</p>
			</div>
			<a class="btn btn-on-action" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> Entrar no Discord
			</a>
		</div>
	</div>
</section>

<style>
	/* Game voice (DESIGN.md): the key art leads, mono readouts, panels, volt only on actions. */
	.hero {
		position: relative;
		isolation: isolate;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: min(92vh, 56rem);
		padding-top: var(--space-10);
		overflow: hidden;
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
		object-position: 62% 25%;
	}

	/* Scrims keep the copy readable over any crop of the art; they are not decoration. */
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				90deg,
				color-mix(in srgb, var(--night) 92%, transparent) 0%,
				color-mix(in srgb, var(--night) 55%, transparent) 50%,
				transparent 78%
			),
			linear-gradient(0deg, var(--night) 0%, transparent 35%);
	}

	.hero .label {
		color: var(--steel);
	}

	.status {
		margin-bottom: var(--space-5);
	}

	h1 {
		max-width: 32rem;
		margin: 0 0 var(--space-4);
	}

	.logotype {
		display: block;
		width: 100%;
		height: auto;
	}

	.tagline {
		margin-bottom: var(--space-3);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 500;
	}

	.hero-lead {
		max-width: 32rem;
		color: color-mix(in srgb, var(--bone) 80%, transparent);
		font-size: var(--text-lg);
		line-height: 1.55;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3) var(--space-6);
		margin-top: var(--space-6);
	}

	.on-art {
		color: var(--bone);
		text-decoration-color: color-mix(in srgb, var(--bone) 40%, transparent);
	}

	.readouts {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		margin: var(--space-9) auto 0;
	}

	.readouts div {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-5) var(--space-5) var(--space-6) 0;
		border-top: 1px solid var(--night-rule);
	}

	.readouts div + div {
		padding-left: var(--space-5);
		border-left: 1px solid var(--night-rule);
	}

	.readouts dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: 500;
		line-height: 1;
	}

	.about {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
		gap: var(--space-9);
		align-items: start;
	}

	.about .label {
		margin-bottom: var(--space-5);
	}

	.features {
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--rule);
	}

	.features li {
		padding: var(--space-4) 0;
		border-bottom: 1px solid var(--rule);
		font-weight: 500;
	}

	.modes-section {
		background: var(--surface-1);
	}

	.panel-head {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
		margin-bottom: var(--space-6);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid var(--rule);
	}

	.featured {
		display: grid;
		gap: var(--space-4);
		margin-top: var(--space-8);
		padding: var(--space-7) var(--space-6);
		background: var(--surface-2);
	}

	.featured h3 {
		margin: 0;
		font-size: var(--text-2xl);
		font-weight: 500;
	}

	.featured-text {
		max-width: var(--measure);
		margin: 0;
		font-size: var(--text-lg);
		line-height: 1.55;
	}

	.modes {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0 var(--space-7);
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
	}

	.modes li {
		padding: var(--space-6) 0;
		border-bottom: 1px solid var(--rule);
	}

	.modes h3 {
		margin-bottom: var(--space-3);
	}

	.modes p:not(.tags) {
		color: var(--text-muted);
	}

	.tags {
		margin: 0;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.beta {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: var(--space-7);
		padding: clamp(var(--space-6), 4vw, var(--space-9));
		background: var(--action);
		color: var(--action-text);
	}

	.beta .label {
		margin-bottom: var(--space-5);
		color: var(--action-text);
	}

	.beta h2 {
		margin-bottom: var(--space-4);
	}

	.beta-text {
		max-width: var(--measure);
		margin: 0;
	}

	/* The beta panel is volt itself, so its action inverts. */
	.btn-on-action {
		border-color: var(--night);
		background: var(--night);
		color: var(--bone);
	}

	.btn-on-action:hover {
		background: var(--night-2);
	}

	@media (max-width: 960px) {
		.about {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.modes {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 720px) {
		.hero::after {
			background: linear-gradient(
				0deg,
				var(--night) 20%,
				color-mix(in srgb, var(--night) 75%, transparent) 65%,
				color-mix(in srgb, var(--night) 35%, transparent) 100%
			);
		}

		.readouts {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			margin-top: var(--space-8);
		}

		.readouts div:nth-child(3) {
			padding-left: 0;
			border-left: 0;
		}

		.beta {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
