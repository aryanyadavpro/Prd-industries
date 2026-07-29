import type { Category, Product } from "@/types/database";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Gaskets",
    slug: "gaskets",
    description: "High-performance sealing gaskets for industrial applications",
    created_at: new Date().toISOString(),
  },
  {
    id: "cat-2",
    name: "Seals",
    slug: "seals",
    description: "Precision-engineered seals for hydraulic and pneumatic systems",
    created_at: new Date().toISOString(),
  },
  {
    id: "cat-3",
    name: "Flanges",
    slug: "flanges",
    description: "Durable pipe flanges built to withstand extreme conditions",
    created_at: new Date().toISOString(),
  },
  {
    id: "cat-4",
    name: "O-Rings",
    slug: "o-rings",
    description: "Premium O-rings in various materials and specifications",
    created_at: new Date().toISOString(),
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    category_id: "cat-1",
    name: "Spiral Wound Gasket",
    slug: "spiral-wound-gasket",
    short_description:
      "Metal-reinforced spiral wound gasket for high-pressure pipeline applications.",
    specs: {
      Material: "SS 304 / Graphite",
      "Pressure Rating": "Up to 250 bar",
      "Temperature Range": "-200°C to 550°C",
      Sizes: "DN 15 – DN 600",
      Standard: "ASME B16.20",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-2",
    category_id: "cat-1",
    name: "Ring Joint Gasket",
    slug: "ring-joint-gasket",
    short_description:
      "Metallic ring joint gasket designed for high-pressure flanged connections.",
    specs: {
      Material: "SS 316 / Soft Iron",
      "Pressure Rating": "Up to 700 bar",
      "Temperature Range": "-29°C to 550°C",
      Types: "R, RX, BX",
      Standard: "ASME B16.20 / API 6A",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-3",
    category_id: "cat-2",
    name: "Hydraulic Rod Seal",
    slug: "hydraulic-rod-seal",
    short_description:
      "Double-acting rod seal for heavy-duty hydraulic cylinders.",
    specs: {
      Material: "Polyurethane / NBR",
      "Pressure Rating": "Up to 400 bar",
      "Temperature Range": "-30°C to 110°C",
      "Shaft Diameter": "20 mm – 500 mm",
      Standard: "ISO 7425",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-4",
    category_id: "cat-2",
    name: "Mechanical Face Seal",
    slug: "mechanical-face-seal",
    short_description:
      "High-performance mechanical seal for rotating equipment and pumps.",
    specs: {
      Material: "Silicon Carbide / Carbon",
      "Pressure Rating": "Up to 25 bar",
      "Temperature Range": "-40°C to 260°C",
      "Shaft Size": "12 mm – 100 mm",
      Standard: "EN 12756",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-5",
    category_id: "cat-3",
    name: "Weld Neck Flange",
    slug: "weld-neck-flange",
    short_description:
      "Forged weld neck flange for critical high-pressure piping systems.",
    specs: {
      Material: "A105 / SS 316L",
      "Pressure Class": "150# – 2500#",
      "Size Range": "½\" – 24\"",
      Facing: "Raised Face / RTJ",
      Standard: "ASME B16.5",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-6",
    category_id: "cat-3",
    name: "Blind Flange",
    slug: "blind-flange",
    short_description:
      "Solid blind flange used to blank off piping, valves, and pressure vessels.",
    specs: {
      Material: "A105 / SS 304",
      "Pressure Class": "150# – 2500#",
      "Size Range": "½\" – 48\"",
      Facing: "Raised Face / Flat Face",
      Standard: "ASME B16.5 / B16.47",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-7",
    category_id: "cat-4",
    name: "Nitrile O-Ring",
    slug: "nitrile-o-ring",
    short_description:
      "General-purpose NBR O-ring with excellent oil and fuel resistance.",
    specs: {
      Material: "Nitrile (NBR) 70 Shore A",
      "Temperature Range": "-30°C to 120°C",
      "ID Range": "1 mm – 500 mm",
      "Cross Section": "1.5 mm – 10 mm",
      Standard: "AS 568 / ISO 3601",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "prod-8",
    category_id: "cat-4",
    name: "Viton O-Ring",
    slug: "viton-o-ring",
    short_description:
      "High-temperature FKM O-ring for chemical and fuel system sealing.",
    specs: {
      Material: "Viton (FKM) 75 Shore A",
      "Temperature Range": "-20°C to 200°C",
      "ID Range": "2 mm – 400 mm",
      "Cross Section": "1.5 mm – 8 mm",
      Standard: "AS 568 / ISO 3601",
    },
    images: ["/images/placeholder.svg"],
    is_active: true,
    created_at: new Date().toISOString(),
  },
];
