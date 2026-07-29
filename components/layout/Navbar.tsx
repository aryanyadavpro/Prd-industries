"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-[clamp(1rem,5vw,2.5rem)] py-[clamp(0.75rem,1.5vh,1rem)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[clamp(0.375rem,1vw,0.5rem)] group">
          <span className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-[clamp(1.5rem,3vw,2.5rem)]">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[clamp(0.875rem,1.2vw,1rem)] text-gray-300 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-amber-500 px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.375rem,1vh,0.5rem)] text-[clamp(0.8rem,1.1vw,0.9rem)] font-semibold text-gray-950 hover:bg-amber-400 transition-colors"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-[clamp(2rem,8vw,2.5rem)] h-[clamp(2rem,8vw,2.5rem)] gap-[clamp(0.25rem,0.8vw,0.375rem)]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-[clamp(1.25rem,5vw,1.5rem)] h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[clamp(0.375rem,1.2vw,0.5rem)]" : ""}`}
          />
          <span
            className={`block w-[clamp(1.25rem,5vw,1.5rem)] h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[clamp(1.25rem,5vw,1.5rem)] h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[clamp(0.375rem,1.2vw,0.5rem)]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[50vh]" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-[clamp(0.125rem,0.5vw,0.25rem)] px-[clamp(1rem,5vw,2.5rem)] pb-[clamp(1rem,3vw,1.5rem)]">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-[clamp(0.375rem,1.2vw,0.5rem)] text-[clamp(0.9rem,2.5vw,1rem)] text-gray-300 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-[clamp(0.5rem,1.5vw,0.75rem)] block rounded-lg bg-amber-500 px-[clamp(0.75rem,3vw,1rem)] py-[clamp(0.5rem,1.5vw,0.625rem)] text-center font-semibold text-gray-950 hover:bg-amber-400 transition-colors"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
