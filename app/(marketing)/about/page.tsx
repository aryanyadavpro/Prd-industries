import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

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
    <main>
      {/* Hero */}
      <section className="section-py relative overflow-hidden">
        <div className="container-fluid relative">
          <div className="mx-auto max-w-[clamp(20rem,60vw,52rem)] text-center">
            <SectionHeading
              title={`About ${siteConfig.name}`}
              subtitle={`For over ${yearsInBusiness} years, we've been engineering industrial sealing and connection solutions that perform under pressure — literally.`}
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py">
        <div className="container-fluid">
          <div className="mx-auto max-w-[clamp(20rem,60vw,52rem)] p-[clamp(2rem,5vw,3.5rem)] rounded-[32px] neu-extruded">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-[#3D4852]">
              Our Story
            </h2>
            <div className="mt-[clamp(1rem,3vw,1.5rem)] space-y-[clamp(0.875rem,2vw,1.125rem)] text-[clamp(0.925rem,1.3vw,1.05rem)] text-[#6B7280] leading-relaxed">
              <p>
                Founded in {siteConfig.foundedYear}, {siteConfig.name} started
                as a small workshop supplying gaskets to local manufacturing
                plants. Over two decades, we&apos;ve grown into a comprehensive
                industrial component supplier serving clients across India and
                the Middle East.
              </p>
              <p>
                Our product line now spans gaskets, seals, flanges, O-rings, and
                custom-engineered solutions — all manufactured under strict
                quality controls and international standards compliance.
              </p>
              <p>
                We believe in building long-term relationships with our clients
                through consistent quality, competitive pricing, and responsive
                support. When you work with us, you get a partner — not just a
                supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-py">
        <div className="container-fluid">
          <SectionHeading
            title="Our Capabilities"
            subtitle="What sets us apart in the industrial components market"
          />
          <div className="grid grid-cols-1 gap-[clamp(1.25rem,3vw,2rem)] sm:grid-cols-2">
            {capabilities.map((cap) => (
              <Card key={cap.title}>
                <CardBody>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl neu-inset-deep">
                    <svg className="w-6 h-6 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold text-[#3D4852]">
                    {cap.title}
                  </h3>
                  <p className="mt-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280] leading-relaxed">
                    {cap.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container-fluid text-center">
          <div className="rounded-[32px] neu-extruded p-[clamp(2rem,6vw,4rem)]">
            <h2 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold text-[#3D4852]">
              Ready to Work Together?
            </h2>
            <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.95rem,1.5vw,1.1rem)] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Whether you need standard components or a fully custom solution,
              we&apos;re here to help.
            </p>
            <div className="mt-[clamp(1.5rem,4vw,2rem)]">
              <LinkButton href="/contact" size="lg">
                Get in Touch
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
