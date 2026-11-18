import type { Handle } from '@sveltejs/kit/hooks';
import { localeOfPath } from '#lib/i18n/locales.ts';

/** Each page's <html lang> is its language (app.html's %lang%), prerendered pages included. */
export const handle: Handle = ({ event, resolve }) => {
	const lang = localeOfPath(event.url.pathname).code;
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
};
