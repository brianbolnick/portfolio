# Portfolio — Brian Bolnick

Personal portfolio and blog built with React Router 7, Tailwind CSS 4, and Framer Motion.

## Tech Stack

- **Framework:** React Router 7.12 (SSR)
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 12
- **Language:** TypeScript
- **Bundler:** Vite 7
- **Database:** Vercel Postgres
- **Deployment:** Vercel (SSR via serverless functions)

## Getting Started

### Prerequisites

- Node.js 18+
- A Vercel Postgres database (free tier)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
ADMIN_PASSWORD=your-admin-password
SESSION_SECRET=any-random-string

# Vercel Postgres (auto-set when you link a Vercel Postgres DB)
POSTGRES_URL=postgres://...
```

### Database Setup

1. Create a Vercel Postgres database in the [Vercel dashboard](https://vercel.com/dashboard)
2. Link it to the project — this auto-sets `POSTGRES_URL` in production
3. For local dev, copy the connection string from the Vercel dashboard into `.env`
4. Run the migration to create the articles table:

```bash
# Via Vercel SQL console, or:
psql $POSTGRES_URL -f scripts/create-articles-table.sql
```

### Development

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

## Admin CMS

An authenticated admin panel for managing blog articles.

| Route | Description |
|-------|-------------|
| `/admin/login` | Password login (uses `ADMIN_PASSWORD` env var) |
| `/admin/articles` | List all articles with status, date, edit/delete |
| `/admin/articles/new` | Create a new article with live markdown preview |
| `/admin/articles/:id` | Edit an existing article, toggle publish status |

Articles created in the admin are stored in Postgres and rendered at runtime with `react-markdown`. Static MDX articles in `app/content/` continue to work as a fallback.

## Deployment

Deployed to Vercel. The SSR build deploys as serverless functions automatically.

```bash
npm run build
```

Output structure:

```
build/
├── client/    # Static assets
└── server/    # Server-side code
```

---

Built with React Router.
