import Link from "next/link";
import { Card, CardBody } from "@/components/ui/Card";
import type { Product } from "@/types/database";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card>
        {/* Placeholder image area */}
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <svg
            className="icon-xl text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <CardBody>
          <h3 className="text-[clamp(0.95rem,1.8vw,1.125rem)] font-semibold text-white">
            {product.name}
          </h3>
          <p className="mt-[clamp(0.375rem,1vw,0.5rem)] text-[clamp(0.8rem,1.3vw,0.875rem)] text-gray-400 line-clamp-2">
            {product.short_description}
          </p>
          <span className="mt-[clamp(0.5rem,1.5vw,0.75rem)] inline-block text-[clamp(0.75rem,1.1vw,0.85rem)] font-medium text-amber-400">
            View Details →
          </span>
        </CardBody>
      </Card>
    </Link>
  );
}
