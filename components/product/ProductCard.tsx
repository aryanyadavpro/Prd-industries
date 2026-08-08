"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/database";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0];
  const hasRealImage = imageUrl && !imageUrl.endsWith(".svg");

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="h-full"
    >
      <Link href={`/products/${product.slug}`} className="block group h-full">
        <div className="card-editorial h-full flex flex-col justify-between">
          {/* Image area */}
          <div className="relative aspect-[4/3] bg-[#F3EFE9] overflow-hidden">
            {hasRealImage ? (
              <Image
                src={imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <svg
                  className="w-[clamp(2.5rem,4vw,3.5rem)] h-[clamp(2.5rem,4vw,3.5rem)] text-[#B0A898]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Text content */}
          <div className="p-[clamp(1rem,2.5vw,1.5rem)] flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-[clamp(1.05rem,1.5vw,1.25rem)] font-medium text-[#1A1A1A] group-hover:text-[#8B7355] transition-colors duration-300">
                {product.name}
              </h3>
              <p className="mt-[clamp(0.25rem,0.5vh,0.5rem)] text-[clamp(0.8rem,0.85vw,0.875rem)] text-[#7A7468] line-clamp-2 leading-relaxed">
                {product.short_description}
              </p>
            </div>

            <div className="mt-[clamp(0.75rem,1.5vh,1rem)] flex items-center gap-[clamp(0.25rem,0.5vw,0.375rem)] text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.08em] uppercase text-[#8B7355] hover-arrow">
              <span>View Details</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
