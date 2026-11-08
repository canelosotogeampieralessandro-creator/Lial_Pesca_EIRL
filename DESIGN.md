# Design

Surface mode: **Operate**, with a Read-leaning consolidated view for management and the
accountant. The tool should disappear into the task; brand lives in precision, not expression.

## The world

A precision instrument for a commodity trade. The references are the weighing ticket, the SUNAT
electronic invoice and a trading blotter: rigid alignment, figures that line up in columns,
hairline rules doing the dividing, and color that only ever means something. Nothing decorative
survives contact with a dock in direct sunlight.

## Color

Neutrals carry a slight cool-green bias derived from the accent, so the greys read as chosen
rather than inherited. One accent; semantic colors are a separate vocabulary.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F3F6F6` | `#0B1416` | App ground |
| `--panel` | `#FFFFFF` | `#131F22` | Content surface |
| `--rail` | `#EAEFEF` | `#101A1D` | Second neutral layer: sidebar, toolbars |
| `--ink` / `--ink-2` / `--ink-3` | `#0E1A1D` / `#48595D` / `#5E7175` | `#E6EDEE` / `#A2B4B7` / `#93A6AA` | Text, three levels |
| `--accent` | `#05715E` | `#3DB69B` | Primary actions, selection, settled state |
| `--warn` | `#8E5A0E` | `#D69B4C` | Pending |
| `--danger` | `#9E3326` | `#DC8071` | Observed, deductions, destructive |
| `--info` | `#28496B` | `#7DA4CC` | Factoring, partial lots |

Every text level clears 4.5:1 against its own surface in both themes: measured 17.73 / 5.13
(light) and 14.21 / 6.64 (dark).

**Company identity** uses four hues (`--co-1…4`) as markers only — an 8px dot or a 26px initial
tile — never as a surface or decoration. Tile lettering uses `--tile-ink`, which flips with the
theme because the hues lighten in dark mode.

## Type

One family. The system sans carries headings, labels, buttons and body; a tabular monospace
carries every figure, which is legitimate here because kilos and soles are measurement, and
columns of money must align. Fixed rem scale at a ~1.15 ratio, never fluid: this is viewed at
consistent DPI and a heading that shrinks inside a panel looks worse, not better.

`--t-micro` 11 · `--t-xs` 12.5 · `--t-sm` 14 · `--t-md` 15 · `--t-lg` 17 · `--t-xl` 20 · `--t-2xl` 24

## Layout

Responsive behavior is structural, not typographic.

- **≥1024px** — a 252px sidebar holds the company switcher, navigation grouped into Operación and
  Supervisión, the sync indicator and the role. Tables render as real tables; the accountant view
  spreads to four columns.
- **<1024px** — the sidebar is gone, a six-item tab bar sits in thumb reach at 56px tall, and the
  same data stacks into cards.

## State

Status is a chip with a filled dot, never a colored stripe down the side of a card. Each record
carries two independent states, and they are shown separately: **payment** (settled / pending /
factoring) and, for purchase lots, **stock** (in stock / partial / sold). The accountant's review
adds a third: unreviewed / reviewed / observed.

## Icons

An authored SVG set on a 24px grid, 1.5px stroke, round caps, `currentColor`. No Unicode glyphs
or emoji stand in for an icon anywhere.

## Motion

150–250ms, state only. Sheets rise on an ease-out curve; everything else is a background or
border transition. No page-load choreography: the user is in a task.

## Browser surfaces

Text selection, caret, scrollbars and the focus ring are themed from the palette rather than left
at browser defaults. Figures carry `font-variant-numeric: tabular-nums` wherever they stack.

## Print

Management prints or exports the consolidated view to PDF, so navigation, controls and overlays
drop out, shadows flatten, and sections avoid breaking across pages.
