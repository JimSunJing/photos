"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { type Photo } from "@/data/photos";

export default function ProductGallery({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  const index = useMemo(
    () => (selected ? photos.indexOf(selected) : -1),
    [selected, photos]
  );

  const open = useCallback((photo: Photo) => setSelected(photo), []);

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    const i = index > 0 ? index - 1 : photos.length - 1;
    setSelected(photos[i]);
  }, [index, photos]);

  const next = useCallback(() => {
    const i = index < photos.length - 1 ? index + 1 : 0;
    setSelected(photos[i]);
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => open(photo)}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-surface-2 ring-1 ring-white/5 transition-all duration-300 hover:ring-accent/40 hover:shadow-lg hover:shadow-accent/10 cursor-pointer animate-fade-up"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-11 sm:size-13 flex items-center justify-center rounded-full bg-black/50 text-accent-light/70 hover:bg-accent/20 hover:text-accent-light border border-white/10 hover:border-accent/40 transition-all duration-200 cursor-pointer text-2xl backdrop-blur-sm z-10"
            aria-label="上一张"
          >
            ‹
          </button>

          <div
            className="flex flex-col items-center gap-3 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-white/70 font-body">{selected.alt}</p>
            <div className="relative max-h-[80vh] max-w-[90vw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[80vh] max-w-[90vw] h-auto w-auto rounded-xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-11 sm:size-13 flex items-center justify-center rounded-full bg-black/50 text-accent-light/70 hover:bg-accent/20 hover:text-accent-light border border-white/10 hover:border-accent/40 transition-all duration-200 cursor-pointer text-2xl backdrop-blur-sm z-10"
            aria-label="下一张"
          >
            ›
          </button>

          <button
            onClick={close}
            className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-black/50 text-white/60 hover:bg-accent/20 hover:text-accent-light border border-white/10 hover:border-accent/40 transition-all duration-200 cursor-pointer text-lg backdrop-blur-sm"
            aria-label="关闭"
          >
            ✕
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-accent-light/80 text-xs px-3 py-1.5 rounded-full border border-white/10 font-body">
            {index + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
