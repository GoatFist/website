import { defineParams } from '@sveltejs/kit/params';
import { prefixes } from '#lib/i18n/locales.ts';

export const params = defineParams({
	/** A language prefix (/en, /es, /ru, /ko, /zh); the root language has none. */
	lang: (param) => (prefixes.includes(param) ? param : undefined)
});
