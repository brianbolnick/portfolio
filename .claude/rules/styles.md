---
paths:
  - "app/**/*.css"
---

# Tailwind CSS v4 Rules

This project uses Tailwind v4 with CSS-first configuration. Claude was trained on v3 — these rules prevent common mistakes.

- **CSS-first config** — all tokens live in `@theme {}` in `app/app.css`. There is NO `tailwind.config.js`
- **Never use `@apply`** — deprecated in v4
- **Never double-wrap colors** — `hsl(var(--background))` breaks v4; use `var(--background)` directly
- **Never put `:root` inside `@layer base`** — breaks v4
- Uses `@tailwindcss/vite` plugin, NOT PostCSS
- CSS entry: `@import "tailwindcss"` (one line, no config)

## Adding New Tokens

1. Define the raw CSS property in both `:root` and `.dark`
2. Register it in `@theme {}` as `--color-<name>: var(--<property>)`

## Token Reference

| Category | Token | Light | Dark |
|----------|-------|-------|------|
| Surface | `--surface` | #fafaf9 | #0a0a0a |
| Surface | `--surface-secondary` | #f0efed | #171717 |
| Text | `--text-primary` | #0a0a0a | #fafafa |
| Text | `--text-secondary` | #3f3f3f | #a3a3a3 |
| Text | `--text-tertiary` | #737373 | #737373 |
| Brand | `--accent` | #14b8a6 | #2dd4bf |
| Brand | `--accent-deep` | #0d9488 | #5eead4 |
| Brand | `--accent-muted` | rgba(20,184,166,0.12) | rgba(45,212,191,0.1) |
| Border | `--border-color` | #d6d3d1 | #262626 |
| Card | `--card` | #ffffff | #141414 |

## Fonts

- `--font-sans`: Inter
- `--font-display`: Plus Jakarta Sans
- `--font-mono`: JetBrains Mono
- `font-hero`: Instrument Serif (defined in root.tsx via Google Fonts)
