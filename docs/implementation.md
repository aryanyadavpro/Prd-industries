# implementation.md
> This is the LIVING plan. Unlike `context.md` (static facts), this file tracks *progress* and *decisions*.
> Rule for the AI agent: before starting any task, read this file's "Current State" section only (skip "Log" unless debugging a regression). After finishing a task, update "Current State" and append one line to "Log". Keep both terse — this file is re-read every session, so bloat costs tokens every time.

## Build Approach
1. Scaffold Next.js (TS, App Router, ESLint, Tailwind) with the folder structure fixed in `context.md`.
2. Wire Supabase project: create schema (`PRD.md §10`), enable RLS, generate typed client.
3. Build UI primitives (`/components/ui`) before feature components — reuse aggressively to keep LOC low.
4. Build product listing/detail pages against Supabase (SSG + ISR, `revalidate` on a sane interval, e.g. 3600s).
5. Build the Enquiry form + `/api/enquiry` route (validation → rate limit → Supabase insert → SMTP email).
6. Add WhatsApp click-to-chat button (contact page + product detail page).
7. SEO pass: metadata API per page, sitemap.ts, robots.ts, JSON-LD (Organization, Product).
8. Security pass (checklist below).
9. Performance pass: image optimization, font strategy, bundle analysis.
10. Deploy to Vercel, verify env vars, smoke-test enquiry email end-to-end.

## Coding Standards
- TypeScript strict mode; no `any` unless justified with a comment.
- Prefer composition over duplication — shared UI primitives, shared `zod` schemas between client/server validation.
- Keep functions small and single-purpose; avoid deeply nested conditionals.
- Minimize client-side JS: Server Components by default, `"use client"` only where state/interactivity is required.
- Responsive layout: use fluid units — `vw`, `vh`, `clamp()`, `min()/max()` — instead of relying solely on fixed Tailwind breakpoints, so scaling is continuous across phone → tablet → desktop.
- No unused imports/exports/dead code — treat lint warnings as build blockers.
- Every exported function/component gets a one-line doc comment only if its purpose isn't obvious from its name/signature.

## Security Standards (must-follow, not optional)
- **Input validation**: `zod` schema shared by client + server for the enquiry form; server route re-validates (never trust client-side checks alone).
- **Rate limiting**: IP-based limiter on `/api/enquiry` (e.g. token bucket in-memory or Supabase-backed) to block spam/abuse.
- **Spam protection**: honeypot field at minimum; consider hCaptcha/Turnstile in phase 2.
- **Secrets**: all credentials via environment variables only; `SUPABASE_SERVICE_ROLE_KEY` and `SMTP_APP_PASSWORD` are server-only, never sent to the client bundle (verify via build output).
- **RLS**: Supabase Row Level Security enabled on every table; anon role gets least-privilege (read active products/categories, insert-only on enquiries).
- **Transport**: HTTPS enforced (handled by host); HSTS header set.
- **Headers**: Set `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` via `next.config.js` headers.
- **Email safety**: sanitize/escape all user input before interpolating into the notification email body (prevent header injection / HTML injection).
- **Dependency hygiene**: `npm audit` / Dependabot on; pin major versions; no unmaintained packages for anything security-relevant.
- **Error handling**: never leak stack traces or internal errors to the client response; log server-side only.
- **No SQL string concatenation** — use Supabase client's parameterized query builder only.

## Current State
- [x] Scaffold complete — Next.js 16 (App Router, TS strict, Tailwind v4, ESLint) builds with zero errors.
- [x] Folder structure matches `context.md`: `app/`, `components/`, `lib/`, `types/`, `docs/`, `public/images/`.
- [x] Placeholder pages: `/` (marketing), `/about`, `/products`, `/products/[slug]`, `/contact`.
- [x] API route stub: `POST /api/enquiry`.
- [x] SEO stubs: `sitemap.ts`, `robots.ts`.
- [x] Typed database schema: `types/database.ts` (categories, products, enquiries per PRD §10).
- [x] Supabase client stubs: `lib/supabase/client.ts` (browser), `lib/supabase/server.ts` (server-only guard).
- [x] Lib stubs: `mailer.ts`, `validation.ts`, `rate-limit.ts`.
- [x] `.env.example` with all env var names from `context.md`.
- [ ] Next task: Supabase schema creation + seed data + RLS policies (Milestone 2).

## Log
_(One line per completed milestone — append only, oldest first)_
- `YYYY-MM-DD` — Initial PRD, context.md, implementation.md, agent.md authored.
- `2026-07-29` — Milestone 1: Project scaffold complete. Next.js 16 + TS strict + Tailwind v4 + ESLint. All pages/routes build clean.
