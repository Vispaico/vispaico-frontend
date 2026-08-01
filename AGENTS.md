## Project

Vispaico — Next.js 16 multi-tenant website builder with i18n. Main site at `vispaico.com`; subdomain-based microsites live under `/[locale]/library/`.

## Quick start

```bash
npm run dev       # dev server (localhost:3000)
npm run build     # production build
npm run lint      # ESLint
```

No test framework installed.

## Architecture

- **Route groups:** `(main_site)/` → Header+Footer+ContactModal chrome; `library/`, `portfolio/` have their own layouts.
- **Middleware is `src/proxy.ts`** (NOT `src/middleware.ts`). Handles i18n redirect (`next-intl`), subdomain → `/library/{subdomain}` rewrites, and JWT auth for `/admin_niels`.
- **i18n:** `next-intl` with `localePrefix: 'always'`. Locales: `en`, `de`, `es`. Messages stored as JSON in `messages/`. Use `@/i18n/navigation` exports for links/redirects/pathnames.
- **Dual CMS:** Contentful for portfolio listings (`fetchDemoListings`); Sanity for tutorial articles (`fetchDemoArticles`). Both configured via env vars at `@/lib/env.ts`.
- **API routes:** `auth/login|logout`, `submit-form`, `support/revalidate`, `tutorial/articles`, `tutorial/upload-signature`.
- **CSS:** Tailwind v4 + `@tailwindcss/postcss` + `tw-animate-css`. Utility `cn()` at `@/lib/utils.ts`.
- **Component library:** shadcn/ui (New York style), lucide-react + FontAwesome icons, framer-motion for animation.
- **Env vars** live in `.env.local` (gitignored). `getRequiredServerEnv(key)` throws if missing.

## CMS types

- **Sanity** uses `DemoArticle` / `DemoArticleDraft` / `DemoHeroImage` / `DemoMediaLink` from `@/types/tutorial.ts`.
- **Contentful** uses `DemoListing` / `ListingAsset` from `@/types/support.ts`.

## Known quirks

- `src/proxy.ts` is the middleware file — renamed from `middleware.ts`. No `middleware.ts` exists.
- `CONTEXT.md` and `docs/adr/` are referenced by `docs/agents/domain.md` but do not exist on disk.
- Ghost/duplicate files (stale copies): `page copy.tsx`, `VispaicoContactModal copy.tsx`, `VispaicoWheel_copy.tsx`.
- `.env.local` contains production credentials — never commit or expose.
- Security headers (CSP, HSTS) are set in `next.config.ts` via a custom `async headers()`.
- SEO canonical helper at `@/lib/seo.ts` with `buildCanonical(locale, pathname)`.

## Must Observe Rules
- Do not preserve backward compatibility.
- Choose the simplest implementation that fully meets the current requirements.
- Prefer established, well-maintained libraries over custom implementations.
- Avoid premature abstraction: prefer simple concrete solutions until real patterns emerge.
- Prefer composition over centralization: use small focused modules with explicit interfaces instead of centralized systems.
- Keep responsibilities clear: keep modules focused and avoid mixing transport, orchestration, domain/workflow state, persistence, infrastructure.
- Never skip verification: do not bypass required checks, tests, or quality gates.
