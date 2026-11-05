# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server at http://localhost:3000 (also regenerates the agent-rules block in `AGENTS.md`)
- `npm run build` — production build; also the main type-check gate (there is no separate `tsc` script)
- `npm run start` — serve the production build
- `npm run lint` — ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)

No test framework is configured yet.

## Stack and architecture

Freshly bootstrapped `create-next-app` project: Next.js 16.4 (App Router, `app/` at repo root, no `src/`), React 19.3, TypeScript strict, Tailwind CSS v4. Path alias `@/*` maps to the repo root.

Non-default settings in `next.config.ts` that change how code should be written — check `node_modules/next/dist/docs/` before relying on older patterns:

- `cacheComponents: true` — Cache Components mode: dynamic data access must be wrapped in `<Suspense>` or explicitly cached with `"use cache"` / `cacheLife`. Route segment configs (`dynamic`, `revalidate`, `fetchCache`) are replaced by these — see `01-app/01-getting-started/08-caching.md` in the bundled docs, not `caching-without-cache-components.md`.
- `partialPrefetching: true` and `experimental.agentFeedback: true`.
- Tailwind is wired through Turbopack directly (`turbopack.rules` with the `@tailwindcss/turbopack` loader on `*.css`) — there is intentionally **no** `postcss.config`. Don't add one.

Styling: Tailwind v4 CSS-first config in `app/globals.css` (`@import "tailwindcss"` + `@theme inline`); there is no `tailwind.config.js`. Theme colors come from `--background`/`--foreground` CSS variables with a `prefers-color-scheme` dark override; Geist fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-sans`/`--font-mono`.

Layouts/pages use Next's global generated route types (e.g. `LayoutProps<"/">` in `app/layout.tsx`, generated into `.next/types`), so run `dev` or `build` once after adding routes for types to resolve.
