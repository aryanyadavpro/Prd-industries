# context.md
> Load this file FIRST in every session. It is the minimal, stable "who/what/where" reference.
> Do not duplicate this info elsewhere. If something here becomes outdated, update it here only.

## Project
Industrial products enquiry website (catalog + lead-gen contact/enquiry system). No cart, no payments, no user auth for visitors.

## Stack (fixed — do not substitute without explicit user approval)
- Next.js (App Router, TypeScript, strict mode)
- Tailwind CSS — fluid layout using `vw`/`vh` + `clamp()`, not fixed breakpoints only
- Supabase (Postgres + Storage), Row Level Security ON
- Nodemailer + Gmail SMTP (App Password) for enquiry emails
- WhatsApp via `wa.me` deep link (no paid API)
- Hosting: Vercel

## Folder Structure (source of truth)
```
/app
  /(marketing)/page.tsx           -- Home
  /(marketing)/about/page.tsx
  /products/page.tsx              -- Product listing
  /products/[slug]/page.tsx       -- Product detail
  /contact/page.tsx               -- Enquiry + contact page
  /api/enquiry/route.ts           -- POST handler: validate -> insert Supabase -> send email
  /sitemap.ts
  /robots.ts
  layout.tsx
  globals.css
/components
  /ui                             -- Button, Input, Textarea, Card, etc. (primitives only)
  /layout                         -- Navbar, Footer
  /product                        -- ProductCard, ProductGrid, SpecTable
  /forms                          -- EnquiryForm, WhatsAppButton
/lib
  supabase/client.ts               -- browser client
  supabase/server.ts                -- server client (service role, server-only)
  mailer.ts                        -- nodemailer transport + send function
  validation.ts                     -- zod schemas (shared client/server)
  rate-limit.ts                     -- simple IP rate limiter for /api/enquiry
/types
  database.ts                      -- generated/typed Supabase schema types
/public
  /images
/docs
  PRD.md
  context.md
  implementation.md
  agent.md
```

## Environment Variables (names only — never store real values in any .md or committed file)
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY        # server-only, never exposed to client
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_APP_PASSWORD                # Gmail App Password, NOT the account password
BUSINESS_NOTIFY_EMAIL
NEXT_PUBLIC_WHATSAPP_NUMBER
```

## Core Data Entities
`categories`, `products`, `enquiries` — full schema in `PRD.md §10`. Treat `PRD.md` as the schema source of truth; do not redefine schema here.

## Conventions
- Components: PascalCase file + folder co-location for complex ones only; simple ones stay flat in `/components/ui`.
- Server Components by default; add `"use client"` only where interactivity is required (forms, filters).
- No inline styles; Tailwind classes only, composed via `clsx`/`cva` for variants.
- All user-facing text in components, not hardcoded deep in logic files, to ease future edits.

## What NOT to do
- Don't add e-commerce/cart/payment logic.
- Don't add visitor auth/login.
- Don't call Supabase service-role client from client components — server-only.
- Don't hardcode email/WhatsApp number/business details in components — pull from env or a single `siteConfig.ts`.
