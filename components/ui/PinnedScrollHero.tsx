"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";

const frameImages = [
  "/images/frames/frame_1.png",
  "/images/frames/frame_2.png",
  "/images/frames/frame_3.png",
  "/images/frames/frame_4.png",
];

export function PinnedScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // Distance scrolled into this 250vh section
      const currentScroll = Math.max(0, Math.min(totalScrollable, -rect.top));
      const progress = currentScroll / totalScrollable; // 0 to 1

      // Calculate target frame index (0, 1, 2, 3)
      const index = Math.min(
        frameImages.length - 1,
        Math.floor(progress * frameImages.length)
      );
      setFrameIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full">
      {/* Sticky Viewport Container — Pinned to screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#1A1A1A] flex items-center">
        {/* Layered Single-Gasket Frame Images */}
        {frameImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              frameIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`Precision Gasket Assembly Frame ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Dark Vignette Gradient Overlays for crisp text contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]/20 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/40 pointer-events-none" />

        {/* Hero Text Content — Centered inside sticky 100vh Viewport */}
        <div className="relative z-30 container-fluid pt-[clamp(4rem,10vh,6rem)]">
          <div className="max-w-[clamp(22rem,58vw,52rem)]">
            {/* Top Label Badge */}
            <div className="mb-[clamp(0.875rem,1.8vh,1.5rem)]">
              <span className="inline-block px-3 py-1 border border-[#FAF8F5]/30 rounded-full text-[clamp(0.7rem,0.8vw,0.8125rem)] font-medium tracking-[0.15em] uppercase text-[#FAF8F5]/90 bg-[#1A1A1A]/40 backdrop-blur-sm">
                ISO 9001:2015 Certified Manufacturer
              </span>
            </div>

            {/* Headline — Straight font, max 50px */}
            <h1 className="font-serif fluid-hero text-[#FAF8F5] leading-[1.08] tracking-tight">
              Precision Meets{" "}
              <span className="font-normal text-[#FAF8F5]/90 block sm:inline">
                Industrial Excellence.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-[clamp(1rem,2vh,1.5rem)] text-[clamp(0.875rem,1vw,1.0625rem)] text-[#FAF8F5]/80 max-w-[clamp(18rem,38vw,34rem)] leading-relaxed">
              From high-pressure spiral gaskets to custom forged pipe flanges —
              manufactured to micron tolerances and international standards.
            </p>

            {/* Action Buttons */}
            <div className="mt-[clamp(1.75rem,3.5vh,2.5rem)] flex flex-wrap items-center gap-[clamp(1rem,2vw,1.5rem)]">
              <LinkButton
                href="/products"
                variant="outline"
                size="lg"
                className="!border-[#FAF8F5]/60 !text-[#FAF8F5] hover:!bg-[#FAF8F5] hover:!text-[#1A1A1A] hover:!border-[#FAF8F5]"
              >
                Explore Products
              </LinkButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-[clamp(0.375rem,0.6vw,0.5rem)] text-[clamp(0.75rem,0.85vw,0.875rem)] font-medium tracking-[0.08em] uppercase text-[#FAF8F5]/90 hover:text-[#FAF8F5] transition-colors hover-arrow"
              >
                <span>Request a Quote</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
