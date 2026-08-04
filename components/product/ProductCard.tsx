import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@/components/ui/Card";
import type { Product } from "@/types/database";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0];
  const hasRealImage = imageUrl && !imageUrl.endsWith(".svg");

  return (
    <Link href={`/products/${product.slug}`} className="block group">
      <Card>
        {/* Carved image well */}
        <div className="p-4 pb-0">
          <div className="relative aspect-[4/3] neu-inset-deep rounded-[24px] flex items-center justify-center overflow-hidden">
            {hasRealImage ? (
              <Image
                src={imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <svg
                className="w-12 h-12 text-[#6B7280]/60"
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
            )}
          </div>
        </div>
        <CardBody className="pt-4">
          <h3 className="font-display text-[clamp(1rem,1.8vw,1.15rem)] font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-[clamp(0.8rem,1.3vw,0.875rem)] text-[#6B7280] line-clamp-2 leading-relaxed">
            {product.short_description}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[clamp(0.8rem,1.1vw,0.875rem)] font-semibold text-[#6C63FF] group-hover:translate-x-1 transition-transform">
            <span>View Details</span>
            <span>→</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
