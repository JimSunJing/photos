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
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Link
          key={product.productId}
          href={`/product/${productSlug(product.productId)}`}
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-700">
            <Image
              src={product.thumbnail.src}
              alt={product.thumbnail.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 512px"
            />
            {product.photos.length > 1 && (
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                {product.photos.length}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-neutral-400 group-hover:text-white transition text-center">
            {product.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
