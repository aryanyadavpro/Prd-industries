# agent.md
> Instructions for any AI agent (Claude) working in this repository.

## Read order (token discipline)
1. `context.md` — static facts (stack, folders, env var names, conventions). Read every session.
2. `implementation.md` → **"Current State"** section only — what's done, what's next. Read every session.
3. `PRD.md` — only when you need feature/requirement detail or the DB schema, not by default.
4. `implementation.md` → **"Log"** section — only when debugging a regression or asked "why was X done this way."

Never re-read a file's full contents if only one section is relevant — use targeted reads.

## Operating rules
- Treat `context.md` as source of truth for structure/stack. If a request conflicts with it, flag the conflict instead of silently deviating.
- Treat `PRD.md §10` as the single source of truth for the database schema. Don't invent new tables/columns without updating `PRD.md` first.
- After any code change that alters structure, schema, or approach, update `context.md` and/or `implementation.md` **in the same turn** — these files must never drift from the real codebase.
- Prefer editing existing files over creating new ones; prefer small, focused diffs over large rewrites.
- Every new component/page must comply with:
  - Fluid responsive layout (`vw`/`vh`/`clamp()`), not just fixed breakpoints.
  - Server Component by default; `"use client"` only if interactivity requires it.
  - The security standards in `implementation.md §Security Standards` — no exceptions without explicit user sign-off.
- Do not introduce a new library/service (analytics, CAPTCHA, payment, auth, etc.) without asking the user first — this is a lead-gen catalog site, not a platform.
- Keep code minimal: no speculative abstractions, no unused config, no boilerplate left over from scaffolding tools.

## Definition of Done (per task)
- [ ] Code builds with no TypeScript or ESLint errors.
- [ ] Responsive check: works at narrow mobile width and wide desktop width using fluid units.
- [ ] No secrets committed; all config via env vars.
- [ ] Relevant section of `implementation.md` updated (Current State + one Log line).
- [ ] If schema changed, `PRD.md §10` updated to match.

## Escalate to the user (don't decide silently) when:
- A requirement is ambiguous and affects data model or security posture.
- A new third-party service/API is needed.
- Something in `context.md`/`PRD.md` seems outdated vs. what's being asked.
