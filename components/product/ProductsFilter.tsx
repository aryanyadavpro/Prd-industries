"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Category, Product } from "@/types/database";

interface ProductsFilterProps {
  categories: Category[];
  products: Product[];
}

export default function ProductsFilter({ categories, products }: ProductsFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category_id === activeCategory)
    : products;

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-[clamp(2rem,5vw,3.5rem)] flex flex-wrap gap-[clamp(0.375rem,0.8vw,0.5rem)] justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.375rem,0.8vh,0.5rem)] text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.08em] uppercase border transition-all duration-300 cursor-pointer ${
            activeCategory === null
              ? "bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]"
              : "bg-transparent text-[#7A7468] border-[#E8E2D9] hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.375rem,0.8vh,0.5rem)] text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.08em] uppercase border transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]"
                : "bg-transparent text-[#7A7468] border-[#E8E2D9] hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </>
  );
}
