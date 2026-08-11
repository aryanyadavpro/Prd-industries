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
    <main className="section-py pt-[clamp(5rem,10vh,7.5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-fluid">
        {/* Breadcrumb */}
        <nav className="mb-[clamp(2rem,4vh,3rem)] flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-[clamp(0.75rem,0.8vw,0.8125rem)] text-[#7A7468]">
          <Link href="/products" className="hover:text-[#8B7355] transition-colors">
            Products
          </Link>
          {category && (
            <>
              <span className="text-[#E8E2D9]">/</span>
              <span className="text-[#7A7468]">{category.name}</span>
            </>
          )}
          <span className="text-[#E8E2D9]">/</span>
          <span className="font-medium text-[#1A1A1A]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2">
          {/* Image */}
          <div className="border border-[#E8E2D9] rounded-[clamp(0.75rem,1.5vw,1.25rem)] overflow-hidden bg-[#F3EFE9]">
            <div className="relative aspect-square flex items-center justify-center">
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
                  className="w-[clamp(3rem,5vw,4rem)] h-[clamp(3rem,5vw,4rem)] text-[#B0A898]"
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
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              {category && (
                <span className="inline-block text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.1em] uppercase text-[#8B7355] mb-[clamp(0.75rem,1.5vh,1rem)]">
                  {category.name}
                </span>
              )}
              <h1 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-medium text-[#1A1A1A] tracking-tight">
                {product.name}
              </h1>
              <p className="mt-[clamp(0.5rem,1vh,0.75rem)] fluid-body text-[#7A7468] leading-relaxed">
                {product.short_description}
              </p>

              {/* Specs Table */}
              <div className="mt-[clamp(2rem,4vh,3rem)]">
                <h2 className="text-[clamp(0.6875rem,0.75vw,0.8125rem)] font-medium tracking-[0.1em] uppercase text-[#7A7468] mb-[clamp(0.75rem,1.5vh,1rem)]">
                  Technical Specifications
                </h2>
                <SpecTable specs={product.specs} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-[clamp(2rem,4vh,3rem)] pt-[clamp(1.5rem,3vh,2rem)] border-t border-[#E8E2D9] flex flex-col sm:flex-row gap-[clamp(0.75rem,1.5vw,1rem)]">
              <LinkButton
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                size="lg"
                className="w-full sm:w-auto"
              >
                Send Enquiry
              </LinkButton>
              <LinkButton
                href="/products"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                ← Back to Products
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
