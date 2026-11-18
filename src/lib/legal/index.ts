import type { Component } from 'svelte';
import type { LocaleInfo } from '#lib/i18n/locales.ts';

/**
 * The legal pages' bodies, one component per page and language (src/lib/legal/<page>/<locale>.svelte), kept out of the site's shared
 * code so only the legal pages carry them. The Portuguese one is the original; the others are translations, and say so (LegalPage).
 */
const bodies = {
	privacy: import.meta.glob<Component>('./privacy/*.svelte', { eager: true, import: 'default' }),
	terms: import.meta.glob<Component>('./terms/*.svelte', { eager: true, import: 'default' })
};

/** A legal page's body in a language. */
export function legalBody(page: 'privacy' | 'terms', locale: LocaleInfo): Component {
	const body = bodies[page][`./${page}/${locale.code}.svelte`];
	if (!body) throw new Error(`The ${page} page has no ${locale.code} body`);
	return body;
}
