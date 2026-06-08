import { notFound } from "next/navigation";
import Link from "next/link";
import { photos, productSlug, productIdFromSlug } from "@/data/photos";
import ProductGallery from "@/components/product-gallery";

export function generateStaticParams() {
  const ids = [...new Set(photos.map((p) => p.productId))];
  return ids.map((id) => ({ productId: productSlug(id) }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId: slug } = await params;
  const productId = productIdFromSlug(slug);
  if (!productId) notFound();

  const group = photos.filter((p) => p.productId === productId);
  if (group.length === 0) notFound();

  const name = group[0].category;

  return (
    <main className="mx-auto max-w-lg px-4 py-12 sm:py-20">
      <nav className="mb-8 animate-fade-up">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-accent-light transition-colors duration-200 font-body"
        >
          <span className="text-lg leading-none">←</span>
          返回首页
        </Link>
      </nav>

      <h1 className="text-2xl font-light tracking-wide text-white mb-8 font-heading animate-fade-up">
        {name}
      </h1>

      <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
        <ProductGallery photos={group} />
      </div>
    </main>
  );
}
