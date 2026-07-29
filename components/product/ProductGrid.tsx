import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/database";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-400 py-[clamp(2rem,6vh,3rem)]">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[clamp(1rem,3vw,1.5rem)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
