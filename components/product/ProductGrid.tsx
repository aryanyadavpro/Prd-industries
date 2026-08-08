import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/database";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-center text-[#7A7468] py-[clamp(3rem,8vh,5rem)] fluid-small">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[clamp(1.25rem,3vw,2rem)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
