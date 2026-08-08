import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import {
  ScrollReveal,
  CapabilitiesAccordion,
} from "@/components/ui/AnimatedComponents";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our history, capabilities, and commitment to quality industrial components.`,
};

const capabilities = [
  {
    title: "Precision Manufacturing",
    description:
      "State-of-the-art CNC and forging facilities producing components to micron-level tolerances.",
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

export default function AboutPage() {
  const yearsInBusiness = new Date().getFullYear() - siteConfig.foundedYear;

  return (
    <main className="pt-[clamp(5rem,10vh,7.5rem)]">
      {/* Hero */}
      <section className="section-py-sm">
        <div className="container-narrow text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="section-label mb-[clamp(1rem,2vh,1.5rem)]">About Us</p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="font-serif fluid-display text-[#1A1A1A]">
              About {siteConfig.name}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35}>
            <p className="mt-[clamp(0.75rem,1.5vh,1.25rem)] fluid-body text-[#7A7468] max-w-[clamp(20rem,50vw,36rem)] mx-auto leading-relaxed">
              For over {yearsInBusiness} years, we&apos;ve been engineering industrial
              sealing and connection solutions that perform under pressure — literally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="container-fluid"><div className="divider" /></div>

      {/* Story */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,5vw,5rem)] items-start">
            {/* Left label */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <p className="section-label">Our Story</p>
              </ScrollReveal>
            </div>

            {/* Right content */}
            <div className="lg:col-span-9 space-y-[clamp(1.25rem,2.5vh,1.75rem)]">
              <ScrollReveal delay={0.1}>
                <p className="fluid-body text-[#1A1A1A] font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed">
                  Founded in {siteConfig.foundedYear}, {siteConfig.name} started
                  as a small workshop supplying gaskets to local manufacturing
                  plants. Over two decades, we&apos;ve grown into a comprehensive
                  industrial component supplier serving clients across India and
                  the Middle East.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="fluid-body text-[#7A7468] leading-relaxed">
                  Our product line now spans gaskets, seals, flanges, O-rings, and
                  custom-engineered solutions — all manufactured under strict
                  quality controls and international standards compliance.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="fluid-body text-[#7A7468] leading-relaxed">
                  We believe in building long-term relationships with our clients
                  through consistent quality, competitive pricing, and responsive
                  support. When you work with us, you get a partner — not just a
                  supplier.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-fluid"><div className="divider" /></div>

      {/* Capabilities */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,5rem)]">
            {/* Left heading */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="right">
                <p className="section-label mb-[clamp(0.75rem,1.5vh,1rem)]">What We Do</p>
                <h2 className="font-serif fluid-heading text-[#1A1A1A]">
                  Our Capabilities
                </h2>
              </ScrollReveal>
            </div>

            {/* Right capabilities */}
            <div className="lg:col-span-8">
              <CapabilitiesAccordion items={capabilities} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-[#F3EFE9]">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <p className="section-label mb-[clamp(1rem,2vh,1.5rem)]">Let&apos;s Collaborate</p>
            <h2 className="font-serif fluid-heading text-[#1A1A1A]">
              Ready to Work Together?
            </h2>
            <p className="mt-[clamp(0.75rem,1.5vh,1.25rem)] fluid-body text-[#7A7468] max-w-[clamp(18rem,40vw,30rem)] mx-auto leading-relaxed">
              Whether you need standard components or a fully custom solution,
              we&apos;re here to help.
            </p>
            <div className="mt-[clamp(1.5rem,3vh,2.5rem)]">
              <LinkButton href="/contact" size="lg">
                Get in Touch
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
