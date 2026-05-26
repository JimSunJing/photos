"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { type Photo } from "@/data/photos";

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);
  const [index, setIndex] = useState<number>(0);

  const open = useCallback(
    (photo: Photo) => {
      setSelected(photo);
      setIndex(photos.indexOf(photo));
    },
    [photos]
  );

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    const i = index > 0 ? index - 1 : photos.length - 1;
    setSelected(photos[i]);
    setIndex(i);
  }, [index, photos]);

  const next = useCallback(() => {
    const i = index < photos.length - 1 ? index + 1 : 0;
    setSelected(photos[i]);
    setIndex(i);
  }, [index, photos]);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => open(photo)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer text-2xl"
            aria-label="上一张"
          >
            ‹
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[85vh] max-w-[90vw] h-auto w-auto rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer text-2xl"
            aria-label="下一张"
          >
            ›
          </button>

          <button
            onClick={close}
            className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer text-xl"
            aria-label="关闭"
          >
            ✕
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {index + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
