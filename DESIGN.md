# DESIGN.md — goatfist.com

The design system of GOATFIST Interactive's site. One palette and one set of tokens, two visual voices:

| Voice | Where | Feel |
|---|---|---|
| **Studio** | home, header, footer, legal pages, errors | Dark Cinematic Studio / Editorial: sober, flat, generous space, type does the work |
| **Game** | `/global-assault` | Tactical HUD: key art dominant, panels, mono readouts, volt as the one action signal |

Every value below exists as a CSS variable in `src/app.css`. Components use the **semantic** tokens, never a raw hex or a primitive.
The brand's colours come from the kit (`brand/brand.json`, `GoatFist/brand`); the game's art from `gam-brand/`.

## Colour

### Primitives
| Token | Value | Notes |
|---|---|---|
| `--night` | `#0b0d10` | the dark ground; the logo's ink on light |
| `--night-1` | `#111419` | first raised tone on night |
| `--night-2` | `#181c22` | second raised tone |
| `--night-rule` | `#23272e` | hairlines on night |
| `--bone` | `#f0f0f0` | text and logo on night |
| `--steel` | `#979da5` | muted text on night (7:1) |
| `--slate` | `#5b616a` | muted text on white (6.2:1) |
| `--paper` | `#ffffff` | the light ground |
| `--paper-1` | `#f4f4f2` | first raised tone on paper |
| `--paper-2` | `#ebebe8` | second raised tone |
| `--paper-rule` | `#e2e2de` | hairlines on paper |
| `--volt` | `#e2ff04` | **the one accent**. 17:1 on night; 1.1:1 on white, so on paper it is only ever a fill under night text |
| `--olive` | `#5b6b00` | volt's text form on paper (5.6:1) |

### Semantic (light / dark through `light-dark()`)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--surface` | paper | night | the page |
| `--surface-1` | paper-1 | night-1 | a raised region (a band, the footer) |
| `--surface-2` | paper-2 | night-2 | a region inside a raised one, hover fills |
| `--text` | night | bone | body and headings |
| `--text-muted` | slate | steel | secondary text, captions, labels |
| `--rule` | paper-rule | night-rule | hairlines, dividers, control edges at rest |
| `--action` | volt | volt | the primary button's fill (one per view) |
| `--action-text` | night | night | text on `--action` |
| `--action-hover` | `#d2ee00` | `#d2ee00` | the primary button on hover |
| `--action-edge` | `#a8bf00` | transparent | the primary button's edge (volt barely separates from white) |
| `--link` | olive | volt | inline links and the active nav mark |
| `--focus` | olive | volt | focus rings |

ui-sdk's `--ui-*` tokens are mapped onto these in `app.css`; never set them elsewhere.

**Accent budget.** Studio pages: volt (or its olive text form) at most **twice** per page: the primary button and the active nav mark.
Links use `--link` but stay underlined text, never decoration. Game page: volt marks **actions and live readouts only**: the primary
button, the closed-beta panel, the key number in a readout.

## Typography

| Role | Family | Weights | Token |
|---|---|---|---|
| Display (headings, the hero) | Oxanium | 500, 600 (never 700) | `--font-display` |
| Body (everything else) | IBM Plex Sans | 400, 500 | `--font-body` |
| Data (labels, readouts, tags) | IBM Plex Mono | 400, 500 | `--font-mono` (Game voice; Studio uses it only for dates) |

All three are self-hosted (`@fontsource`); no request leaves the site.

### Scale (fluid, min → max)
| Token | Size | Line height | Use |
|---|---|---|---|
| `--text-xs` | 0.8125rem | 1.5 | mono labels, legal meta |
| `--text-sm` | 0.9375rem | 1.55 | nav, captions, footer |
| `--text-md` | 1.0625rem | 1.65 | body |
| `--text-lg` | 1.125 → 1.3125rem | 1.55 | lead paragraphs |
| `--text-xl` | 1.375 → 1.875rem | 1.25 | h3, panel titles |
| `--text-2xl` | 1.875 → 3rem | 1.1 | h2 |
| `--text-3xl` | 2.5 → 5.5rem | 1.0 | h1, the hero |

Headings: Oxanium 500 (h1, h2) or 600 (h3), tracking −0.02em at display sizes. Body measure: 60–70 characters (`--measure: 38rem`).
No uppercase except mono labels in the Game voice.

## Space

`--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 24 · `--space-6` 32 · `--space-7` 48 · `--space-8` 64 ·
`--space-9` 96 · `--space-10` 128 · `--space-11` 160 (px).

- Section padding (`--section`): 96px on phones, 128–160px from tablets up.
- Inside a section: heading → body `--space-5`; body → action `--space-6`; between rows `--space-6`–`--space-7`.
- Page gutter (`--gutter`): 20px → 40px. Content width (`--content`): 76rem.

## Shape and elevation

- Radii: `--radius-0` 0 (surfaces, panels, images), `--radius-1` 2px (buttons, inputs), `--radius-2` 4px (menus, the mobile sheet).
  No pills, no large rounded cards.
- Elevation: none. Hierarchy comes from surface tone (`--surface` → `--surface-1` → `--surface-2`) and space. The only shadow is
  ui-sdk's on floating menus.
- Hairlines (`1px solid var(--rule)`) separate rows; they never box content on all four sides.

## Components

- **Button, primary** (`.btn`): `--action` fill, `--action-text`, Plex Sans 500, sentence case, 48px tall, `--radius-1`. One per view.
- **Secondary action**: a text link with an arrow icon (`.link-arrow`), never a second boxed button.
- **Links in text**: `--link`, underlined, 1px, offset 0.2em.
- **Nav**: Plex Sans 500 `--text-sm`, muted at rest, `--text` on hover, a 2px `--link` underline on the current page.
- **Rows instead of cards**: a list of items is rows split by hairlines, in an asymmetric grid (a heading column + a content column).
- **Panel (Game voice)**: a `--surface-1` region with a mono label strip on top; square corners; no border except a hairline divider.
- **Readout (Game voice)**: mono label (`--text-xs`, uppercase, 0.08em tracking, `--text-muted`) over an Oxanium value.
- **Tags (Game voice)**: mono text separated by `/`, no chips.
- **Icons**: one stroke set (`src/lib/Icon.svelte`, 24 grid, 2px stroke, round joins), always with text or an `aria-label`. No emoji, no
  arrow glyphs (`→`, `↗`) as text.
- **Focus**: 2px `--focus` outline, 2px offset, on every interactive element.

## Voices in practice

**Studio**: left-aligned hero, one dominant headline, one primary button + one text link; sections as asymmetric two-column layouts
(sticky heading left, rows right); the game shown as full-bleed key art, not a card; no mono except dates; volt twice at most.

**Game**: the key art fills the first screen; readouts in mono under the title; sections as panels with mono label strips; the modes
as one featured mode plus rows; the closed beta as the page's single volt panel; one primary action (Discord) repeated where it
belongs.

## Don'ts

- No section template repeated on every section (label + heading + paragraph + grid).
- No grids of identical cards; no "01 / 02 / 03" numbering as decoration.
- No border + shadow + big radius cards; no glassmorphism (`backdrop-filter`); no decorative gradients or glows.
- No purple, indigo or multi-stop gradients. The only gradients allowed are scrims that keep text readable over the key art.
- No "Live", "New" or pulsing-dot badges.
- No two boxed buttons side by side.
- No weight 700 in display type; no uppercase headings; no letter-spaced uppercase labels in the Studio voice.
- No raw hex in components; no volt as decoration.
- No invented copy, numbers or claims: facts come from the game's tables and docs (see the page's comments).
