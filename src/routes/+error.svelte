<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Página não encontrada' : 'Erro'} — GoatFist Interactive</title>
</svelte:head>

<section class="wrap error">
	<p class="eyebrow">{page.status}</p>
	<h1>{page.status === 404 ? 'Página não encontrada.' : 'Algo deu errado.'}</h1>
	<p class="lead">
		{page.status === 404 ? 'O endereço não existe ou mudou de lugar.' : 'Tente de novo em instantes.'}
	</p>
	<a class="btn btn-primary" href="/">Voltar ao início</a>
</section>

<style>
	.error {
		padding-block: clamp(4rem, 12vw, 8rem);
	}

	h1 {
		font-size: clamp(2rem, 6vw, 3.2rem);
	}

	.lead {
		margin-bottom: 2rem;
	}
</style>
