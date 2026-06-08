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
    <main className="mx-auto max-w-lg px-4 py-10 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition mb-6"
      >
        ← 返回首页
      </Link>

      <h1 className="text-xl font-light tracking-wide text-white mb-6">
        {name}
      </h1>

      <ProductGallery photos={group} />
    </main>
  );
}
