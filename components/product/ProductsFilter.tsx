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
      {/* Category tabs */}
      <div className="mb-[clamp(1.5rem,4vw,2.5rem)] flex flex-wrap gap-[clamp(0.375rem,1vw,0.5rem)] justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.8rem,1.2vw,0.9rem)] font-medium transition-colors cursor-pointer ${
            activeCategory === null
              ? "bg-amber-500 text-gray-950"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-[clamp(0.75rem,2.5vw,1.25rem)] py-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.8rem,1.2vw,0.9rem)] font-medium transition-colors cursor-pointer ${
              activeCategory === cat.id
                ? "bg-amber-500 text-gray-950"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
