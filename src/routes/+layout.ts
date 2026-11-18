import { loadMessages } from '#lib/i18n/messages.ts';
import { localeOfPath } from '#lib/i18n/locales.ts';
import type { LayoutLoad } from './$types';

export const prerender = true;

/** The page's words, in its language only (each language is a chunk of its own). */
export const load: LayoutLoad = async ({ url }) => ({ messages: await loadMessages(localeOfPath(url.pathname).code) });
