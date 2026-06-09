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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
          onClick={close}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 py-5 bg-gradient-to-b from-black/60 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-white/50 font-body truncate max-w-[60%] tracking-wide">
              {selected.alt}
            </p>
            <div className="flex items-center gap-5">
              <span className="text-xs text-white/30 font-body tabular-nums tracking-wider">
                {index + 1} <span className="text-white/15">/</span> {photos.length}
              </span>
              <button
                onClick={close}
                className="size-9 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-white/15 hover:text-white/80 transition-all duration-300 cursor-pointer text-base"
                aria-label="关闭"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Prev zone */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[15%] sm:w-1/5 z-20 flex items-center justify-start pl-4 sm:pl-8 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <div className="size-11 sm:size-13 flex items-center justify-center rounded-full bg-white/[0.04] text-white/10 group-hover:bg-white/10 group-hover:text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-400 text-3xl backdrop-blur-sm">
              ‹
            </div>
          </div>

          {/* Image */}
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={selected.id}
              src={selected.src}
              alt={selected.alt}
              className="max-h-[85vh] max-w-[90vw] h-auto w-auto rounded-lg shadow-2xl ring-1 ring-white/[0.06] animate-fade-in select-none"
              draggable={false}
            />
          </div>

          {/* Next zone */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[15%] sm:w-1/5 z-20 flex items-center justify-end pr-4 sm:pr-8 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <div className="size-11 sm:size-13 flex items-center justify-center rounded-full bg-white/[0.04] text-white/10 group-hover:bg-white/10 group-hover:text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-400 text-3xl backdrop-blur-sm">
              ›
            </div>
          </div>

          {/* Bottom dots */}
          <div
            className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === index
                    ? "w-5 sm:w-6 bg-accent-light"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`第 ${i + 1} 张`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
