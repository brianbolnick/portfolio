# Portfolio — Brian Bolnick

## Tech Stack

- **Framework:** React Router 7.12 (SSR mode, `ssr: true`)
- **Styling:** Tailwind CSS 4 (CSS-first config via `app/app.css`)
- **Animation:** Framer Motion 12
- **Language:** TypeScript (strict)
- **Bundler:** Vite 7
- **Deployment:** Vercel (SSR via serverless functions)
- **Database:** Vercel Postgres (`@vercel/postgres`)
- **Auth:** Cookie-based session (single admin user)

## Project Structure

```
app/
├── components/    # UI components grouped by feature
│   ├── about/
│   ├── admin/      # ArticleForm (admin CMS components)
│   ├── experience/
│   ├── hero/
│   ├── layout/     # Section, Header, Footer
│   ├── ui/         # GlowCard, ThemeToggle, etc.
│   └── writing/    # ArticleCard, ArticleLayout, MarkdownRenderer, mdx-components
├── data/          # Static data (experience, quotes, social links)
├── hooks/         # Custom hooks (useInView, useMousePosition)
├── lib/           # Utilities (cn.ts)
├── routes/        # Route components (home.tsx is the main page)
├── server/        # Server-only utilities (auth.server.ts, db.server.ts)
├── routes.ts      # Route definitions
├── root.tsx       # App shell, font loading, theme setup
└── app.css        # Tailwind + custom properties + font-face
scripts/
└── create-articles-table.sql  # DB migration
```

## Path Alias

`~/` maps to `./app/*` — use `import { cn } from "~/lib/cn"` style imports.

## Key Conventions

- **`cn()`** — classname utility in `app/lib/cn.ts` (wraps `clsx`)
- **Theming** — CSS custom properties for colors; light/dark mode via `.dark` class on `<html>`
- **Fonts** — `font-hero` (Instrument Serif), `font-display` (DM Sans), `font-mono` (JetBrains Mono)
- **Animations** — Framer Motion `variants` objects + scroll-triggered via `useInView` hook
- **Experience data** — shaped in `app/data/experience.ts`, rendered by timeline components

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run typecheck  # Run typegen + tsc
```

## Local Setup

### Environment Variables

Create a `.env` file (not committed) with:

```
ADMIN_PASSWORD=your-admin-password
SESSION_SECRET=any-random-string

# Vercel Postgres (auto-set when linking a Vercel Postgres DB)
POSTGRES_URL=postgres://...
```

### Database Setup

1. Create a Vercel Postgres database in the Vercel dashboard (free tier)
2. Link it to the project — this auto-sets `POSTGRES_URL` in production
3. For local dev, copy the connection string from the Vercel dashboard into `.env`
4. Run `scripts/create-articles-table.sql` in the Vercel SQL console (or via `psql`)

### Admin CMS

- `/admin` — authenticated admin panel (redirects to login if no session)
- `/admin/login` — enter `ADMIN_PASSWORD` to get a session cookie
- `/admin/articles` — list, create, edit, publish/unpublish, delete articles
- Articles are stored in Postgres and rendered at runtime with `react-markdown`
- Static MDX articles in `app/content/` still work as a fallback on `/thoughts`

## Design System

### Color Tokens

Defined as CSS custom properties in `app/app.css` and registered in `@theme {}`:

| Tailwind Class | Property | Light | Dark |
|---------------|----------|-------|------|
| `bg-surface` / `text-surface` | `--surface` | #fafaf9 | #0a0a0a |
| `bg-surface-secondary` | `--surface-secondary` | #f0efed | #171717 |
| `text-primary` | `--text-primary` | #0a0a0a | #fafafa |
| `text-secondary` | `--text-secondary` | #3f3f3f | #a3a3a3 |
| `text-tertiary` | `--text-tertiary` | #737373 | #737373 |
| `text-accent` / `bg-accent` | `--accent` | #14b8a6 | #2dd4bf |
| `bg-accent-deep` | `--accent-deep` | #0d9488 | #5eead4 |
| `bg-accent-muted` | `--accent-muted` | rgba(20,184,166,0.12) | rgba(45,212,191,0.1) |
| `border-border` | `--border-color` | #d6d3d1 | #262626 |
| `bg-card` | `--card` | #ffffff | #141414 |

### Font Families

- `font-sans` — Inter (body text)
- `font-display` — Plus Jakarta Sans (subheadings)
- `font-mono` — JetBrains Mono (code)
- `font-hero` — Instrument Serif (hero headlines, defined in `root.tsx`)

### Animation Pattern

- Framer Motion `variants` objects defined **outside** component bodies
- Stagger children via parent variant `staggerChildren`
- Scroll-triggered reveals via `useInView` hook from `~/hooks/useInView`
- `MotionConfig reducedMotion="user"` at app root for accessibility
- Import from `motion/react`, not `framer-motion`

## Rules & Context

Path-scoped rules in `.claude/rules/` provide deep domain-specific guidance:
- `components.md` — component conventions + Framer Motion pitfalls
- `routes.md` — React Router 7 SPA constraints
- `styles.md` — Tailwind v4 CSS-first config pitfalls + full token reference
- `data.md` — data layer type shapes

## Notes

- React 19 — uses the modern JSX transform (no React import needed)
- Route variants live at `/v1` through `/v6`; `/` renders the main home page
- `*.server.ts` files in `app/server/` are server-only — never bundled into the client
- Public `/thoughts` route merges DB articles + static MDX articles (DB wins on slug collision)
