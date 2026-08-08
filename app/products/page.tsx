import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProductsFilter from "@/components/product/ProductsFilter";
import { getCategories, getProducts } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Products Catalog",
  description:
    "Explore our complete catalog of industrial gaskets, seals, flanges, and O-rings engineered for high pressure and extreme temperatures.",
};

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <main className="pt-[clamp(5rem,10vh,7.5rem)]">
      <section className="section-py-sm">
        <div className="container-fluid">
          <SectionHeading
            label="Our Catalog"
            title="Our Products"
            subtitle="Browse our complete catalog of industrial sealing and connection solutions"
          />

          <ProductsFilter categories={categories} products={products} />
        </div>
      </section>
    </main>
  );
}
