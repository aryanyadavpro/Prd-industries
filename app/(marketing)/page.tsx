import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { getCategories } from "@/lib/supabase/queries";
import { siteConfig } from "@/lib/siteConfig";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main>
      {/* Full-Bleed Screen Hero Section */}
      <section className="relative min-h-[85vh] section-py flex items-center overflow-hidden">
        {/* Full-bleed Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-bg.png"
            alt="Industrial Engineering Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100%"
          />
          {/* Subtle soft-clay radial & linear gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E0E5EC]/85 via-[#E0E5EC]/75 to-[#E0E5EC]" />
        </div>

        <div className="container-fluid relative z-10">
          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Bento Main Hero Card (8 cols) */}
            <div className="lg:col-span-8 relative rounded-[32px] neu-extruded p-8 sm:p-12 flex flex-col justify-between group">

              {/* Top Pill Badge */}
              <div className="relative z-10 self-start mb-8">
                <div className="inline-flex items-center gap-2 rounded-full neu-inset-sm px-4 py-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF] animate-pulse" />
                  <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#3D4852]">
                    ISO 9001:2015 Certified Manufacturer
                  </span>
                </div>
              </div>

              {/* Headline & Paragraph */}
              <div className="relative z-10 my-auto">
                <h1 className="fluid-hero font-display font-extrabold text-[#3D4852] tracking-tight">
                  Precision-Engineered{" "}
                  <span className="text-[#6C63FF]">Industrial Components</span>
                </h1>
                <p className="fluid-subhero mt-4 text-[#6B7280] max-w-xl leading-relaxed font-medium">
                  From high-pressure spiral gaskets to custom forged pipe flanges — manufactured to micron tolerances and international standards.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
                <LinkButton href="/products" size="lg">
                  Explore Products →
                </LinkButton>
                <LinkButton href="/contact" variant="secondary" size="lg">
                  Request a Quote
                </LinkButton>
              </div>
            </div>

            {/* Bento Side Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              {/* Bento Side Card 1: Experience & Trust */}
              <div className="p-6 rounded-[32px] neu-extruded flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#6B7280]">
                    Established {siteConfig.foundedYear}
                  </span>
                  <div className="p-3 rounded-2xl neu-inset-deep text-[#6C63FF]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#6C63FF]">
                    {new Date().getFullYear() - siteConfig.foundedYear}+ Years
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3D4852]">
                    Industrial Manufacturing Excellence
                  </p>
                </div>
              </div>

              {/* Bento Side Card 2: Clients & Delivery */}
              <div className="p-6 rounded-[32px] neu-extruded flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl neu-inset text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-[#3D4852]">1.2k+</p>
                    <p className="text-xs text-[#6B7280] font-semibold mt-1">Clients Served</p>
                  </div>
                  <div className="p-4 rounded-2xl neu-inset text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-[#38B2AC]">99%</p>
                    <p className="text-xs text-[#6B7280] font-semibold mt-1">On-Time Delivery</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#A3B1C6]/30 flex items-center justify-between">
                  <span className="text-xs text-[#6B7280] font-medium">Stocked Inventory</span>
                  <span className="text-xs font-bold text-[#6C63FF]">Fast Shipping</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Categories Bento Section */}
      <section className="section-py">
        <div className="container-fluid">
          <SectionHeading
            title="Product Categories"
            subtitle="Explore our specialized range of sealing and fluid-handling solutions"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className="block group">
                <Card>
                  <CardBody className="text-center p-8">
                    {/* Deep Inset Icon Well */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl neu-inset-deep group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                      {cat.description}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bento Banner */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="rounded-[32px] neu-extruded p-8 sm:p-14 text-center">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#3D4852]">
              Need a Custom Engineered Solution?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed font-medium">
              Our engineering team manufactures high-specification industrial components to your exact technical drawings.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton href="/contact" size="lg">
                Contact Our Engineers
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
