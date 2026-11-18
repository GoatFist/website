/**
 * The site's languages: the game's own (gam-client's Resources/Languages). Portuguese lives at the root, as the site always did (the store
 * listing links to /global-assault/privacy-policy.html); every other language has its prefix (/en, /es, /ru, /ko, /zh), matched by
 * src/params/lang.ts.
 */
export const locales = [
	{ code: 'pt-BR', prefix: '', label: 'Português', og: 'pt_BR' },
	{ code: 'en', prefix: 'en', label: 'English', og: 'en_US' },
	{ code: 'es', prefix: 'es', label: 'Español', og: 'es_ES' },
	{ code: 'ru', prefix: 'ru', label: 'Русский', og: 'ru_RU' },
	{ code: 'ko', prefix: 'ko', label: '한국어', og: 'ko_KR' },
	{ code: 'zh-CN', prefix: 'zh', label: '简体中文', og: 'zh_CN' }
] as const;

export type Locale = (typeof locales)[number]['code'];
export type LocaleInfo = (typeof locales)[number];
export const baseLocale = locales[0];

/** The prefixes a URL may start with (the root language has none). */
export const prefixes = locales.map((l) => l.prefix).filter(Boolean) as string[];

/** The language of a route's `lang` param (none: the root language). */
export function localeOf(prefix: string | undefined): LocaleInfo {
	return locales.find((l) => l.prefix === (prefix ?? '')) ?? baseLocale;
}

/** The language of a path, from its first segment. */
export function localeOfPath(pathname: string): LocaleInfo {
	return localeOf(pathname.split('/')[1]);
}

/** A path without its language prefix: /en/global-assault -> /global-assault. */
export function stripLocale(pathname: string) {
	const first = pathname.split('/')[1] ?? '';
	if (!prefixes.includes(first)) return pathname;
	const rest = pathname.slice(first.length + 1);
	return rest === '' ? '/' : rest;
}

/** A site path in a language: /global-assault in English is /en/global-assault; hashes and the root are kept. */
export function localizePath(path: string, locale: LocaleInfo) {
	if (/^[a-z]+:/i.test(path) || !path.startsWith('/')) return path;
	if (!locale.prefix) return path;
	return path === '/' ? `/${locale.prefix}` : path.startsWith('/#') ? `/${locale.prefix}${path.slice(1)}` : `/${locale.prefix}${path}`;
}
