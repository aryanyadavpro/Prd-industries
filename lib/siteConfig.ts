/** Site-wide business configuration — single source of truth. */
export const siteConfig = {
  name: "PRD Industries",
  tagline: "Precision-Engineered Industrial Components",
  description:
    "Leading manufacturer and supplier of high-quality industrial gaskets, seals, flanges, and O-rings. Trusted by engineers worldwide.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+91 98765 43210",
  email: process.env.BUSINESS_NOTIFY_EMAIL ?? "info@prdindustries.com",
  address: "Plot No. 42, Industrial Area Phase-II, Chandigarh, India 160002",
  foundedYear: 2005,
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
