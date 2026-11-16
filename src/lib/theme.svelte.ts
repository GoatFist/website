export type Theme = 'system' | 'light' | 'dark';

export const themes: { value: Theme; label: string }[] = [
	{ value: 'system', label: 'Sistema' },
	{ value: 'light', label: 'Claro' },
	{ value: 'dark', label: 'Escuro' }
];

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
