import type { Messages } from './pt-BR.ts';

export const es: Messages = {
	common: {
		skip: 'Saltar al contenido',
		home: 'GOATFIST Interactive, inicio',
		mainNav: 'Principal',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		menu: 'Menú',
		theme: 'Tema',
		themes: { system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
		language: 'Idioma',
		newTab: '(se abre en otra pestaña)'
	},
	nav: { game: 'Global Assault', studio: 'Estudio' },
	footer: {
		about: 'Estudio independiente de videojuegos. Ahora haciendo Global Assault.',
		studio: 'Estudio',
		home: 'Inicio',
		howWeWork: 'Cómo trabajamos',
		theGame: 'El juego',
		privacy: 'Privacidad',
		terms: 'Términos de uso',
		note: 'Global Assault es un proyecto de la comunidad, sin fines de lucro, y un homenaje vivo a un FPS clásico que dejó de funcionar. Mantenemos el juego en marcha para que todos puedan jugar gratis. No tenemos ningún vínculo con las empresas que crearon o publicaron el juego original.',
		noTracking: 'Sin cookies, anuncios ni rastreadores.'
	},
	home: {
		title: 'GOATFIST Interactive — estudio independiente de videojuegos',
		description:
			'GOATFIST Interactive es un estudio independiente de Brasil. Estamos haciendo Global Assault, un FPS en línea para jugar en el celular.',
		heading: 'Juegos en línea para jugar con amigos.',
		leadBefore: 'GOATFIST Interactive es un estudio pequeño e independiente. Nuestro primer juego es',
		leadAfter: ', un FPS en línea que estamos llevando al celular.',
		seeGame: 'Conoce Global Assault',
		aboutStudio: 'Sobre el estudio',
		gameFacts: 'FPS en línea · Celular · Beta cerrada pronto',
		gameText: 'Partidas rápidas en equipo, con los mapas y los modos de un FPS clásico. La beta cerrada abre pronto en Android.',
		viewGame: 'Ver el juego',
		howWeWork: 'Cómo trabajamos',
		values: [
			{
				title: 'Servidores propios',
				text: 'Los servidores del juego son nuestros. Así cuidamos la calidad de las partidas y corregimos errores y trampas sin esperar a nadie.'
			},
			{
				title: 'Primero el celular',
				text: 'Empezamos por el celular, con controles y pantallas pensados para jugar con los dedos. Una versión para PC puede llegar después.'
			},
			{
				title: 'Sin anuncios',
				text: 'Ningún anuncio en medio de la partida y ninguna herramienta de rastreo. El juego guarda solo lo que necesita para funcionar.'
			}
		]
	},
	game: {
		title: 'Global Assault — el FPS clásico, ahora en el celular',
		description:
			'Global Assault es el FPS en línea clásico, ahora en el celular. Seis modos, servidores propios y beta cerrada en Android pronto.',
		status: 'Beta cerrada pronto · Android',
		tagline: 'El FPS clásico, ahora en el celular.',
		heroLead:
			'Los mapas, las armas y los modos que mucha gente jugó en los años 2000, de vuelta con controles táctiles y servidores nuevos.',
		joinDiscord: 'Entrar al Discord',
		modesLink: 'Modos de juego',
		inNumbers: 'En números',
		stats: { modes: 'Modos de juego', maps: 'Mapas en el catálogo', weapons: 'Armas en el catálogo', platform: 'Plataforma de la beta' },
		aboutLabel: 'El juego',
		aboutTitle: 'El mismo juego, en la palma de tu mano',
		aboutLead1:
			'La forma en que disparan las armas y el ritmo de las partidas siguen iguales. Cambiamos lo que había que cambiar para jugar en el celular, como los controles y las pantallas.',
		aboutLead2:
			'Por detrás, el servidor revisa cada disparo, lo que hace que hacer trampa sea mucho más difícil. Empezamos por el celular, pero nada impide una versión para PC más adelante.',
		features: [
			'Controles táctiles que puedes ajustar',
			'Partida rápida o sala con amigos',
			'Entran bots cuando falta gente',
			'El servidor revisa cada disparo',
			'Tienda, inventario y aspectos',
			'Lista de amigos y chat',
			'Actualizaciones sin volver a descargar la app',
			'Ningún anuncio'
		],
		modesLabel: 'Modos',
		playable: (count: string) => `${count} jugables`,
		modesTitle: 'Modos de juego',
		modesLead: 'Son seis modos, todos ya probados en partidas en línea.',
		featuredLabel: 'Modo destacado',
		modes: [
			{
				name: 'Combate a muerte por equipos',
				text: 'Dos equipos, con reaparición. Gana el que llegue primero a la meta de bajas o vaya adelante cuando se acabe el tiempo.',
				tags: ['Equipo', 'Reaparición']
			},
			{
				name: 'Misión de bomba',
				text: 'Un equipo planta la bomba y el otro intenta impedirlo o desactivarla. Si mueres, vuelves en la siguiente ronda.',
				tags: ['Equipo', 'Rondas', 'Plantar/desactivar']
			},
			{
				name: 'Sala de francotiradores',
				text: 'Combate a muerte por equipos solo con rifles de francotirador. Quien falla el primer disparo casi nunca tiene un segundo.',
				tags: ['Equipo', 'Reglas']
			},
			{
				name: 'Cazador rey',
				text: 'Quien logra una racha de bajas se convierte en el Cazador rey y recibe una minigun. El equipo rival tiene que derribarlo.',
				tags: ['Equipo', 'Diversión']
			},
			{
				name: 'Carrera armamentista',
				text: 'Cada cierto número de bajas recibes la siguiente arma de la lista y no puedes cambiarla. Gana el equipo que llegue primero al final.',
				tags: ['Equipo', 'Progresión']
			},
			{
				name: 'Vampiro',
				text: 'Cazadores contra vampiros. Quien muere se convierte en vampiro. Un cazador con la furia llena se convierte en Licano, y la estaca saca a un vampiro de la ronda.',
				tags: ['Rondas', 'Infección']
			}
		],
		betaLabel: 'Beta cerrada',
		betaTitle: '¿Quieres jugar antes que nadie?',
		betaText:
			'La beta cerrada empezará en Android, con unos cientos de jugadores invitados. Tu cuenta y tu progreso quedan guardados. Las invitaciones salen por el Discord, así que entra para no perderte la tuya.'
	},
	legal: {
		kicker: 'Global Assault',
		updated: 'Última actualización:',
		translation: 'Esta es una traducción. Si hay alguna diferencia, vale la versión en portugués:',
		translationLink: 'leer en portugués',
		privacy: {
			title: 'Política de privacidad',
			description: 'Qué datos usa Global Assault, para qué, por cuánto tiempo y cómo pedir acceso a ellos o su eliminación.',
			updated: '17 de noviembre de 2026'
		},
		terms: {
			title: 'Términos de uso',
			description: 'Las reglas para jugar Global Assault: edad mínima, cuenta, conducta, objetos del juego y la beta cerrada.',
			updated: '16 de noviembre de 2026'
		}
	},
	error: {
		notFoundTitle: 'Página no encontrada',
		errorTitle: 'Error',
		notFound: 'Página no encontrada.',
		failed: 'Algo salió mal.',
		notFoundLead: 'La dirección no existe o cambió de lugar.',
		failedLead: 'Inténtalo de nuevo en unos momentos.',
		back: 'Volver al inicio'
	}
};
