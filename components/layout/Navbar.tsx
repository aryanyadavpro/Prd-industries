"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E0E5EC]/90 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-[clamp(1rem,5vw,2.5rem)] py-[clamp(0.75rem,1.5vh,1rem)]">
        {/* Logo with extruded badge */}
        <Link href="/" className="flex items-center gap-[clamp(0.375rem,1vw,0.5rem)] group">
          <div className="flex items-center justify-center h-10 px-4 rounded-2xl neu-extruded group-hover:neu-extruded-hover transition-all duration-300">
            <span className="font-display text-[clamp(1.125rem,2.5vw,1.35rem)] font-extrabold tracking-tight text-[#3D4852] group-hover:text-[#6C63FF] transition-colors">
              {siteConfig.name}
            </span>
          </div>
        </Link>

        {/* Desktop nav pills */}
        <ul className="hidden md:flex items-center gap-2 p-1.5 rounded-full neu-inset-sm">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-4 py-2 rounded-full text-[clamp(0.85rem,1.2vw,0.95rem)] font-medium text-[#6B7280] hover:text-[#3D4852] hover:neu-extruded-sm transition-all duration-300 inline-block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-2xl neu-accent px-[clamp(1.125rem,2.5vw,1.5rem)] py-[clamp(0.5rem,1vh,0.65rem)] text-[clamp(0.85rem,1.1vw,0.95rem)] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-[1px]"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl neu-extruded active:neu-inset-sm text-[#3D4852] transition-all"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6 text-[#3D4852]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[60vh] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="mx-4 p-4 rounded-3xl neu-extruded flex flex-col gap-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-[#3D4852] hover:neu-inset-sm transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full text-center rounded-2xl neu-accent py-3 font-semibold text-white transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
