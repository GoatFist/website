import type { Messages } from './pt-BR.ts';

export const en: Messages = {
	common: {
		skip: 'Skip to content',
		home: 'GOATFIST Interactive, home',
		mainNav: 'Main',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		menu: 'Menu',
		theme: 'Theme',
		themes: { system: 'System', light: 'Light', dark: 'Dark' },
		language: 'Language',
		newTab: '(opens in a new tab)'
	},
	nav: { game: 'Global Assault', studio: 'Studio' },
	footer: {
		about: 'An independent game studio. Now making Global Assault.',
		studio: 'Studio',
		home: 'Home',
		howWeWork: 'How we work',
		theGame: 'The game',
		privacy: 'Privacy',
		terms: 'Terms of Use',
		note: 'Global Assault is a non-profit community project and a living tribute to a classic FPS that went offline. We keep the game running for everyone to play, for free. We have no ties to the companies that made or published the original game.',
		noTracking: 'No cookies, ads or trackers.'
	},
	home: {
		title: 'GOATFIST Interactive — independent game studio',
		description:
			'GOATFIST Interactive is an independent studio from Brazil. We are making Global Assault, an online FPS to play on your phone.',
		heading: 'Online games to play with your friends.',
		leadBefore: 'GOATFIST Interactive is a small, independent studio. Our first game is',
		leadAfter: ', an online FPS we are bringing to phones.',
		seeGame: 'Meet Global Assault',
		aboutStudio: 'About the studio',
		gameFacts: 'Online FPS · Mobile · Closed beta soon',
		gameText: 'Quick team matches, with the maps and modes of a classic FPS. The closed beta opens soon on Android.',
		viewGame: 'See the game',
		howWeWork: 'How we work',
		values: [
			{
				title: 'Our own servers',
				text: 'The game runs on our own servers. That way we look after the quality of the matches and fix bugs and cheating without waiting on anyone.'
			},
			{
				title: 'Phone first',
				text: 'We start on phones, with controls and screens made for playing with your fingers. A PC version may come later.'
			},
			{
				title: 'No ads',
				text: 'No ads in the middle of a match and no tracking tools. The game keeps only what it needs to work.'
			}
		]
	},
	game: {
		title: 'Global Assault — the classic FPS, now on your phone',
		description:
			'Global Assault is the classic online FPS, now on your phone. Six modes, our own servers and a closed beta on Android soon.',
		status: 'Closed beta soon · Android',
		tagline: 'The classic FPS, now on your phone.',
		heroLead: 'The maps, weapons and modes many people played in the 2000s, back with touch controls and new servers.',
		joinDiscord: 'Join the Discord',
		modesLink: 'Game modes',
		inNumbers: 'In numbers',
		stats: { modes: 'Game modes', maps: 'Maps in the catalogue', weapons: 'Weapons in the catalogue', platform: 'Beta platform' },
		aboutLabel: 'The game',
		aboutTitle: 'The same game, in the palm of your hand',
		aboutLead1:
			'How the weapons fire and the pace of the matches stay the same. We changed what had to change to play on a phone, like the controls and the screens.',
		aboutLead2:
			'Behind it, the server checks every shot, which makes cheating much harder. We start on phones, but nothing stops a PC version later on.',
		features: [
			'Touch controls you can adjust',
			'Quick match or a room with friends',
			'Bots join when players are missing',
			'The server checks every shot',
			'Shop, inventory and cosmetics',
			'Friends list and chat',
			'Updates without downloading the app again',
			'No ads'
		],
		modesLabel: 'Modes',
		playable: (count: string) => `${count} playable`,
		modesTitle: 'Game modes',
		modesLead: 'Six modes, all already tested in online matches.',
		featuredLabel: 'Featured mode',
		modes: [
			{
				name: 'Team deathmatch',
				text: 'Two teams, respawn on. The team that reaches the kill goal first, or leads when time runs out, wins.',
				tags: ['Team', 'Respawn']
			},
			{
				name: 'Bomb mission',
				text: 'One team plants the bomb and the other tries to stop it or defuse it. Die, and you are back next round.',
				tags: ['Team', 'Rounds', 'Plant/defuse']
			},
			{
				name: 'Sniper room',
				text: 'Team deathmatch with sniper rifles only. Whoever misses the first shot rarely gets a second one.',
				tags: ['Team', 'Rules']
			},
			{
				name: 'Hunter king',
				text: 'Whoever lands a kill streak becomes the Hunter king and gets a minigun. The other team has to bring them down.',
				tags: ['Team', 'Fun']
			},
			{
				name: 'Arms race',
				text: 'Every few kills you get the next weapon on the list and cannot switch. The team that reaches the end first wins.',
				tags: ['Team', 'Progression']
			},
			{
				name: 'Vampire',
				text: 'Hunters against vampires. Whoever dies becomes a vampire. A hunter with full fury turns lycan, and the stake takes a vampire out of the round.',
				tags: ['Rounds', 'Infection']
			}
		],
		betaLabel: 'Closed beta',
		betaTitle: 'Want to play before everyone else?',
		betaText:
			'The closed beta will start on Android, with a few hundred invited players. Your account and progress are kept. Invites go out through the Discord, so join it so you do not miss yours.'
	},
	legal: {
		kicker: 'Global Assault',
		updated: 'Last updated:',
		translation: 'This is a translation. Where they differ, the Portuguese version prevails:',
		translationLink: 'read it in Portuguese',
		privacy: {
			title: 'Privacy Policy',
			description: 'What data Global Assault uses, what for, for how long, and how to ask for a copy or deletion.',
			updated: 'November 17, 2026'
		},
		terms: {
			title: 'Terms of Use',
			description: 'The rules for playing Global Assault: minimum age, account, conduct, in-game items and the closed beta.',
			updated: 'November 16, 2026'
		}
	},
	error: {
		notFoundTitle: 'Page not found',
		errorTitle: 'Error',
		notFound: 'Page not found.',
		failed: 'Something went wrong.',
		notFoundLead: 'This address does not exist or has moved.',
		failedLead: 'Please try again in a moment.',
		back: 'Back to home'
	}
};
