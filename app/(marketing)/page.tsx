import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { getCategories } from "@/lib/supabase/queries";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export const revalidate = 3600; // ISR: revalidate every hour

const stats = [
  { value: `${new Date().getFullYear() - siteConfig.foundedYear}+`, label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "1,200+", label: "Clients Served" },
  { value: "99%", label: "On-Time Delivery" },
];

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <main>
      {/* Hero */}
      <section className="relative section-py overflow-hidden">
        <div className="container-fluid relative">
          <div className="mx-auto max-w-[clamp(20rem,60vw,52rem)] text-center">
            {/* Soft UI Pill Badge */}
            <div className="mb-[clamp(1rem,2.5vw,1.5rem)] inline-flex items-center gap-2 rounded-full neu-inset-sm px-[clamp(1rem,3vw,1.25rem)] py-[clamp(0.35rem,1vw,0.5rem)]">
              <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse" />
              <span className="text-[clamp(0.75rem,1.2vw,0.875rem)] font-display font-bold text-[#3D4852]">
                Trusted Manufacturers Since {siteConfig.foundedYear}
              </span>
            </div>

            <h1 className="fluid-hero font-display font-extrabold tracking-tight text-[#3D4852]">
              Precision-Engineered{" "}
              <span className="text-[#6C63FF]">Industrial Components</span>
            </h1>
            <p className="fluid-subhero mt-[clamp(1rem,3vw,1.75rem)] text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              From high-pressure gaskets to custom forged flanges — engineered to
              withstand extreme conditions. Request a quote in seconds.
            </p>

            <div className="mt-[clamp(2rem,5vw,3rem)] flex flex-col sm:flex-row items-center justify-center gap-[clamp(1rem,2.5vw,1.5rem)]">
              <LinkButton href="/products" size="lg">
                Browse Products
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Get a Quote
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-py">
        <div className="container-fluid">
          <SectionHeading
            title="Product Categories"
            subtitle="Explore our specialized range of sealing and fluid-handling solutions"
          />
          <div className="grid grid-cols-1 gap-[clamp(1.25rem,3vw,2rem)] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className="block group">
                <Card>
                  <CardBody className="text-center">
                    {/* Deep Inset Icon Well */}
                    <div className="mx-auto mb-[clamp(1rem,2.5vw,1.5rem)] flex h-16 w-16 items-center justify-center rounded-2xl neu-inset-deep group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-display text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.85rem,1.2vw,0.925rem)] text-[#6B7280] leading-relaxed">
                      {cat.description}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="grid grid-cols-2 gap-[clamp(1.25rem,3vw,2rem)] lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-[clamp(1.25rem,3vw,2rem)] rounded-[32px] neu-extruded text-center">
                <p className="font-display text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold text-[#6C63FF]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[clamp(0.85rem,1.3vw,1rem)] font-medium text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="rounded-[32px] neu-extruded p-[clamp(2rem,6vw,4.5rem)] text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-[#3D4852]">
              Need a Custom Solution?
            </h2>
            <p className="mt-[clamp(0.75rem,2vw,1rem)] text-[clamp(0.95rem,1.5vw,1.15rem)] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Our engineering team manufactures high-specification industrial components to your exact drawings. Reach out today.
            </p>
            <div className="mt-[clamp(1.75rem,4vw,2.5rem)] flex justify-center">
              <LinkButton href="/contact" size="lg">
                Contact Us
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
