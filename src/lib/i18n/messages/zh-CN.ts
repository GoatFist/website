import type { Messages } from './pt-BR.ts';

export const zhCN: Messages = {
	common: {
		skip: '跳到正文',
		home: 'GOATFIST Interactive，首页',
		mainNav: '主导航',
		openMenu: '打开菜单',
		closeMenu: '关闭菜单',
		menu: '菜单',
		theme: '主题',
		themes: { system: '跟随系统', light: '浅色', dark: '深色' },
		language: '语言',
		newTab: '（在新标签页中打开）'
	},
	nav: { game: 'Global Assault', studio: '工作室' },
	footer: {
		about: '独立游戏工作室，正在制作 Global Assault。',
		studio: '工作室',
		home: '首页',
		howWeWork: '我们的做法',
		theGame: '游戏',
		privacy: '隐私',
		terms: '使用条款',
		note: 'Global Assault 是一个非营利的社区项目，也是对一款已停服的经典 FPS 的延续与致敬。我们让这款游戏继续运营，供所有人免费游玩。我们与原版游戏的开发商和发行商没有任何关系。',
		noTracking: '没有 Cookie、广告或追踪器。'
	},
	home: {
		title: 'GOATFIST Interactive — 独立游戏工作室',
		description:
			'GOATFIST Interactive 是一家来自巴西的独立工作室。我们正在制作 Global Assault，一款在手机上玩的在线 FPS。',
		heading: '和朋友一起玩的在线游戏。',
		leadBefore: 'GOATFIST Interactive 是一家小型独立工作室。我们的第一款游戏是',
		leadAfter: '，一款我们正在搬上手机的在线 FPS。',
		seeGame: '了解 Global Assault',
		aboutStudio: '关于工作室',
		gameFacts: '在线 FPS · 手机 · 封闭测试即将开始',
		gameText: '节奏紧凑的团队对战，沿用经典 FPS 的地图和模式。封闭测试即将在 Android 上开启。',
		viewGame: '查看游戏',
		howWeWork: '我们的做法',
		values: [
			{
				title: '自有服务器',
				text: '游戏服务器由我们自己运营。这样我们能把控对局质量，修复漏洞、处理作弊，都不用等别人。'
			},
			{
				title: '手机优先',
				text: '我们先做手机版，操作和界面都为手指操作而设计。以后可能会推出 PC 版。'
			},
			{
				title: '没有广告',
				text: '对局中不插广告，也不用任何追踪工具。游戏只保存运行所需的数据。'
			}
		]
	},
	game: {
		title: 'Global Assault — 经典 FPS，现在可以在手机上玩',
		description:
			'Global Assault 是经典的在线 FPS，现在可以在手机上玩。六种模式，自有服务器，Android 封闭测试即将开始。',
		status: '封闭测试即将开始 · Android',
		tagline: '经典 FPS，现在可以在手机上玩。',
		heroLead: '许多人在 2000 年代玩过的地图、武器和模式回来了，配上触屏操作和全新的服务器。',
		joinDiscord: '加入 Discord',
		modesLink: '游戏模式',
		inNumbers: '数据一览',
		stats: { modes: '游戏模式', maps: '地图总数', weapons: '武器总数', platform: '测试平台' },
		aboutLabel: '游戏',
		aboutTitle: '还是那款游戏，握在你手里',
		aboutLead1:
			'武器的射击手感和对局节奏都没有变。为了在手机上玩，我们只改了必须改的部分，比如操作和界面。',
		aboutLead2:
			'在幕后，服务器会核验每一枪，作弊因此难了很多。我们先做手机版，但以后推出 PC 版也完全可能。',
		features: [
			'可自定义的触屏操作',
			'快速匹配，或和朋友开房间',
			'人数不够时由机器人补位',
			'服务器核验每一枪',
			'商店、背包和外观',
			'好友列表和聊天',
			'更新无需重新下载应用',
			'没有任何广告'
		],
		modesLabel: '模式',
		playable: (count: string) => `${count} 种可玩`,
		modesTitle: '游戏模式',
		modesLead: '共六种模式，都已经在线上对局中测试过。',
		featuredLabel: '推荐模式',
		modes: [
			{
				name: '团队竞技',
				text: '两队对战，可以复活。先达到击杀目标，或时间结束时领先的一队获胜。',
				tags: ['团队', '复活']
			},
			{
				name: '爆破模式',
				text: '一队负责安放炸弹，另一队设法阻止或拆除。阵亡后要等下一回合才能回来。',
				tags: ['团队', '回合制', '安放/拆除']
			},
			{
				name: '狙击房',
				text: '只能用狙击步枪的团队竞技。第一枪打空的人，通常没有第二枪的机会。',
				tags: ['团队', '规则']
			},
			{
				name: '猎王',
				text: '打出连杀的玩家会成为猎王，并获得一挺加特林机枪。对方队伍要设法把他击倒。',
				tags: ['团队', '娱乐']
			},
			{
				name: '军备竞赛',
				text: '每完成一定数量的击杀，就会换上列表中的下一把武器，不能自己切换。最先打完整个列表的队伍获胜。',
				tags: ['团队', '进阶']
			},
			{
				name: '吸血鬼',
				text: '猎人对抗吸血鬼。阵亡的人会变成吸血鬼。愤怒值满的猎人会变成狼人，木桩能让一名吸血鬼退出本回合。',
				tags: ['回合制', '感染']
			}
		],
		betaLabel: '封闭测试',
		betaTitle: '想抢先玩到吗？',
		betaText:
			'封闭测试将在 Android 上开始，邀请几百名玩家参加。你的账号和进度都会保留。邀请会通过 Discord 发放，记得加入，别错过。'
	},
	legal: {
		kicker: 'Global Assault',
		updated: '最后更新：',
		translation: '本页为译文。如与葡萄牙语版本有出入，以葡萄牙语版本为准：',
		translationLink: '阅读葡萄牙语版本',
		privacy: {
			title: '隐私政策',
			description: 'Global Assault 使用哪些数据、用于什么目的、保存多久，以及如何申请查阅或删除。',
			updated: '2026年11月17日'
		},
		terms: {
			title: '使用条款',
			description: '玩 Global Assault 的规则：最低年龄、账号、行为规范、游戏内物品和封闭测试。',
			updated: '2026年11月16日'
		}
	},
	error: {
		notFoundTitle: '页面不存在',
		errorTitle: '出错了',
		notFound: '页面不存在。',
		failed: '出了点问题。',
		notFoundLead: '该地址不存在，或已经移动到别处。',
		failedLead: '请稍后再试。',
		back: '返回首页'
	}
};
