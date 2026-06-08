"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Photo, productSlug } from "@/data/photos";

interface ProductGroup {
  productId: string;
  photos: Photo[];
  thumbnail: Photo;
  name: string;
  dateAdded: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const products = useMemo(() => {
    const map = new Map<string, Photo[]>();
    for (const p of photos) {
      const group = map.get(p.productId);
      if (group) {
        group.push(p);
      } else {
        map.set(p.productId, [p]);
      }
    }

    return Array.from(map.entries())
      .map(([productId, groupPhotos]) => ({
        productId,
        photos: groupPhotos,
        thumbnail: groupPhotos[0],
        name: groupPhotos[0].category,
        dateAdded: groupPhotos.reduce(
          (latest, p) => (p.dateAdded > latest ? p.dateAdded : latest),
          ""
        ),
      }))
      .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  }, [photos]);

  return (
    <div className="grid grid-cols-2 gap-5">
      {products.map((product, i) => (
        <Link
          key={product.productId}
          href={`/product/${productSlug(product.productId)}`}
          className="group block animate-fade-up"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-2 ring-1 ring-white/5 transition-all duration-300 group-hover:ring-accent/40 group-hover:shadow-lg group-hover:shadow-accent/10">
            <Image
              src={product.thumbnail.src}
              alt={product.thumbnail.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            {product.photos.length > 1 && (
              <span className="absolute top-2 right-2 bg-black/60 text-accent-light text-xs px-2 py-0.5 rounded-full backdrop-blur-sm border border-accent/20">
                {product.photos.length}张
              </span>
            )}
          </div>
          <p className="mt-2.5 text-sm text-neutral-400 group-hover:text-accent-light transition-colors duration-200 text-center font-body">
            {product.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
