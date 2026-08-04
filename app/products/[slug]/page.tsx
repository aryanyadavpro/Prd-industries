import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getCategories, getAllProductSlugs } from "@/lib/supabase/queries";
import { SpecTable } from "@/components/product/SpecTable";
import { LinkButton } from "@/components/ui/Button";

export const revalidate = 3600; // ISR: revalidate every hour

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.short_description,
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category_id);
  const imageUrl = product.images?.[0];
  const hasRealImage = imageUrl && !imageUrl.endsWith(".svg");

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short_description,
    image: hasRealImage ? [`${baseUrl}${imageUrl}`] : [],
    category: category?.name,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-fluid">
        {/* Breadcrumb Pill */}
        <nav className="mb-[clamp(1.5rem,3vw,2.5rem)] inline-flex items-center gap-2 p-2 rounded-full neu-inset-sm text-[clamp(0.8rem,1.2vw,0.875rem)] font-medium text-[#6B7280]">
          <Link href="/products" className="px-3 py-1 rounded-full hover:text-[#6C63FF] hover:neu-extruded-sm transition-all">
            Products
          </Link>
          {category && (
            <>
              <span>/</span>
              <span className="px-2 py-1 text-[#3D4852]">{category.name}</span>
            </>
          )}
          <span>/</span>
          <span className="px-2 py-1 font-semibold text-[#3D4852]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,3.5rem)] lg:grid-cols-2">
          {/* Deep Inset Image Container */}
          <div className="p-4 rounded-[32px] neu-extruded">
            <div className="relative aspect-square rounded-[24px] neu-inset-deep flex items-center justify-center overflow-hidden">
              {hasRealImage ? (
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <svg
                  className="w-16 h-16 text-[#6B7280]"
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

          {/* Details Card */}
          <div className="p-[clamp(1.5rem,4vw,2.5rem)] rounded-[32px] neu-extruded flex flex-col justify-between">
            <div>
              {category && (
                <span className="inline-block rounded-full neu-inset-sm px-4 py-1.5 text-[clamp(0.75rem,1.1vw,0.85rem)] font-display font-bold text-[#6C63FF] mb-4">
                  {category.name}
                </span>
              )}
              <h1 className="font-display text-[clamp(1.85rem,4.5vw,2.75rem)] font-extrabold text-[#3D4852] tracking-tight">
                {product.name}
              </h1>
              <p className="mt-3 text-[clamp(0.95rem,1.4vw,1.1rem)] text-[#6B7280] leading-relaxed">
                {product.short_description}
              </p>

              {/* Specs Table */}
              <div className="mt-8">
                <h2 className="font-display text-[clamp(1.1rem,1.8vw,1.3rem)] font-bold text-[#3D4852] mb-3">
                  Technical Specifications
                </h2>
                <SpecTable specs={product.specs} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-[#A3B1C6]/30 flex flex-col sm:flex-row gap-4">
              <LinkButton
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                size="lg"
                className="w-full sm:w-auto"
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
