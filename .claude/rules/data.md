---
paths:
  - "app/data/**/*.ts"
---

# Data Layer Conventions

- Plain typed arrays/objects — no classes, no side effects, no async
- Types defined in same file
- Match existing type shapes exactly

## ExperienceEntry Shape

```ts
{
  company: string;
  companyShort: string;
  description: string;
  url: string;
  color: string;
  logo?: string;
  logoType?: string;
  logoNaturalColors?: boolean;
  roles: Role[];
  slug: string;
}
```
