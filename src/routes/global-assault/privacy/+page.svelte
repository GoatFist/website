<script lang="ts">
	import LegalPage from '#lib/LegalPage.svelte';
	import { site } from '#lib/site.ts';
</script>

<svelte:head>
	<title>Política de Privacidade | Global Assault</title>
	<meta
		name="description"
		content="Quais dados o Global Assault usa, para quê, por quanto tempo e como pedir acesso ou exclusão."
	/>
	<meta property="og:url" content="{site.url}/global-assault/privacy" />
</svelte:head>

<!-- Written from what the game stores (gam-server's migrations, api and services; the Android platform library) as of 2026-11-16.
     /global-assault/privacy-policy.html, the policy's first address, redirects here. -->
<LegalPage title="Política de Privacidade" updated="17 de novembro de 2026">
	<section>
		<p>
			Esta página explica quais dados o Global Assault usa, para que servem e o que você pode pedir para a gente. A
			ideia é simples: guardamos só o que o jogo precisa para funcionar.
		</p>
	</section>

	<section>
		<h2>1. Quem cuida dos seus dados</h2>
		<p>
			O Global Assault é feito pela GOATFIST Interactive, um estúdio independente mantido por uma pessoa física no
			Brasil. É ela a responsável pelos seus dados, o que a Lei Geral de Proteção de Dados (LGPD) chama de
			controlador.
		</p>
		<p>
			Para qualquer assunto de privacidade, escreva para
			<a href="mailto:privacy@goatfist.com">privacy@goatfist.com</a>.
		</p>
	</section>

	<section>
		<h2>2. O que guardamos</h2>
		<p><strong>Sua conta.</strong> Depende de como você entra no jogo:</p>
		<ul>
			<li>
				Com usuário e senha: guardamos o nome de usuário e a senha protegida por hash, nunca a senha em si. Também
				guardamos quando a conta foi criada e quando você entrou pela última vez.
			</li>
			<li>
				Como convidado: o jogo cria um código para o seu aparelho, combinando o identificador do Android com o do
				app e passando o resultado por um hash. Esse código fica salvo de forma protegida no celular. O identificador
				do aparelho em si nunca é enviado para nós.
			</li>
			<li>
				Com o Discord (para entrar ou vinculado depois, em Configurações › Conta): guardamos só o número que identifica a
				sua conta do Discord. Não guardamos seu e-mail, sua senha nem seus servidores do Discord.
			</li>
		</ul>
		<p><strong>O que você faz no jogo.</strong></p>
		<ul>
			<li>apelido, experiência, moedas do jogo, itens e equipamentos;</li>
			<li>estatísticas e histórico de partidas: modo, mapa, time, abates, mortes e pontos;</li>
			<li>lista de amigos e pedidos de amizade, clã e curtidas recebidas;</li>
			<li>replays das partidas, guardados por 14 dias;</li>
			<li>punições aplicadas à conta, com o motivo;</li>
			<li>quando você aceitou estes termos e esta política, e em qual versão.</li>
		</ul>
		<p><strong>Proteção contra trapaça.</strong> Para manter as partidas justas, o jogo confere se o app é o original e
			se está rodando sem ferramentas de trapaça. Para isso usamos:</p>
		<ul>
			<li>
				<strong>Integridade do aplicativo:</strong> a versão e a assinatura do app e a verificação de que os arquivos do jogo
				não foram alterados.
			</li>
			<li>
				<strong>Informações técnicas do processo do jogo:</strong> sinais de ferramentas de trapaça ou de depuração atuando
				sobre o jogo.
			</li>
			<li>
				<strong>Ambiente do aparelho:</strong> sinais de emulador, root ou app clonador, usados para formar partidas justas
				(quem joga em emulador joga com outros jogadores de emulador).
			</li>
			<li>
				<strong>Estatísticas e eventos da partida</strong> registrados pelo servidor, como ações recusadas por serem
				impossíveis (um tiro através da parede, um movimento impossível).
			</li>
		</ul>
		<p>Esses sinais ficam ligados à sua conta, não identificam você fora do jogo, perdem o peso com o tempo e são apagados em
			até 180 dias. A proteção olha somente dentro do processo do jogo: não lê a lista de apps instalados, seus arquivos,
			seus contatos nem a sua localização.</p>
		<p><strong>Beta fechado.</strong> Se você pedir acesso com o comando <code>/beta</code> no nosso Discord, guardamos o número
			da sua conta do Discord, o seu nome de usuário lá e o código de acesso gerado, para liberar o beta na sua conta.</p>
		<p>
			Não pedimos e-mail, nome verdadeiro, telefone, localização nem acesso aos seus contatos, fotos ou arquivos.
		</p>
	</section>

	<section>
		<h2>3. O que não guardamos</h2>
		<ul>
			<li>
				O chat passa pelo servidor só para chegar aos outros jogadores. As mensagens não são gravadas.
			</li>
			<li>
				O jogo não tem anúncios, ferramentas de análise ou de rastreamento, e não usa o ID de publicidade do
				aparelho.
			</li>
			<li>A única permissão que o app pede no Android é acesso à internet.</li>
		</ul>
	</section>

	<section>
		<h2>4. Dados da conexão</h2>
		<p>
			Para o jogo funcionar, o servidor precisa saber o endereço IP da sua conexão. Ele é usado enquanto você joga e
			para barrar quem tenta adivinhar senhas, mas não fica salvo na conta. Os registros técnicos dos servidores,
			usados para achar erros, são apagados sozinhos em até 14 dias.
		</p>
	</section>

	<section>
		<h2>5. Para que usamos</h2>
		<ul>
			<li>criar e manter a sua conta e o seu login;</li>
			<li>mostrar o seu perfil no nosso Discord, se você vincular a conta;</li>
			<li>fazer as partidas, o progresso, a loja e os amigos funcionarem;</li>
			<li>combater trapaça e abuso e aplicar as regras dos <a href="/global-assault/terms">Termos de Uso</a>;</li>
			<li>encontrar e corrigir erros;</li>
			<li>responder quando você fala com a gente.</li>
		</ul>
		<p>
			Pela LGPD, usamos esses dados porque são necessários para oferecer o jogo que você pediu, para proteger o jogo e
			os outros jogadores, que é um interesse legítimo nosso, e para cumprir a lei quando ela exigir.
		</p>
	</section>

	<section>
		<h2>6. Com quem os dados são compartilhados</h2>
		<p>Não vendemos nem alugamos seus dados. Eles passam apenas por quem nos ajuda a manter o jogo no ar:</p>
		<ul>
			<li>a empresa que hospeda o servidor onde o jogo e o banco de dados rodam;</li>
			<li>a Cloudflare, que protege e entrega a conexão com a nossa API.</li>
		</ul>
		<p>
			Se você vincular o Discord, o bot do nosso servidor no Discord pode mostrar, quando alguém pedir o seu perfil com
			/profile, o seu apelido, nível, estatísticas de partidas e clã. Ele só lê esses dados, nunca os altera.
		</p>
		<p>
			A Google Play distribui o app e o Discord hospeda a nossa comunidade. Cada um trata os seus dados conforme a
			própria política de privacidade. Também podemos entregar dados a autoridades quando uma lei ou uma ordem
			judicial exigir.
		</p>
	</section>

	<section>
		<h2>7. Onde os dados ficam</h2>
		<p>
			Os servidores e a Cloudflare podem processar dados fora do Brasil. Quando isso acontece, seguimos as regras da
			LGPD para transferência internacional.
		</p>
	</section>

	<section>
		<h2>8. Por quanto tempo</h2>
		<ul>
			<li>Os dados da conta e do jogo ficam enquanto a conta existir.</li>
			<li>Os logins expiram em 30 dias sem uso.</li>
			<li>Replays e registros técnicos são apagados em até 14 dias.</li>
			<li>Os sinais da proteção contra trapaça são apagados em até 180 dias.</li>
			<li>
				Quando você exclui a conta no jogo, os dados são apagados na hora; nas partidas de outros jogadores, o seu
				lugar fica como "Jogador removido". Um pedido por e-mail é atendido em até 30 dias. O registro de um banimento pode ser
				mantido por mais tempo, só para impedir que a mesma pessoa volte a trapacear.
			</li>
		</ul>
	</section>

	<section>
		<h2>9. Seus direitos</h2>
		<p>Pela LGPD (e, se você estiver na União Europeia ou no Reino Unido, pelo GDPR), você pode:</p>
		<ul>
			<li>confirmar se temos dados seus e ver quais são;</li>
			<li>corrigir o que estiver errado;</li>
			<li>apagar sua conta e seus dados;</li>
			<li>receber uma cópia dos seus dados;</li>
			<li>saber com quem eles foram compartilhados.</li>
		</ul>
		<p>
			No próprio jogo, em Configurações › Conta › Privacidade e dados, você baixa uma cópia de tudo o que guardamos e
			exclui a sua conta na hora. Para o resto, basta escrever para <a href="mailto:privacy@goatfist.com">privacy@goatfist.com</a> com o seu apelido e, se
			tiver, o nome de usuário. Podemos pedir alguma informação a mais para ter certeza de que a conta é sua.
			Respondemos em até 15 dias. Se não ficar satisfeito, você também pode reclamar com a Autoridade Nacional de
			Proteção de Dados (ANPD) ou, fora do Brasil, com a autoridade de proteção de dados do seu país.
		</p>
	</section>

	<section>
		<h2>10. Segurança</h2>
		<p>
			As senhas e os tokens de login são guardados só como hash, a conexão com a nossa API é criptografada e o acesso
			aos servidores é restrito à equipe. Nenhum sistema é cem por cento seguro, mas, se algo grave acontecer com os
			seus dados, vamos avisar você e a ANPD como a lei manda.
		</p>
	</section>

	<section>
		<h2>11. Menores de idade</h2>
		<p>
			O Global Assault é para maiores de 18 anos. Não coletamos de propósito dados de menores. Se descobrirmos uma
			conta de alguém com menos de 18 anos, ela será encerrada e os dados apagados. Se você for responsável por um
			menor que criou uma conta, escreva para a gente.
		</p>
	</section>

	<section>
		<h2>12. Mudanças nesta política</h2>
		<p>
			Se o jogo passar a usar dados de outro jeito, por exemplo com login pelo Google ou compras, atualizamos esta
			página antes. A data no topo mostra a versão em vigor, e mudanças importantes são avisadas no jogo ou no
			Discord.
		</p>
	</section>
</LegalPage>
