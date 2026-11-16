<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Página não encontrada' : 'Erro'} — GOATFIST Interactive</title>
</svelte:head>

<section class="wrap error">
	<h1>{page.status === 404 ? 'Página não encontrada.' : 'Algo deu errado.'}</h1>
	<p class="lead">
		{page.status === 404 ? 'O endereço não existe ou mudou de lugar.' : 'Tente de novo em instantes.'}
	</p>
	<a class="btn" href="/">Voltar ao início</a>
</section>

<style>
	.error {
		padding-block: var(--section);
	}

	h1 {
		font-size: var(--text-2xl);
	}

	.lead {
		margin-bottom: var(--space-7);
	}
</style>
