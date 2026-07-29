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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
        <div className="container-fluid relative">
          <div className="mx-auto max-w-[clamp(20rem,60vw,48rem)] text-center">
            <SectionHeading
              title="About PRD Industries"
              subtitle={`For over ${yearsInBusiness} years, we've been engineering industrial sealing and connection solutions that perform under pressure — literally.`}
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-gray-900/30">
        <div className="container-fluid">
          <div className="mx-auto max-w-[clamp(20rem,60vw,48rem)]">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-bold text-white">
              Our Story
            </h2>
            <div className="mt-[clamp(1rem,3vw,1.5rem)] space-y-[clamp(0.75rem,2vw,1rem)] text-[clamp(0.9rem,1.3vw,1rem)] text-gray-400 leading-relaxed">
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
          <div className="grid grid-cols-1 gap-[clamp(0.75rem,2.5vw,1.5rem)] sm:grid-cols-2">
            {capabilities.map((cap) => (
              <Card key={cap.title}>
                <CardBody>
                  <h3 className="text-[clamp(1rem,1.8vw,1.25rem)] font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.85rem,1.2vw,0.95rem)] text-gray-400 leading-relaxed">
                    {cap.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-gray-900/30">
        <div className="container-fluid text-center">
          <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.9rem,1.5vw,1.1rem)] text-gray-400 max-w-[clamp(16rem,45vw,36rem)] mx-auto">
            Whether you need standard components or a fully custom solution,
            we&apos;re here to help.
          </p>
          <div className="mt-[clamp(1.5rem,4vw,2rem)]">
            <LinkButton href="/contact" size="lg">
              Get in Touch
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
