import { page } from '$app/state';
import type { Messages } from './messages/pt-BR.ts';
import { baseLocale, localeOfPath, localizePath, locales, stripLocale, type Locale, type LocaleInfo } from './locales.ts';

export { baseLocale, locales, localizePath, stripLocale, type Locale, type LocaleInfo };

/**
 * The page's language and its words (loaded for its language by the root layout), and `href` to keep links in that language. Components read it as
 * `const t = $derived(i18n())`, then `t.m.home.heading`, `t.href('/global-assault')`.
 */
export function i18n() {
	const locale = localeOfPath(page.url.pathname);
	return { locale, m: page.data.messages as Messages, href: (path: string) => localizePath(path, locale) };
}

