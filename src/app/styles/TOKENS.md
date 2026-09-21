# Neo-brutalism tokens

Source of truth: `src/app/[locale]/globals.css` (`@theme` block).

Tailwind v4 turns `--color-*`, `--shadow-*`, `--radius-*`, and `--font-*` into utilities. Do not add one-off hex colors in components; use a token.

## Color

| Token | Hex | Utilities |
|---|---|---|
| `canvas` | `#fff4dc` | `bg-canvas` — page ground |
| `paper` | `#fffdf6` | `bg-paper` — cards, nav, panels |
| `ink` | `#111111` | `text-ink` `border-ink` `bg-ink` |
| `muted` | `#3d3d3d` | `text-muted` — secondary copy |
| `brand` | `#6d4aff` | `bg-brand` — identity purple |
| `sun` | `#ffe14d` | `bg-sun` — primary CTA / stamps |
| `hot` | `#ff5c8a` | `bg-hot` — featured / alert |
| `ice` | `#7af0ff` | `bg-ice` — info / social |
| `lime` | `#c8ff3d` | `bg-lime` — success / available |
| `blaze` | `#ff7a1a` | `bg-blaze` — projects |

## Type

| Token | Family | Utilities |
|---|---|---|
| `display` | Syne | `font-display` — titles |
| `sans` | Space Grotesk | `font-sans` — body (default) |
| `mono` | Space Mono | `font-mono` — labels, dates, chips |

## Shape & elevation

| Token | Value | Utilities |
|---|---|---|
| `radius-nb` | `2px` | `rounded-nb` |
| `shadow-nb-sm` | `3px 3px 0 #111` | `shadow-nb-sm` |
| `shadow-nb` | `6px 6px 0 #111` | `shadow-nb` |
| `shadow-nb-lg` | `10px 10px 0 #111` | `shadow-nb-lg` |
| `shadow-nb-pressed` | `2px 2px 0 #111` | `shadow-nb-pressed` |

Borders are always `3px solid ink` (`border-3 border-ink`).

## Layout utilities

Defined with `@utility` in `globals.css`:

- `nb-frame` — paper surface + 3px ink border + hard shadow
- `nb-press` — hover/focus translates toward the shadow (physical press)
- `nb-stamp` — rotated-ready uppercase label
- `nb-page` — centered `max-w-6xl` page gutter

## Rules

1. One accent color per surface.
2. Hover presses; it does not fade, scale, or grow a blur shadow.
3. Images sit in an ink frame. No circles unless it is a stamp.
4. Do not use `shadow-lg`, `rounded-full` (except tiny dots), or `border-slate-*`.
