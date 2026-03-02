---
paths:
  - "app/components/**/*.tsx"
---

# Component Conventions

- Named exports only — no `export default`
- Use `cn()` from `~/lib/cn` for class merging
- No explicit React import (React 19 automatic JSX transform)
- Semantic color tokens only (`text-primary`, `bg-surface`, `text-accent`, etc.) — never hardcoded hex values

# Framer Motion Rules

- Import from `motion/react` (package was renamed from `framer-motion`)
- Define `variants` objects **outside** the component body to avoid re-creation on render
- Scroll animations use `useInView` from `~/hooks/useInView`
- **Never** put Tailwind `transition-*` classes on `motion.*` elements — conflicts with Motion's inline styles
- `AnimatePresence` must stay mounted — children conditionally render inside it, not the other way around
- All `AnimatePresence` children need unique `key` props
- Use `staggerChildren` in parent variants for sequenced reveals
