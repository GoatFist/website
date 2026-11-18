<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import { i18n } from '#lib/i18n/index.ts';
	import { discord, site } from '#lib/site.ts';

	const t = $derived(i18n());
	const m = $derived(t.m.game);
	// Facts from the game's tables (gam-server content/tables) and the beta plan (docs/BETA_ROADMAP.md).
	const stats = $derived([
		{ value: '6', label: m.stats.modes },
		{ value: '29', label: m.stats.maps },
		{ value: '480', label: m.stats.weapons },
		{ value: 'Android', label: m.stats.platform }
	]);
	// Bomb mission is shown large; the other modes follow as rows.
	const featured = $derived(m.modes[1]!);
	const others = $derived(m.modes.filter((mode) => mode !== featured));
</script>

<svelte:head>
	<title>{m.title}</title>
	<meta name="description" content={m.description} />
	<meta property="og:title" content="Global Assault" />
	<meta property="og:description" content={m.description} />
	<meta property="og:url" content={site.url + t.href('/global-assault')} />
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
		<p class="label status">{m.status}</p>
		<h1>
			<img class="logotype" src="/global-assault/logotype-gold.webp" alt="Global Assault" width="1200" height="315" />
		</h1>
		<p class="tagline">{m.tagline}</p>
		<p class="hero-lead">{m.heroLead}</p>
		<div class="actions">
			<a class="btn" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> {m.joinDiscord}
			</a>
			<a class="link-arrow on-art" href="#modos">{m.modesLink} <Icon name="arrow" size={18} /></a>
		</div>
	</div>
	<dl class="wrap readouts" aria-label={m.inNumbers}>
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
			<p class="label">{m.aboutLabel}</p>
			<h2 id="about-title">{m.aboutTitle}</h2>
			<p class="lead">{m.aboutLead1}</p>
			<p class="lead">{m.aboutLead2}</p>
		</div>
		<ul class="features">
			{#each m.features as f (f)}
				<li>{f}</li>
			{/each}
		</ul>
	</div>
</section>

<section id="modos" class="section modes-section" aria-labelledby="modes-title">
	<div class="wrap">
		<div class="panel-head">
			<p class="label">{m.modesLabel}</p>
			<p class="label">{m.playable(String(m.modes.length).padStart(2, '0'))}</p>
		</div>
		<h2 id="modes-title">{m.modesTitle}</h2>
		<p class="lead">{m.modesLead}</p>

		<article class="featured">
			<p class="label">{m.featuredLabel}</p>
			<h3>{featured.name}</h3>
			<p class="featured-text">{featured.text}</p>
			<p class="tags">{featured.tags.join(' / ')}</p>
		</article>

		<ul class="modes">
			{#each others as mode (mode.name)}
				<li>
					<h3>{mode.name}</h3>
					<p>{mode.text}</p>
					<p class="tags">{mode.tags.join(' / ')}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section" aria-labelledby="beta-title">
	<div class="wrap">
		<div class="beta">
			<div>
				<p class="label">{m.betaLabel}</p>
				<h2 id="beta-title">{m.betaTitle}</h2>
				<p class="beta-text">{m.betaText}</p>
			</div>
			<a class="btn btn-on-action" href={discord} target="_blank" rel="noopener">
				<Icon name="chat" size={18} /> {m.joinDiscord}
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
