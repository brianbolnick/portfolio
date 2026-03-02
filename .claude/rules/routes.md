---
paths:
  - "app/routes/**/*.tsx"
  - "app/root.tsx"
---

# React Router 7 SPA Conventions

- SPA mode (`ssr: false`): **no** `loader`, `action`, or server exports
- Routes compose section components — no inline layout logic
- Page anatomy: fragment wrapping section components
- `app/routes.ts` must be updated when adding a new route
- Use `index()` and `route()` from `@react-router/dev/routes`
