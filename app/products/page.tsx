import { SectionHeading } from "@/components/ui/SectionHeading";
import ProductsFilter from "@/components/product/ProductsFilter";
import { getCategories, getProducts } from "@/lib/supabase/queries";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <main>
      <section className="section-py">
        <div className="container-fluid">
          <SectionHeading
            title="Our Products"
            subtitle="Browse our complete catalog of industrial sealing and connection solutions"
          />

          <ProductsFilter categories={categories} products={products} />
        </div>
      </section>
    </main>
  );
}
