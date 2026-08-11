<p align="center">
  <strong>PRD Industries</strong><br/>
  <em>Precision-Engineered Industrial Components</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase&logoColor=white" alt="Supabase" />
</p>

---

## Overview

**PRD Industries** is the production website for a leading manufacturer and supplier of industrial gaskets, seals, flanges, and O-rings. Built with **Next.js 16 (App Router)** and backed by **Supabase**, the site features a product catalogue driven by a PostgreSQL database, a validated enquiry form with email notifications, and a fully optimised SEO and performance pipeline.

### Key Features

| Feature | Description |
|---|---|
| **Dynamic Product Catalogue** | Product data stored in Supabase with ISR (1 hr revalidation) and SSG for individual product pages |
| **Enquiry System** | Zod-validated form → API route → Supabase insert + SMTP email notification |
| **SEO & Structured Data** | Dynamic `sitemap.xml`, `robots.txt`, Open Graph / Twitter meta, and JSON-LD Organisation schema |
| **Security Hardened** | HSTS, X-Frame-Options DENY, CSP headers, honeypot spam protection, IP rate limiting |
| **Scroll Animations** | Framer Motion powered scroll-reveal, staggered grids, animated counters, and pinned scroll hero |
| **Responsive Design** | Fluid typography with `clamp()`, mobile-first layout, editorial luxury design system |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | [TypeScript 5](https://typescriptlang.org) (strict mode) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + custom design tokens |
| Database | [Supabase](https://supabase.com) (PostgreSQL + Row Level Security) |
| Animations | [Framer Motion](https://motion.dev) |
| Validation | [Zod 4](https://zod.dev) (shared client/server schemas) |
| Email | [Nodemailer](https://nodemailer.com) (SMTP) |
| Fonts | Google Fonts — Playfair Display (serif) + Inter (sans) |
| Linting | ESLint 9 (flat config) with `eslint-config-next` |

---

## Project Structure

```
prdIndustries/
├── app/
│   ├── (marketing)/          # Route group — Home + About pages
│   │   ├── page.tsx           # Homepage (ISR, animated hero)
│   │   └── about/page.tsx     # About page
│   ├── contact/page.tsx       # Contact page with enquiry form
│   ├── products/
│   │   ├── page.tsx           # Product listing (filterable by category)
│   │   └── [slug]/page.tsx    # Individual product detail (SSG)
│   ├── api/enquiry/route.ts   # POST endpoint — validate, rate-limit, store, email
│   ├── layout.tsx             # Root layout (fonts, navbar, footer, JSON-LD)
│   ├── globals.css            # Design system tokens + Tailwind config
│   ├── sitemap.ts             # Dynamic XML sitemap
│   └── robots.ts              # robots.txt generation
├── components/
│   ├── forms/
│   │   └── EnquiryForm.tsx    # Client-side enquiry form with Zod validation
│   ├── layout/
│   │   ├── Navbar.tsx         # Responsive navigation bar
│   │   └── Footer.tsx         # Site footer
│   ├── product/
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── ProductGrid.tsx    # Grid layout wrapper
│   │   ├── ProductsFilter.tsx # Category filter UI
│   │   └── SpecTable.tsx      # Technical specifications table
│   └── ui/
│       ├── AnimatedComponents.tsx  # Framer Motion scroll animations
│       ├── Button.tsx         # Button + LinkButton variants
│       ├── Card.tsx           # Reusable card component
│       ├── PinnedScrollHero.tsx    # Pinned scroll frame-sequence hero
│       └── SectionHeading.tsx # Section heading with label + subtitle
├── lib/
│   ├── mailer.ts              # Nodemailer transporter + HTML email template
│   ├── rate-limit.ts          # In-memory IP rate limiter (5 req/min)
│   ├── siteConfig.ts          # Single source of truth for business info
│   ├── validation.ts          # Zod enquiry schema (shared client/server)
│   └── supabase/
│       ├── client.ts          # Browser client (anon key)
│       ├── server.ts          # Server client (service role key)
│       └── queries.ts         # Cached query helpers (React cache())
├── types/
│   └── database.ts            # TypeScript interfaces for DB tables
├── scripts/
│   ├── supabase-schema.sql    # Full schema + RLS policies + seed data
│   └── update-product-images.sql
├── public/images/             # Static image assets
├── next.config.ts             # Security headers, image optimisation
├── eslint.config.mjs          # ESLint 9 flat config
├── tsconfig.json              # TypeScript configuration
└── postcss.config.mjs         # PostCSS + Tailwind plugin
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.18
- **npm** ≥ 9 (or pnpm / yarn)
- A [Supabase](https://supabase.com) project (free tier works)
- SMTP credentials for email notifications (e.g., Gmail App Password, Resend, etc.)

### 1. Clone & Install

```bash
git clone https://github.com/aryanyadavpro/Prd-industries.git
cd Prd-industries
npm install
```

### 2. Environment Variables

Copy the example and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anonymous (public) key |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Supabase service role key (server-only) |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Production URL (e.g. `https://prdindustries.com`) |
| `NEXT_PUBLIC_PHONE` | ❌ | Business phone number |
| `BUSINESS_NOTIFY_EMAIL` | ✅ | Email address to receive enquiry notifications |
| `SMTP_HOST` | ✅ | SMTP server host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | ❌ | SMTP port (default: `465`) |
| `SMTP_USER` | ✅ | SMTP username / email |
| `SMTP_APP_PASSWORD` | ✅ | SMTP password or app-specific password |

### 3. Set Up the Database

Run the schema script in the [Supabase SQL Editor](https://app.supabase.com):

```sql
-- Copy and paste the contents of scripts/supabase-schema.sql
-- This creates tables, enables RLS, and seeds sample product data.
```

This creates:
- **`categories`** — Product categories (Gaskets, Seals, Flanges, O-Rings)
- **`products`** — Product catalogue with specs stored as JSONB
- **`enquiries`** — Customer enquiry submissions

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the entire project |

---

## Database Schema

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  categories  │       │   products   │       │  enquiries   │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id (PK)      │◄──────│ category_id  │       │ id (PK)      │
│ name         │       │ id (PK)      │       │ name         │
│ slug (UQ)    │       │ name         │       │ company      │
│ description  │       │ slug (UQ)    │       │ email        │
│ created_at   │       │ short_desc   │       │ phone        │
└──────────────┘       │ specs (JSONB)│       │ product_id   │──► products(id)
                       │ images[]     │       │ message      │
                       │ is_active    │       │ status       │
                       │ created_at   │       │ created_at   │
                       └──────────────┘       └──────────────┘
```

**Row Level Security:**
- `categories` / `products` — public read access for active records
- `enquiries` — public insert only (submissions); reads restricted to service role

---

## Security

This application implements several layers of security hardening:

- **HTTP Headers** — HSTS, X-Frame-Options (DENY), X-Content-Type-Options (nosniff), strict Referrer-Policy, and Permissions-Policy are applied to all routes via `next.config.ts`.
- **Rate Limiting** — In-memory IP-based rate limiter on the enquiry API (5 requests per minute per IP).
- **Honeypot Field** — Hidden `website` field in the enquiry form silently traps bot submissions.
- **Input Validation** — All form data is validated with Zod on both client and server.
- **HTML Escaping** — Email body content is escaped to prevent injection attacks.
- **Row Level Security** — Supabase RLS policies restrict data access at the database level.
- **Server-Only Imports** — The `server-only` package prevents accidental import of server modules in client components.
- **Environment Validation** — Missing Supabase credentials throw at startup in production.

---

## Deployment

### Vercel (Recommended)

The project includes a [`vercel.json`](vercel.json) pre-configured with:
- **Region**: `bom1` (Mumbai) — optimised for Indian users
- **Asset Caching**: Immutable 1-year cache for static assets and images

**Steps:**

1. Push the repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings to change.
4. Add environment variables in **Settings → Environment Variables**:

   | Variable | Value |
   |---|---|
   | `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
   | `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
   | `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://prdindustries.com`) |
   | `BUSINESS_NOTIFY_EMAIL` | Email for receiving enquiries |
   | `SMTP_HOST` | SMTP host (e.g. `smtp.gmail.com`) |
   | `SMTP_PORT` | SMTP port (default `465`) |
   | `SMTP_USER` | SMTP username |
   | `SMTP_APP_PASSWORD` | SMTP app password |
   | `NEXT_PUBLIC_PHONE` | *(optional)* Business phone |

5. Click **Deploy**.

> **Tip:** After the first deploy, add your custom domain under **Settings → Domains** and update `NEXT_PUBLIC_SITE_URL` to match.

---

## Performance

The site is optimised for Core Web Vitals:

- **Static Generation (SSG)** — Product detail pages are pre-rendered at build time via `generateStaticParams`.
- **Incremental Static Regeneration (ISR)** — Homepage and product listing revalidate every hour.
- **Image Optimisation** — AVIF/WebP format negotiation with 30-day cache TTL.
- **Font Loading** — `display: swap` with variable font subsets for zero layout shift.
- **Turbopack** — Fast development builds with Next.js 16 Turbopack bundler.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please ensure `npm run lint` and `npm run build` pass before submitting.

---

## License

This project is proprietary software. All rights reserved.

© 2005–2026 PRD Industries
