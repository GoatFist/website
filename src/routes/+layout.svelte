<script lang="ts">
	import '@ui-sdk/core/web.css';
	import '../app.css';
	import { page } from '$app/state';
	import Logo from '#lib/Logo.svelte';
	import ThemeSwitch from '#lib/ThemeSwitch.svelte';
	import { site } from '#lib/site.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href="/brand/favicon.ico" sizes="48x48" />
	<link rel="icon" href="/brand/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0b0d10" />
	<meta property="og:image" content={site.url + '/brand/og-image.png'} />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href={site.url + page.url.pathname} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="pt_BR" />
</svelte:head>

<a class="skip" href="#main">Pular para o conteúdo</a>

<header class="top">
	<nav class="wrap" aria-label="Principal">
		<a class="brand" href="/" aria-label="GoatFist Interactive, início">
			<Logo parts="compact" />
		</a>
		<ul>
			<li>
				<a href="/global-assault" aria-current={page.url.pathname === '/global-assault' ? 'page' : undefined}
					>Global Assault</a
				>
			</li>
			<li class="wide"><a href="/#estudio">Estúdio</a></li>
		</ul>
	</nav>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="bottom">
	<div class="wrap">
		<div class="cols">
			<div>
				<p class="name"><Logo /></p>
				<p class="muted">Estúdio independente de jogos.</p>
			</div>
			<nav aria-label="Global Assault">
				<p class="head">Global Assault</p>
				<ul>
					<li><a href="/global-assault">O jogo</a></li>
					<li><a href="/global-assault/privacy">Política de Privacidade</a></li>
					<li><a href="/global-assault/terms">Termos de Uso</a></li>
				</ul>
			</nav>
			<div>
				<p class="head">Tema</p>
				<ThemeSwitch />
			</div>
		</div>
		<p class="muted small">© {year} GoatFist Interactive. Este site não usa cookies nem rastreadores.</p>
	</div>
</footer>

<style>
	.skip {
		position: absolute;
		left: -999px;
		top: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--surface);
		border-radius: var(--ui-radius);
		z-index: 10;
	}

	.skip:focus {
		left: 0.5rem;
	}

	.top {
		position: sticky;
		top: 0;
		z-index: 5;
		background: color-mix(in srgb, var(--ui-background) 85%, transparent);
		backdrop-filter: saturate(1.4) blur(10px);
		border-bottom: 1px solid var(--ui-border);
	}

	.top nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		height: 3.75rem;
	}

	.brand {
		display: inline-flex;
		font-size: 2.25rem;
		--logo-icon: var(--ember);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.top ul {
		display: flex;
		gap: clamp(0.75rem, 3vw, 1.75rem);
	}

	.top li {
		white-space: nowrap;
	}

	@media (max-width: 420px) {
		.brand {
			font-size: 1.75rem;
		}

		.top .wide {
			display: none;
		}
	}

	.top ul a {
		color: var(--ui-muted-foreground);
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
	}

	.top ul a:hover,
	.top ul a[aria-current='page'] {
		color: var(--ui-foreground);
	}

	main {
		min-height: 60vh;
	}

	.bottom {
		margin-top: 5rem;
		padding-block: 3rem 2rem;
		border-top: 1px solid var(--ui-border);
		background: var(--ui-muted);
		font-size: 0.95rem;
	}

	.cols {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.name {
		font-size: 3.5rem;
		margin-bottom: 0.75rem;
	}

	.head {
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.bottom li {
		margin-bottom: 0.35rem;
	}

	.bottom li a {
		color: var(--ui-foreground);
		text-decoration: none;
	}

	.bottom li a:hover {
		text-decoration: underline;
	}

	.muted {
		color: var(--ui-muted-foreground);
	}

	.small {
		font-size: 0.85rem;
		margin: 0;
	}
</style>
