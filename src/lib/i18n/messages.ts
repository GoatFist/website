import type { Messages } from './messages/pt-BR.ts';
import type { Locale } from './locales.ts';

/** Each language's words, loaded on demand: a page ships only its own. */
const loaders: Record<Locale, () => Promise<Messages>> = {
	'pt-BR': () => import('./messages/pt-BR.ts').then((m) => m.ptBR),
	en: () => import('./messages/en.ts').then((m) => m.en),
	es: () => import('./messages/es.ts').then((m) => m.es),
	ru: () => import('./messages/ru.ts').then((m) => m.ru),
	ko: () => import('./messages/ko.ts').then((m) => m.ko),
	'zh-CN': () => import('./messages/zh-CN.ts').then((m) => m.zhCN)
};

export const loadMessages = (locale: Locale) => loaders[locale]();
