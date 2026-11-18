import type { Messages } from './pt-BR.ts';

export const ko: Messages = {
	common: {
		skip: '본문으로 건너뛰기',
		home: 'GOATFIST Interactive, 홈',
		mainNav: '주 메뉴',
		openMenu: '메뉴 열기',
		closeMenu: '메뉴 닫기',
		menu: '메뉴',
		theme: '테마',
		themes: { system: '시스템', light: '라이트', dark: '다크' },
		language: '언어',
		newTab: '(새 탭에서 열림)'
	},
	nav: { game: 'Global Assault', studio: '스튜디오' },
	footer: {
		about: '인디 게임 스튜디오. 지금은 Global Assault를 만들고 있어요.',
		studio: '스튜디오',
		home: '홈',
		howWeWork: '일하는 방식',
		theGame: '게임 소개',
		privacy: '개인정보',
		terms: '이용약관',
		note: 'Global Assault는 비영리 커뮤니티 프로젝트이자, 서비스가 종료된 클래식 FPS를 기리는 살아 있는 헌정 작품이에요. 누구나 무료로 플레이할 수 있도록 게임을 계속 운영하고 있어요. 원작 게임을 만들거나 서비스한 회사들과는 아무런 관계가 없어요.',
		noTracking: '쿠키, 광고, 추적 도구가 없어요.'
	},
	home: {
		title: 'GOATFIST Interactive — 인디 게임 스튜디오',
		description:
			'GOATFIST Interactive는 브라질의 인디 스튜디오예요. 휴대폰으로 즐기는 온라인 FPS, Global Assault를 만들고 있어요.',
		heading: '친구들과 함께 즐기는 온라인 게임.',
		leadBefore: 'GOATFIST Interactive는 작은 인디 스튜디오예요. 저희의 첫 게임은 휴대폰으로 옮겨 오고 있는 온라인 FPS',
		leadAfter: '예요.',
		seeGame: 'Global Assault 알아보기',
		aboutStudio: '스튜디오 소개',
		gameFacts: '온라인 FPS · 모바일 · 클로즈드 베타 예정',
		gameText: '클래식 FPS의 맵과 모드로 즐기는 빠른 팀 대전. 클로즈드 베타가 곧 Android에서 열려요.',
		viewGame: '게임 보기',
		howWeWork: '일하는 방식',
		values: [
			{
				title: '자체 서버',
				text: '게임 서버를 직접 운영해요. 그래서 매치 품질을 직접 챙기고, 버그와 핵도 누구를 기다리지 않고 바로 고칠 수 있어요.'
			},
			{
				title: '모바일 우선',
				text: '손가락으로 플레이하기 좋게 만든 조작과 화면으로 휴대폰부터 시작해요. PC 버전은 나중에 나올 수도 있어요.'
			},
			{
				title: '광고 없음',
				text: '매치 중간에 광고가 나오지 않고, 추적 도구도 쓰지 않아요. 게임은 동작에 꼭 필요한 정보만 저장해요.'
			}
		]
	},
	game: {
		title: 'Global Assault — 클래식 FPS, 이제 휴대폰으로',
		description:
			'Global Assault는 클래식 온라인 FPS를 이제 휴대폰으로 즐기는 게임이에요. 여섯 가지 모드, 자체 서버, 그리고 곧 Android 클로즈드 베타가 시작돼요.',
		status: '클로즈드 베타 예정 · Android',
		tagline: '클래식 FPS, 이제 휴대폰으로.',
		heroLead: '2000년대에 많은 사람이 즐겼던 맵, 무기, 모드가 터치 조작과 새 서버로 돌아왔어요.',
		joinDiscord: 'Discord 참여하기',
		modesLink: '게임 모드',
		inNumbers: '숫자로 보기',
		stats: { modes: '게임 모드', maps: '수록 맵', weapons: '수록 무기', platform: '베타 플랫폼' },
		aboutLabel: '게임 소개',
		aboutTitle: '같은 게임을 손바닥 위에서',
		aboutLead1:
			'무기의 사격감과 매치의 템포는 그대로예요. 조작이나 화면처럼 휴대폰에서 플레이하려면 바뀌어야 하는 부분만 바꿨어요.',
		aboutLead2:
			'뒤에서는 서버가 모든 사격을 검증해서 핵을 쓰기가 훨씬 어려워요. 휴대폰부터 시작하지만, 나중에 PC 버전이 나오지 못할 이유는 없어요.',
		features: [
			'원하는 대로 조정할 수 있는 터치 조작',
			'빠른 매치 또는 친구들과 방 만들기',
			'인원이 부족하면 봇이 참여',
			'서버가 모든 사격을 검증',
			'상점, 인벤토리, 외형 아이템',
			'친구 목록과 채팅',
			'앱을 다시 받지 않아도 되는 업데이트',
			'광고 없음'
		],
		modesLabel: '모드',
		playable: (count: string) => `${count} 플레이 가능`,
		modesTitle: '게임 모드',
		modesLead: '여섯 가지 모드 모두 온라인 매치에서 테스트를 마쳤어요.',
		featuredLabel: '추천 모드',
		modes: [
			{
				name: '팀 데스매치',
				text: '두 팀이 맞붙고 부활이 가능해요. 목표 킬 수에 먼저 도달하거나, 시간이 끝났을 때 앞서 있는 팀이 이겨요.',
				tags: ['팀', '부활']
			},
			{
				name: '폭파 미션',
				text: '한 팀은 폭탄을 설치하고, 다른 팀은 이를 막거나 해체해요. 죽으면 다음 라운드에 다시 들어와요.',
				tags: ['팀', '라운드', '설치/해체']
			},
			{
				name: '스나이퍼전',
				text: '저격총만 쓰는 팀 데스매치예요. 첫 발을 놓치면 두 번째 기회는 잘 오지 않아요.',
				tags: ['팀', '규칙']
			},
			{
				name: '킹 헌터',
				text: '연속 킬을 기록한 플레이어는 킹 헌터가 되어 미니건을 얻어요. 상대 팀은 킹 헌터를 쓰러뜨려야 해요.',
				tags: ['팀', '재미']
			},
			{
				name: '무기 경쟁',
				text: '일정 킬마다 목록의 다음 무기를 받고, 무기를 바꿀 수 없어요. 목록 끝에 먼저 도달한 팀이 이겨요.',
				tags: ['팀', '진행']
			},
			{
				name: '뱀파이어',
				text: '헌터 대 뱀파이어. 죽으면 뱀파이어가 돼요. 분노가 가득 찬 헌터는 라이칸으로 변하고, 말뚝을 맞은 뱀파이어는 그 라운드에서 빠져요.',
				tags: ['라운드', '감염']
			}
		],
		betaLabel: '클로즈드 베타',
		betaTitle: '누구보다 먼저 플레이하고 싶나요?',
		betaText:
			'클로즈드 베타는 초대받은 플레이어 수백 명과 함께 Android에서 시작해요. 계정과 진행 상황은 그대로 저장돼요. 초대는 Discord로 보내니, 놓치지 않도록 Discord에 들어와 주세요.'
	},
	legal: {
		kicker: 'Global Assault',
		updated: '최종 수정일:',
		translation: '이 문서는 번역본입니다. 내용이 다를 경우 포르투갈어 원문이 우선합니다:',
		translationLink: '포르투갈어로 읽기',
		privacy: {
			title: '개인정보 처리방침',
			description: 'Global Assault가 어떤 데이터를 어떤 목적으로, 얼마 동안 사용하는지, 그리고 열람이나 삭제를 요청하는 방법을 안내합니다.',
			updated: '2026년 11월 17일'
		},
		terms: {
			title: '이용약관',
			description: 'Global Assault를 플레이하기 위한 규칙: 최소 연령, 계정, 행동 규칙, 게임 아이템, 클로즈드 베타.',
			updated: '2026년 11월 16일'
		}
	},
	error: {
		notFoundTitle: '페이지를 찾을 수 없음',
		errorTitle: '오류',
		notFound: '페이지를 찾을 수 없어요.',
		failed: '문제가 발생했어요.',
		notFoundLead: '없는 주소이거나 위치가 바뀌었어요.',
		failedLead: '잠시 후 다시 시도해 주세요.',
		back: '홈으로 돌아가기'
	}
};
