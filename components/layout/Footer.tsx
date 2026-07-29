import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-[clamp(1rem,5vw,2.5rem)] py-[clamp(2rem,6vh,4rem)]">
        <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,3rem)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-white">
              {siteConfig.name}
            </h3>
            <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[clamp(0.7rem,1.1vw,0.8rem)] font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="mt-[clamp(0.5rem,1.5vw,0.75rem)] space-y-[clamp(0.375rem,1vw,0.5rem)]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[clamp(0.7rem,1.1vw,0.8rem)] font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="mt-[clamp(0.5rem,1.5vw,0.75rem)] space-y-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-400">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[clamp(0.7rem,1.1vw,0.8rem)] font-semibold uppercase tracking-wider text-gray-400">
              Address
            </h4>
            <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.8rem,1.2vw,0.9rem)] text-gray-400 leading-relaxed">
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div className="mt-[clamp(2rem,5vh,3rem)] border-t border-gray-800 pt-[clamp(1rem,3vh,1.5rem)] text-center">
          <p className="text-[clamp(0.75rem,1vw,0.85rem)] text-gray-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
