<script lang="ts">
	import LegalPage from '#lib/LegalPage.svelte';
	import { site } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Termos de Uso (rascunho) | Global Assault</title>
	<meta name="description" content="Termos de Uso do jogo Global Assault: rascunho, ainda não publicado." />
	<meta name="robots" content="noindex" />
	<meta property="og:url" content="{site.url}/global-assault/terms" />
</svelte:head>

<LegalPage title="Termos de Uso" draft>
	<section>
		<p>
			Os Termos de Uso do Global Assault ainda estão sendo redigidos e serão publicados nesta página antes da
			abertura do beta fechado. Até lá, nenhum texto desta página deve ser lido como condição de uso do jogo.
		</p>
		<p>A versão final deverá tratar, entre outros pontos:</p>
		<ul>
			<li>quem pode jogar e como a conta é criada e encerrada;</li>
			<li>regras de conduta, trapaças e as medidas aplicadas a quem as viola;</li>
			<li>itens virtuais, progresso e o que acontece com eles se o serviço mudar ou terminar;</li>
			<li>disponibilidade do serviço online, atualizações e manutenção;</li>
			<li>propriedade intelectual do jogo e do conteúdo criado por jogadores;</li>
			<li>limitações de responsabilidade, lei aplicável e foro;</li>
			<li>como os termos são alterados e como os jogadores são avisados.</li>
		</ul>
		<p>
			O tratamento de dados pessoais é descrito na <a href="/global-assault/privacy">Política de Privacidade</a>.
		</p>
	</section>
</LegalPage>
