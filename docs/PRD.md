# PRD — Industrial Products Enquiry Website

## 1. Project Summary
A production-ready B2B website for an industrial products manufacturer (reference model: gasket/industrial component seller). Visitors browse a product catalog by category, view specs/images, and raise an enquiry per product or in bulk. Enquiries route to the business via Email (SMTP/Gmail), and optionally WhatsApp click-to-chat. No online payment or checkout — this is a lead-generation catalog site, not e-commerce.

## 2. Goals
- Present the product catalog clearly (categories → products → specs).
- Convert visitors into enquiries with minimum friction (1–2 fields to start).
- Respond to enquiries via Email + WhatsApp without needing a dashboard on day one (admin dashboard is phase 2).
- Fast, responsive, secure, SEO-indexable pages (industrial buyers search by product/spec terms).

## 3. Non-Goals (v1)
- No cart/checkout/payment gateway.
- No user login/registration for visitors.
- No multi-language i18n (unless requested later).
- No CMS UI in v1 — products seeded via Supabase table/seed script; admin CMS is a phase-2 item.

## 4. Target Users
- **Buyer / Procurement person**: browses products, wants specs and a fast quote.
- **Business owner (site owner)**: receives enquiries by email, replies over WhatsApp/phone/email.

## 5. Core Pages & Features

| Page | Purpose | Key elements |
|---|---|---|
| Home | Brand intro, category highlights, CTA to catalog | Hero, featured categories, trust signals (years in business, clients), CTA buttons |
| Products (listing) | Browse by category | Category filter/tabs, product grid, search |
| Product Detail | Convert to enquiry | Images, specs table, "Send Enquiry" button (pre-fills product name) |
| Contact / Enquiry | Central enquiry form | Name, Company, Email, Phone, Product (optional), Message; WhatsApp link; Email link; Address + map |
| About | Credibility | Years of operation, certifications, manufacturing info |
| (Optional) Thank You | Confirmation after form submit | Confirmation message, WhatsApp fallback |

## 6. Enquiry Flow (Core Feature)
1. User fills enquiry form (site-wide contact page, or pre-filled from a product page).
2. Client-side validation (required fields, email format, phone format) + honeypot/CAPTCHA for bot protection.
3. Submission → Next.js Route Handler (API route) →
   - Insert enquiry row into Supabase (`enquiries` table) for record-keeping.
   - Send notification email via Nodemailer + Gmail SMTP (App Password) to business inbox.
   - Optionally send confirmation email to the user.
4. Return success/failure JSON → UI shows toast/confirmation.
5. WhatsApp button opens `https://wa.me/<number>?text=<prefilled message>` as a parallel, no-backend contact channel.

## 7. Functional Requirements
- FR1: All products stored in Supabase (`products`, `categories` tables) and rendered via server components (SSR/SSG with ISR revalidation).
- FR2: Enquiry form works with **and** without JS-heavy client state — progressive enhancement preferred.
- FR3: Rate-limit the enquiry API route (per IP) to prevent spam/abuse.
- FR4: All forms protected against spam (honeypot field minimum; CAPTCHA optional phase 2).
- FR5: Emails sent through Gmail SMTP using an **App Password**, never the real Gmail password, via environment variables.
- FR6: WhatsApp number and business email are environment-configurable, not hardcoded in components.
- FR7: Product images optimized via `next/image`.
- FR8: Site fully responsive using fluid `vw`/`vh`-based sizing with `clamp()` so layout scales continuously between mobile and desktop rather than snapping only at breakpoints.

## 8. Non-Functional Requirements
- **Performance**: Lighthouse ≥ 90 on Performance, SEO, Accessibility, Best Practices. Images lazy-loaded, fonts subset/self-hosted.
- **Security**: See `implementation.md` §Security. OWASP Top 10 baseline coverage.
- **Code quality**: TypeScript strict mode, ESLint + Prettier, no dead code, minimal-LOC components (shared UI primitives, no duplication).
- **Maintainability**: Folder structure and AI-context files (`context.md`, `implementation.md`, `agent.md`) kept in sync with the actual codebase at all times.
- **SEO**: Server-rendered product pages, metadata API (`generateMetadata`), sitemap.xml, robots.txt, JSON-LD structured data (Organization + Product schema).

## 9. Tech Stack
- **Frontend/Framework**: Next.js (App Router), TypeScript, Tailwind CSS (utility classes composed with fluid vw/vh + clamp()).
- **Backend**: Next.js Route Handlers (API routes) — no separate backend server.
- **Database**: Supabase (Postgres) — `categories`, `products`, `enquiries` tables; Row Level Security enabled.
- **Email**: Nodemailer + Google SMTP (App Password) via a serverless route handler.
- **Messaging**: WhatsApp click-to-chat link (`wa.me`), no API cost.
- **Hosting**: Vercel (or any Next.js-compatible host).

## 10. Data Model (Supabase, minimum viable)
```
categories
  id (uuid, pk)
  name (text)
  slug (text, unique)
  description (text)
  created_at (timestamptz)

products
  id (uuid, pk)
  category_id (uuid, fk -> categories.id)
  name (text)
  slug (text, unique)
  short_description (text)
  specs (jsonb)
  images (text[])            -- storage URLs
  is_active (boolean)
  created_at (timestamptz)

enquiries
  id (uuid, pk)
  name (text)
  company (text, nullable)
  email (text)
  phone (text)
  product_id (uuid, nullable, fk -> products.id)
  message (text)
  status (text default 'new')   -- new | contacted | closed
  created_at (timestamptz)
```
RLS: public can `select` on `categories`/`products` where `is_active = true`; public can `insert` (only) on `enquiries`; all other operations restricted to service role (used only server-side).

## 11. Success Metrics
- Enquiry submission success rate (form → email delivered) ≥ 99%.
- Time-to-first-byte / LCP within Core Web Vitals "Good" thresholds.
- Zero critical/high vulnerabilities in dependency and security scans.

## 12. Milestones
1. Project scaffold + folder structure + AI-context files.
2. Supabase schema + seed data + RLS policies.
3. Product listing + detail pages (SSG/ISR).
4. Contact/Enquiry page + API route + SMTP integration + WhatsApp link.
5. SEO pass (metadata, sitemap, structured data) + performance pass.
6. Security review + deployment.
