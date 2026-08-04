import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#E0E5EC] border-t border-[#A3B1C6]/30">
      <div className="mx-auto max-w-7xl px-[clamp(1rem,5vw,2.5rem)] py-[clamp(2.5rem,6vh,4.5rem)]">
        <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,3rem)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Card */}
          <div className="p-6 rounded-[28px] neu-extruded">
            <h3 className="font-display text-[clamp(1.1rem,2vw,1.35rem)] font-bold text-[#3D4852]">
              {siteConfig.name}
            </h3>
            <p className="mt-3 text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280] leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="p-6 rounded-[28px] neu-extruded">
            <h4 className="font-display text-[clamp(0.75rem,1.1vw,0.85rem)] font-bold uppercase tracking-wider text-[#3D4852]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280] hover:text-[#6C63FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="p-6 rounded-[28px] neu-extruded">
            <h4 className="font-display text-[clamp(0.75rem,1.1vw,0.85rem)] font-bold uppercase tracking-wider text-[#3D4852]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#6C63FF] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-[#6C63FF] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Address */}
          <div className="p-6 rounded-[28px] neu-extruded">
            <h4 className="font-display text-[clamp(0.75rem,1.1vw,0.85rem)] font-bold uppercase tracking-wider text-[#3D4852]">
              Address
            </h4>
            <p className="mt-4 text-[clamp(0.85rem,1.2vw,0.95rem)] text-[#6B7280] leading-relaxed">
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center border-t border-[#A3B1C6]/30">
          <p className="text-[clamp(0.75rem,1vw,0.85rem)] font-medium text-[#6B7280]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
