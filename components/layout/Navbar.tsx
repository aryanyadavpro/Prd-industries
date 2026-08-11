"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        // Pinned hero track is 250vh tall. Un-pinning threshold is around 1.35 * viewport height.
        // Navbar stays transparent with white text until scroll passes the dark pinned hero section.
        const heroThreshold = window.innerHeight * 1.35;
        setScrolledPastHero(window.scrollY > heroThreshold);
      } else {
        setScrolledPastHero(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Dark state = On home page and still scrolling within the dark hero frame sequence
  const isDarkState = isHome ? !scrolledPastHero : false;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolledPastHero
          ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D9] py-[clamp(0.75rem,1.5vh,1rem)] shadow-sm"
          : "bg-transparent py-[clamp(1.25rem,2.5vh,1.75rem)]"
      }`}
    >
      <nav className="mx-auto flex max-w-[82rem] items-center justify-between px-[clamp(1.25rem,5vw,3rem)]">
        {/* Logo — Serif brand name */}
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <span
            className={`font-serif text-[clamp(1.35rem,2.2vw,1.75rem)] font-medium tracking-tight transition-colors duration-500 ${
              isDarkState
                ? "text-[#FAF8F5] group-hover:text-[#FAF8F5]/80"
                : "text-[#1A1A1A] group-hover:text-[#8B7355]"
            }`}
            style={{ fontStyle: "italic" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav links — center */}
        <ul className="hidden md:flex items-center gap-[clamp(1.5rem,3vw,2.75rem)]">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-[clamp(0.8rem,0.9vw,0.875rem)] font-medium tracking-[0.08em] uppercase transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:transition-all after:duration-300 ${
                    isDarkState
                      ? isActive
                        ? "text-[#FAF8F5] after:w-full after:bg-[#FAF8F5]"
                        : "text-[#FAF8F5]/80 hover:text-[#FAF8F5] after:w-0 after:bg-[#FAF8F5] hover:after:w-full"
                      : isActive
                      ? "text-[#1A1A1A] after:w-full after:bg-[#8B7355]"
                      : "text-[#7A7468] hover:text-[#1A1A1A] after:w-0 after:bg-[#8B7355] hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center justify-center border px-[clamp(1.125rem,2vw,1.625rem)] py-[clamp(0.45rem,0.9vh,0.6rem)] text-[clamp(0.7rem,0.8vw,0.8125rem)] font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
            isDarkState
              ? "border-[#FAF8F5]/60 text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#1A1A1A] hover:border-[#FAF8F5]"
              : "border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F5]"
          }`}
        >
          Contact
        </Link>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] transition-colors duration-500 ${
            isDarkState && !open ? "text-[#FAF8F5]" : "text-[#1A1A1A]"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out border-t border-[#E8E2D9] bg-[#FAF8F5]/98 backdrop-blur-md ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <div className="px-[clamp(1.25rem,5vw,3rem)] py-[clamp(1.5rem,4vh,2.5rem)] flex flex-col gap-[clamp(0.25rem,1vh,0.5rem)]">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-[clamp(0.5rem,1.2vh,0.75rem)] text-[clamp(1.5rem,4vw,2rem)] font-serif font-medium text-[#1A1A1A] hover:text-[#8B7355] transition-colors border-b border-[#E8E2D9] last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-[clamp(1rem,2vh,1.5rem)] inline-flex items-center justify-center border border-[#1A1A1A] py-[clamp(0.75rem,1.5vh,1rem)] text-[clamp(0.75rem,1vw,0.875rem)] font-medium tracking-[0.08em] uppercase text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F5] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
