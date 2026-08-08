import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* CTA Section — Dark with large serif heading */}
      <section className="relative min-h-[clamp(24rem,50vh,36rem)] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,#8B7355_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#8B7355_0%,transparent_50%)]" />

        <div className="relative z-10 text-center px-[clamp(1.25rem,5vw,3rem)] max-w-[clamp(20rem,60vw,48rem)]">
          <p className="section-label text-[#B0A898] mb-[clamp(1rem,2vh,1.5rem)]">
            Start Your Project
          </p>
          <h2 className="font-serif text-[#FAF8F5] fluid-display mb-[clamp(1.5rem,3vh,2.5rem)]">
            Every Component Starts Somewhere.
          </h2>
          <Link
            href="/contact"
            className="btn-editorial btn-outline-light btn-lg hover-arrow"
          >
            <span>Get in Touch</span>
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Footer Grid */}
      <div className="bg-[#1A1A1A] border-t border-[#2A2A28]">
        <div className="mx-auto max-w-[82rem] px-[clamp(1.25rem,5vw,3rem)] py-[clamp(3rem,6vh,5rem)]">
          <div className="grid grid-cols-1 gap-[clamp(2.5rem,5vw,4rem)] sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block">
                <span
                  className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-[#FAF8F5]"
                  style={{ fontStyle: "italic" }}
                >
                  {siteConfig.name}
                </span>
              </Link>
              <p className="mt-[clamp(0.75rem,1.5vh,1rem)] text-[clamp(0.8125rem,0.8vw,0.9375rem)] text-[#7A7468] leading-relaxed max-w-[18rem]">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.15em] text-[#7A7468] mb-[clamp(1rem,2vh,1.5rem)]">
                Navigation
              </h4>
              <ul className="space-y-[clamp(0.5rem,1vh,0.75rem)]">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[clamp(0.875rem,0.9vw,0.9375rem)] text-[#B0A898] hover:text-[#FAF8F5] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.15em] text-[#7A7468] mb-[clamp(1rem,2vh,1.5rem)]">
                Contact
              </h4>
              <ul className="space-y-[clamp(0.5rem,1vh,0.75rem)] text-[clamp(0.875rem,0.9vw,0.9375rem)] text-[#B0A898]">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#FAF8F5] transition-colors duration-300"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.phone && (
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="hover:text-[#FAF8F5] transition-colors duration-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-[clamp(0.6875rem,0.7vw,0.75rem)] font-medium uppercase tracking-[0.15em] text-[#7A7468] mb-[clamp(1rem,2vh,1.5rem)]">
                Location
              </h4>
              <p className="text-[clamp(0.875rem,0.9vw,0.9375rem)] text-[#B0A898] leading-relaxed">
                {siteConfig.address}
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-[clamp(3rem,5vh,4rem)] pt-[clamp(1.5rem,2vh,2rem)] border-t border-[#2A2A28] flex flex-col sm:flex-row items-center justify-between gap-[clamp(0.5rem,1vh,1rem)]">
            <p className="text-[clamp(0.6875rem,0.7vw,0.8125rem)] text-[#7A7468]">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-[clamp(0.6875rem,0.7vw,0.8125rem)] text-[#7A7468]">
              Precision-Engineered Components
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
