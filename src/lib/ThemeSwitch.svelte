<script lang="ts">
	import {
		SegmentedControl,
		SegmentedControlIndicator,
		SegmentedControlItem
	} from '@ui-sdk/svelte/segmented-control';

	type Theme = 'system' | 'light' | 'dark';

	let theme = $state<Theme>('system');

	$effect(() => {
		const saved = document.documentElement.dataset.theme;
		if (saved === 'light' || saved === 'dark') theme = saved;
	});

	function choose(value: string) {
		theme = value as Theme;
		const root = document.documentElement;
		if (theme === 'system') delete root.dataset.theme;
		else root.dataset.theme = theme;
		try {
			if (theme === 'system') localStorage.removeItem('theme');
			else localStorage.setItem('theme', theme);
		} catch {}
	}
</script>

<SegmentedControl aria-label="Tema" value={theme} onValueChange={(value) => choose(String(value))}>
	<SegmentedControlIndicator />
	<SegmentedControlItem value="system">Sistema</SegmentedControlItem>
	<SegmentedControlItem value="light">Claro</SegmentedControlItem>
	<SegmentedControlItem value="dark">Escuro</SegmentedControlItem>
</SegmentedControl>
