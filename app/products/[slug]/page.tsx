interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold">
        Product: {slug}
      </h1>
    </main>
  );
}
