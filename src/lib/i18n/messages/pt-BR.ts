/**
 * The site's words in Portuguese, the source every other language is translated from (each language file has this shape: a missing or
 * extra key fails `npm run check`). The legal pages' bodies are components of their own (src/lib/legal/<page>/<locale>.svelte).
 */
export const ptBR = {
	common: {
		skip: 'Pular para o conteúdo',
		home: 'GOATFIST Interactive, início',
		mainNav: 'Principal',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		menu: 'Menu',
		theme: 'Tema',
		themes: { system: 'Sistema', light: 'Claro', dark: 'Escuro' },
		language: 'Idioma',
		newTab: '(abre em outra aba)'
	},
	nav: { game: 'Global Assault', studio: 'Estúdio' },
	footer: {
		about: 'Estúdio independente de jogos. Agora fazendo o Global Assault.',
		studio: 'Estúdio',
		home: 'Início',
		howWeWork: 'Como trabalhamos',
		theGame: 'O jogo',
		privacy: 'Privacidade',
		terms: 'Termos de Uso',
		note: 'O Global Assault é um projeto da comunidade, sem fins lucrativos, e uma homenagem viva a um FPS clássico que saiu do ar. Mantemos o jogo de pé para todo mundo jogar, de graça. Não temos nenhum vínculo com as empresas que criaram ou publicaram o jogo original.',
		noTracking: 'Sem cookies, anúncios ou rastreadores.'
	},
	home: {
		title: 'GOATFIST Interactive — estúdio independente de jogos',
		description:
			'A GOATFIST Interactive é um estúdio independente brasileiro. Estamos fazendo o Global Assault, um FPS online para jogar no celular.',
		heading: 'Jogos online para jogar com a galera.',
		leadBefore: 'A GOATFIST Interactive é um estúdio pequeno e independente. Nosso primeiro jogo é o',
		leadAfter: ', um FPS online que estamos levando para o celular.',
		seeGame: 'Conheça Global Assault',
		aboutStudio: 'Sobre o estúdio',
		gameFacts: 'FPS online · Celular · Beta fechado em breve',
		gameText: 'Partidas rápidas em equipe, com os mapas e os modos de um FPS clássico. O beta fechado abre em breve no Android.',
		viewGame: 'Ver o jogo',
		howWeWork: 'Como trabalhamos',
		values: [
			{
				title: 'Servidor próprio',
				text: 'Os servidores do jogo são nossos. Assim a gente cuida da qualidade das partidas e corrige bug e trapaça sem esperar ninguém.'
			},
			{
				title: 'Celular primeiro',
				text: 'Começamos pelo celular, com controles e telas pensados para jogar com os dedos. Uma versão para PC pode vir depois.'
			},
			{
				title: 'Sem anúncio',
				text: 'Nenhum anúncio no meio da partida e nenhuma ferramenta de rastreamento. O jogo guarda só o que precisa para funcionar.'
			}
		]
	},
	game: {
		title: 'Global Assault — o FPS clássico, agora no celular',
		description:
			'Global Assault é o FPS online clássico, agora no celular. Seis modos, servidores próprios e beta fechado no Android em breve.',
		status: 'Beta fechado em breve · Android',
		tagline: 'O FPS clássico, agora no celular.',
		heroLead:
			'Os mapas, as armas e os modos que muita gente jogou nos anos 2000, de volta com controles de toque e servidores novos.',
		joinDiscord: 'Entrar no Discord',
		modesLink: 'Modos de jogo',
		inNumbers: 'Em números',
		stats: { modes: 'Modos de jogo', maps: 'Mapas no catálogo', weapons: 'Armas no catálogo', platform: 'Plataforma do beta' },
		aboutLabel: 'O jogo',
		aboutTitle: 'O mesmo jogo, na palma da mão',
		aboutLead1:
			'O jeito como as armas atiram e o ritmo das partidas continuam iguais. Mudamos o que precisava mudar para jogar no celular, como os controles e as telas.',
		aboutLead2:
			'Por trás, o servidor confere cada tiro, o que deixa a trapaça bem mais difícil. Começamos pelo celular, mas nada impede uma versão para PC mais para frente.',
		features: [
			'Controles de toque que você pode ajustar',
			'Partida rápida ou sala com os amigos',
			'Bots entram quando falta gente',
			'O servidor confere cada tiro',
			'Loja, inventário e visuais',
			'Lista de amigos e chat',
			'Atualizações sem baixar o app de novo',
			'Nenhum anúncio'
		],
		modesLabel: 'Modos',
		playable: (count: string) => `${count} jogáveis`,
		modesTitle: 'Modos de jogo',
		modesLead: 'São seis modos, todos já testados em partidas online.',
		featuredLabel: 'Modo em destaque',
		modes: [
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
		],
		betaLabel: 'Beta fechado',
		betaTitle: 'Quer jogar antes de todo mundo?',
		betaText:
			'O beta fechado vai começar no Android, com algumas centenas de jogadores convidados. Sua conta e seu progresso ficam salvos. Os convites saem pelo Discord, então entra lá para não perder.'
	},
	legal: {
		kicker: 'Global Assault',
		updated: 'Última atualização:',
		translation: 'Esta é uma tradução. Se houver diferença, vale a versão em português:',
		translationLink: 'ler em português',
		privacy: {
			title: 'Política de Privacidade',
			description: 'Quais dados o Global Assault usa, para quê, por quanto tempo e como pedir acesso ou exclusão.',
			updated: '17 de novembro de 2026'
		},
		terms: {
			title: 'Termos de Uso',
			description: 'As regras para jogar Global Assault: idade mínima, conta, conduta, itens do jogo e o beta fechado.',
			updated: '16 de novembro de 2026'
		}
	},
	error: {
		notFoundTitle: 'Página não encontrada',
		errorTitle: 'Erro',
		notFound: 'Página não encontrada.',
		failed: 'Algo deu errado.',
		notFoundLead: 'O endereço não existe ou mudou de lugar.',
		failedLead: 'Tente de novo em instantes.',
		back: 'Voltar ao início'
	}
};

/** The shape every language file has. */
export type Messages = typeof ptBR;
