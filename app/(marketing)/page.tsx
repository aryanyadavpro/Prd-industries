import { LinkButton } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody } from "@/components/ui/Card";
import { categories } from "@/lib/mockData";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const stats = [
  { value: `${new Date().getFullYear() - siteConfig.foundedYear}+`, label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "1,200+", label: "Clients Served" },
  { value: "99%", label: "On-Time Delivery" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-py overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-[25vh] left-[15vw] w-[40vw] h-[40vw] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="container-fluid relative">
          <div className="mx-auto max-w-[clamp(20rem,60vw,48rem)] text-center">
            <p className="mb-[clamp(0.75rem,2vw,1rem)] inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-[clamp(0.75rem,2.5vw,1rem)] py-[clamp(0.25rem,0.8vw,0.375rem)] text-[clamp(0.75rem,1.2vw,0.875rem)] font-medium text-amber-400">
              Trusted Since {siteConfig.foundedYear}
            </p>
            <h1 className="fluid-hero font-extrabold tracking-tight text-white">
              Precision-Engineered{" "}
              <span className="text-amber-400">Industrial Components</span>
            </h1>
            <p className="fluid-subhero mt-[clamp(0.75rem,2.5vw,1.5rem)] text-gray-400">
              From gaskets to flanges — high-quality components built to
              withstand extreme conditions. Request a quote in seconds.
            </p>
            <div className="mt-[clamp(1.5rem,4vw,2.5rem)] flex flex-col sm:flex-row items-center justify-center gap-[clamp(0.75rem,2vw,1rem)]">
              <LinkButton href="/products" size="lg">
                Browse Products
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Get a Quote
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-py bg-gray-900/30">
        <div className="container-fluid">
          <SectionHeading
            title="Product Categories"
            subtitle="Explore our range of industrial sealing and connection solutions"
          />
          <div className="grid grid-cols-1 gap-[clamp(0.75rem,2.5vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`}>
                <Card>
                  <CardBody className="text-center">
                    <div className="mx-auto mb-[clamp(0.75rem,2vw,1rem)] flex h-[clamp(2.5rem,5vw,3.5rem)] w-[clamp(2.5rem,5vw,3.5rem)] items-center justify-center rounded-[clamp(0.5rem,1.2vw,0.75rem)] bg-amber-500/10">
                      <svg className="icon-lg text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-[clamp(0.95rem,1.6vw,1.125rem)] font-semibold text-white">
                      {cat.name}
                    </h3>
                    <p className="mt-[clamp(0.25rem,0.8vw,0.375rem)] text-[clamp(0.8rem,1.2vw,0.875rem)] text-gray-400">
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
          <div className="grid grid-cols-2 gap-[clamp(1rem,4vw,2rem)] lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-amber-400">
                  {stat.value}
                </p>
                <p className="mt-[clamp(0.125rem,0.5vw,0.25rem)] text-[clamp(0.8rem,1.3vw,0.95rem)] text-gray-400">
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
          <div className="rounded-[clamp(0.75rem,2vw,1rem)] bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-[clamp(1.5rem,6vw,4rem)] text-center">
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white">
              Need a Custom Solution?
            </h2>
            <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.9rem,1.5vw,1.125rem)] text-gray-400 max-w-[clamp(16rem,45vw,36rem)] mx-auto">
              Our engineering team can source or manufacture components to your
              exact specifications. Reach out today.
            </p>
            <div className="mt-[clamp(1.5rem,4vw,2rem)] flex flex-col sm:flex-row items-center justify-center gap-[clamp(0.75rem,2vw,1rem)]">
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
