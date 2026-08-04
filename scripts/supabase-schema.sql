-- ============================================================
-- PRD Industries — Supabase Schema + RLS + Seed Data
-- Run this entire script in the Supabase SQL Editor (one shot).
-- ============================================================

-- 1. TABLES
-- ----------------------------------------------------------

create table if not exists categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  description text not null default '',
  created_at  timestamptz not null default now()
);

create table if not exists products (
  id                uuid primary key default gen_random_uuid(),
  category_id       uuid not null references categories(id) on delete cascade,
  name              text not null,
  slug              text not null unique,
  short_description text not null default '',
  specs             jsonb not null default '{}',
  images            text[] not null default '{}',
  is_active         boolean not null default true,
  created_at        timestamptz not null default now()
);

create table if not exists enquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  company     text,
  email       text not null,
  phone       text not null,
  product_id  uuid references products(id) on delete set null,
  message     text not null,
  status      text not null default 'new',
  created_at  timestamptz not null default now()
);

-- 2. ROW LEVEL SECURITY
-- ----------------------------------------------------------

alter table categories enable row level security;
alter table products    enable row level security;
alter table enquiries   enable row level security;

-- Categories: anyone can read
create policy "Public read categories"
  on categories for select
  to anon, authenticated
  using (true);

-- Products: anyone can read active products
create policy "Public read active products"
  on products for select
  to anon, authenticated
  using (is_active = true);

-- Enquiries: anyone can insert (submit an enquiry)
create policy "Public insert enquiries"
  on enquiries for insert
  to anon, authenticated
  with check (true);

-- Service role bypasses RLS automatically, so no extra policies
-- needed for admin operations.

-- 3. SEED DATA
-- ----------------------------------------------------------

-- Categories
insert into categories (id, name, slug, description) values
  ('a1b2c3d4-0001-4000-8000-000000000001', 'Gaskets',  'gaskets',  'High-performance sealing gaskets for industrial applications'),
  ('a1b2c3d4-0001-4000-8000-000000000002', 'Seals',    'seals',    'Precision-engineered seals for hydraulic and pneumatic systems'),
  ('a1b2c3d4-0001-4000-8000-000000000003', 'Flanges',  'flanges',  'Durable pipe flanges built to withstand extreme conditions'),
  ('a1b2c3d4-0001-4000-8000-000000000004', 'O-Rings',  'o-rings',  'Premium O-rings in various materials and specifications')
on conflict (slug) do nothing;

-- Products
insert into products (category_id, name, slug, short_description, specs, images) values
  (
    'a1b2c3d4-0001-4000-8000-000000000001',
    'Spiral Wound Gasket',
    'spiral-wound-gasket',
    'Metal-reinforced spiral wound gasket for high-pressure pipeline applications.',
    '{"Material":"SS 304 / Graphite","Pressure Rating":"Up to 250 bar","Temperature Range":"-200°C to 550°C","Sizes":"DN 15 – DN 600","Standard":"ASME B16.20"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000001',
    'Ring Joint Gasket',
    'ring-joint-gasket',
    'Metallic ring joint gasket designed for high-pressure flanged connections.',
    '{"Material":"SS 316 / Soft Iron","Pressure Rating":"Up to 700 bar","Temperature Range":"-29°C to 550°C","Types":"R, RX, BX","Standard":"ASME B16.20 / API 6A"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000002',
    'Hydraulic Rod Seal',
    'hydraulic-rod-seal',
    'Double-acting rod seal for heavy-duty hydraulic cylinders.',
    '{"Material":"Polyurethane / NBR","Pressure Rating":"Up to 400 bar","Temperature Range":"-30°C to 110°C","Shaft Diameter":"20 mm – 500 mm","Standard":"ISO 7425"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000002',
    'Mechanical Face Seal',
    'mechanical-face-seal',
    'High-performance mechanical seal for rotating equipment and pumps.',
    '{"Material":"Silicon Carbide / Carbon","Pressure Rating":"Up to 25 bar","Temperature Range":"-40°C to 260°C","Shaft Size":"12 mm – 100 mm","Standard":"EN 12756"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000003',
    'Weld Neck Flange',
    'weld-neck-flange',
    'Forged weld neck flange for critical high-pressure piping systems.',
    '{"Material":"A105 / SS 316L","Pressure Class":"150# – 2500#","Size Range":"1/2\" – 24\"","Facing":"Raised Face / RTJ","Standard":"ASME B16.5"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000003',
    'Blind Flange',
    'blind-flange',
    'Solid blind flange used to blank off piping, valves, and pressure vessels.',
    '{"Material":"A105 / SS 304","Pressure Class":"150# – 2500#","Size Range":"1/2\" – 48\"","Facing":"Raised Face / Flat Face","Standard":"ASME B16.5 / B16.47"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000004',
    'Nitrile O-Ring',
    'nitrile-o-ring',
    'General-purpose NBR O-ring with excellent oil and fuel resistance.',
    '{"Material":"Nitrile (NBR) 70 Shore A","Temperature Range":"-30°C to 120°C","ID Range":"1 mm – 500 mm","Cross Section":"1.5 mm – 10 mm","Standard":"AS 568 / ISO 3601"}',
    ARRAY['/images/placeholder.svg']
  ),
  (
    'a1b2c3d4-0001-4000-8000-000000000004',
    'Viton O-Ring',
    'viton-o-ring',
    'High-temperature FKM O-ring for chemical and fuel system sealing.',
    '{"Material":"Viton (FKM) 75 Shore A","Temperature Range":"-20°C to 200°C","ID Range":"2 mm – 400 mm","Cross Section":"1.5 mm – 8 mm","Standard":"AS 568 / ISO 3601"}',
    ARRAY['/images/placeholder.svg']
  )
on conflict (slug) do nothing;
