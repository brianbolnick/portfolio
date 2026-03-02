Review the current diff (staged + unstaged) against UI/UX quality standards for this portfolio site.

Analyze changes across these dimensions and provide a structured report:

## 1. Visual Hierarchy
- Is the typography scale consistent? (font-hero for headlines, font-display for subheads, font-sans for body)
- Are spacing values consistent with existing patterns?
- Does the visual weight guide the eye correctly?

## 2. Accessibility (WCAG 2.1 AA)
- Color contrast ratios (check both light and dark mode tokens)
- Interactive element sizing (minimum 44x44px touch targets)
- Focus indicators present on interactive elements
- Semantic HTML elements used correctly
- Alt text for images, aria-labels for icon buttons

## 3. Responsive Design
- Does the layout work at 375px (mobile), 768px (tablet), 1440px (desktop)?
- Are Tailwind breakpoints used consistently (sm, md, lg, xl)?
- No horizontal overflow on mobile

## 4. Interaction & Animation
- Framer Motion variants defined outside component body?
- No Tailwind `transition-*` classes on `motion.*` elements?
- Animations respect `prefers-reduced-motion`?
- Hover/focus states defined for interactive elements?

## 5. Design Token Usage
- Using semantic tokens (`text-primary`, `bg-surface`, etc.) not hardcoded colors?
- Consistent with the project's color system in `app/app.css`?

If Playwright MCP is available, take screenshots at 375px and 1440px to visually verify the changes.

Output a summary with ✅ pass / ⚠️ warning / ❌ fail for each dimension, plus specific fix suggestions.
