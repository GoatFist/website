# AGENTS.md — website

GoatFist Interactive's site (goatfist.com): SvelteKit 3 (Svelte 5 runes), adapter-node, ui-sdk. Read README.md first. This repository is in
the `global-assault` workspace (`GoatFist/global-assault`, submodule `website/`).

## Layout
- `src/routes`: the pages (prerendered: `src/routes/+layout.ts`). `/global-assault/privacy-policy.html` is the policy's first address (the
  store listing links to it) and redirects to `/global-assault/privacy`: keep it.
- `src/lib/Logo.svelte` draws the brand's vectors (`src/lib/brand/*.svg`, copied from `brand/vectors/`); `static/brand/` holds the kit's
  favicons, og image and lockups (copied from `brand/dist/`). The brand kit (`GoatFist/brand`, `brand/` in the workspace) is their source:
  rebuild there and copy, never edit the copies.
- `src/app.css`: the tokens (the brand palette mapped onto ui-sdk's `--ui-*`), light and dark through `light-dark()`; `data-theme` on
  `<html>` forces one (`src/lib/theme.svelte.ts`, chosen in `ThemeMenu` and the mobile menu, set before paint in `src/app.html`).
- Server-side configuration, when a page needs it, goes through `src/env.ts` (`defineEnvVars`, read with `$app/env/private`), not `$env/dynamic`.

## Rules
- No trackers, analytics, cookies or third-party requests (fonts and scripts are local).
- Legal text is never invented: a document without its source is published as a draft, marked as one (`LegalPage` with `draft`).
- `npm run check` and `npm run build` pass before a push (CI runs both); deploys are Dokploy's auto deploy from `main` (README).

## ui-sdk
Before using ui-sdk, follow the ui-sdk skill (`.agents/skills/ui-sdk/SKILL.md`; `npx skills@latest add vercel-labs/ui --skill ui-sdk` links it
for Claude Code) and read `node_modules/@ui-sdk/svelte/docs/llms.txt`. To build a new component, also search
`node_modules/@ui-sdk/svelte/docs/core.md` by heading, and read `rendering.md` next to it. Import each component from its entry
(`@ui-sdk/svelte/button`); `@ui-sdk/core/web.css` is imported once in `src/routes/+layout.svelte`.
