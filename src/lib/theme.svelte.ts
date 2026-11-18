export type Theme = 'system' | 'light' | 'dark';

/** The choices; their words are each language's `common.themes` (src/lib/i18n). */
export const themes: Theme[] = ['system', 'light', 'dark'];

// `src/app.html` applies the saved choice before the first paint; this mirrors it for the controls.
export const theme = $state<{ value: Theme }>({ value: 'system' });

export function readTheme() {
	const saved = document.documentElement.dataset.theme;
	theme.value = saved === 'light' || saved === 'dark' ? saved : 'system';
}

export function setTheme(value: Theme) {
	theme.value = value;
	const root = document.documentElement;
	if (value === 'system') delete root.dataset.theme;
	else root.dataset.theme = value;
	try {
		if (value === 'system') localStorage.removeItem('theme');
		else localStorage.setItem('theme', value);
	} catch {}
}
