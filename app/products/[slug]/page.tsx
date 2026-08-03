import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, categories } from "@/lib/mockData";
import { SpecTable } from "@/components/product/SpecTable";
import { LinkButton } from "@/components/ui/Button";


interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.short_description,
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category_id);

  return (
    <main className="section-py">
      <div className="container-fluid">
        {/* Breadcrumb */}
        <nav className="mb-[clamp(1rem,3vw,2rem)] text-[clamp(0.8rem,1.2vw,0.875rem)] text-gray-500">
          <a href="/products" className="hover:text-amber-400 transition-colors">
            Products
          </a>
          {category && (
            <>
              <span className="mx-[clamp(0.375rem,0.8vw,0.5rem)]">/</span>
              <span className="text-gray-400">{category.name}</span>
            </>
          )}
          <span className="mx-[clamp(0.375rem,0.8vw,0.5rem)]">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-[clamp(1.5rem,5vw,3rem)] lg:grid-cols-2">
          {/* Image area */}
          <div className="aspect-square rounded-[clamp(0.75rem,2vw,1rem)] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 flex items-center justify-center">
            <svg
              className="icon-hero text-gray-700"
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

          {/* Details */}
          <div>
            {category && (
              <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/30 px-[clamp(0.5rem,1.5vw,0.75rem)] py-[clamp(0.125rem,0.5vw,0.25rem)] text-[clamp(0.7rem,1vw,0.8rem)] font-medium text-amber-400 mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                {category.name}
              </span>
            )}
            <h1 className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold text-white">
              {product.name}
            </h1>
            <p className="mt-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.9rem,1.4vw,1.1rem)] text-gray-400 leading-relaxed">
              {product.short_description}
            </p>

            {/* Specs */}
            <div className="mt-[clamp(1.25rem,3.5vw,2rem)]">
              <h2 className="text-[clamp(1rem,1.8vw,1.25rem)] font-semibold text-white mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                Technical Specifications
              </h2>
              <SpecTable specs={product.specs} />
            </div>

            {/* Actions */}
            <div className="mt-[clamp(1.25rem,3.5vw,2rem)] flex flex-col sm:flex-row gap-[clamp(0.5rem,1.5vw,0.75rem)]">
              <LinkButton
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                size="lg"
              >
                Send Enquiry
              </LinkButton>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
