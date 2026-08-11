import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCategories } from "@/lib/supabase/queries";
import { siteConfig } from "@/lib/siteConfig";
import { PinnedScrollHero } from "@/components/ui/PinnedScrollHero";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  TextReveal,
  ImageZoom,
  CapabilitiesAccordion,
} from "@/components/ui/AnimatedComponents";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function HomePage() {
  const categories = await getCategories();
  const yearsInBusiness = new Date().getFullYear() - siteConfig.foundedYear;

  const capabilities = [
    {
      title: "Precision Manufacturing",
      description:
        "State-of-the-art CNC and forging facilities producing components to micron-level tolerances for critical industrial applications.",
    },
    {
      title: "Quality Assurance",
      description:
        "ISO 9001:2015 certified. Every batch undergoes material testing, dimensional inspection, and pressure testing.",
    },
    {
      title: "Custom Engineering",
      description:
        "In-house design team for custom specifications — non-standard sizes, exotic materials, and special coatings.",
    },
    {
      title: "Fast Turnaround",
      description:
        "Strategically stocked inventory and optimised production lines for industry-leading lead times.",
    },
  ];

  return (
    <main>
      {/* ─── Pinned Scroll Frame Sequence Hero ─── */}
      <PinnedScrollHero />

      {/* ─── Philosophy / About Teaser ─── */}
      <section className="section-py bg-[#FAF8F5] relative z-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,4rem)] items-start">
            {/* Left label */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <p className="section-label">Our Philosophy</p>
              </ScrollReveal>
            </div>

            {/* Right large text reveal */}
            <div className="lg:col-span-9">
              <TextReveal
                text={`${siteConfig.name} engineers industrial components from first specification to final inspection, blending decades of manufacturing expertise with modern precision in every product we craft.`}
                className="font-serif text-[clamp(1.625rem,3.5vw,3.125rem)] leading-[1.2] tracking-tight text-[#1A1A1A]"
                delay={0.1}
              />
            </div>
          </div>

          {/* Stats Row with Animated Counter */}
          <div className="mt-[clamp(3.5rem,7vh,6rem)] pt-[clamp(2.5rem,5vh,3.5rem)] border-t border-[#E8E2D9]">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,3vw,3rem)]">
              <StaggerItem>
                <div className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium text-[#1A1A1A] leading-none">
                  <AnimatedCounter value={yearsInBusiness} suffix="+" />
                </div>
                <p className="mt-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#7A7468] uppercase tracking-[0.1em]">
                  Years Experience
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium text-[#1A1A1A] leading-none">
                  <AnimatedCounter value={1200} suffix="+" />
                </div>
                <p className="mt-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#7A7468] uppercase tracking-[0.1em]">
                  Clients Served
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium text-[#1A1A1A] leading-none">
                  <AnimatedCounter value={99} suffix="%" />
                </div>
                <p className="mt-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#7A7468] uppercase tracking-[0.1em]">
                  On-Time Delivery
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-medium text-[#8B7355] leading-none">
                  ISO
                </div>
                <p className="mt-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#7A7468] uppercase tracking-[0.1em]">
                  9001:2015 Certified
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── Product Categories Grid ─── */}
      <section className="section-py bg-[#F3EFE9] relative z-20">
        <div className="container-fluid">
          <ScrollReveal>
            <SectionHeading
              label="What We Offer"
              title="Product Categories"
              subtitle="Explore our specialized range of sealing and fluid-handling solutions"
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-[clamp(1.25rem,2.5vw,1.75rem)] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <StaggerItem key={cat.id}>
                <Link href={`/products?category=${cat.slug}`} className="block group">
                  <ImageZoom className="card-editorial bg-[#FAF8F5] h-full">
                    <div className="p-[clamp(1.5rem,3vw,2.25rem)] flex flex-col justify-between h-full">
                      <div>
                        {/* Number marker */}
                        <span className="num-marker text-[clamp(0.75rem,0.8vw,0.875rem)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Icon Container */}
                        <div className="mt-[clamp(1.5rem,3vh,2rem)] mb-[clamp(1.25rem,2.5vh,1.75rem)] flex h-[clamp(2.75rem,4vw,3.5rem)] w-[clamp(2.75rem,4vw,3.5rem)] items-center justify-center rounded-full border border-[#E8E2D9] group-hover:border-[#8B7355] group-hover:bg-[#8B7355] group-hover:text-[#FAF8F5] transition-all duration-500">
                          <svg
                            className="w-[clamp(1.25rem,1.6vw,1.5rem)] h-[clamp(1.25rem,1.6vw,1.5rem)] text-[#7A7468] group-hover:text-[#FAF8F5] transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>

                        <h3 className="font-serif text-[clamp(1.25rem,1.6vw,1.5rem)] font-medium text-[#1A1A1A] group-hover:text-[#8B7355] transition-colors">
                          {cat.name}
                        </h3>
                        <p className="mt-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.8125rem,0.85vw,0.9375rem)] text-[#7A7468] leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>
                      </div>

                      {/* Explore Link */}
                      <div className="mt-[clamp(1.25rem,2.5vh,1.75rem)] flex items-center gap-[clamp(0.25rem,0.5vw,0.375rem)] text-[clamp(0.75rem,0.8vw,0.8125rem)] font-medium tracking-[0.08em] uppercase text-[#8B7355] hover-arrow">
                        <span>Explore</span>
                        <span>→</span>
                      </div>
                    </div>
                  </ImageZoom>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Capabilities Interactive Accordion Section ─── */}
      <section className="section-py bg-[#FAF8F5] relative z-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,5rem)]">
            {/* Left heading */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="right">
                <p className="section-label mb-[clamp(0.75rem,1.5vh,1rem)]">What We Do</p>
                <h2 className="font-serif fluid-heading text-[#1A1A1A]">
                  Our Capabilities
                </h2>
                <p className="mt-3 text-[clamp(0.875rem,0.95vw,1rem)] text-[#7A7468] leading-relaxed">
                  Click any capability to expand detailed technical specifications and quality assurance standards.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Interactive Accordion */}
            <div className="lg:col-span-8">
              <CapabilitiesAccordion items={capabilities} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
