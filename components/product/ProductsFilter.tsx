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
      {/* Category filter track */}
      <div className="mb-[clamp(2rem,5vw,3rem)] p-2 rounded-full neu-inset max-w-fit mx-auto flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.5rem,1vw,0.65rem)] text-[clamp(0.85rem,1.2vw,0.95rem)] font-display font-bold transition-all duration-300 cursor-pointer ${
            activeCategory === null
              ? "neu-accent text-white"
              : "neu-extruded-sm text-[#6B7280] hover:text-[#3D4852] hover:neu-extruded"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.5rem,1vw,0.65rem)] text-[clamp(0.85rem,1.2vw,0.95rem)] font-display font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? "neu-accent text-white"
                : "neu-extruded-sm text-[#6B7280] hover:text-[#3D4852] hover:neu-extruded"
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
