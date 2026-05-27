"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { type Photo, type Category } from "@/data/photos";

export default function Gallery({
  photos,
  categories,
}: {
  photos: Photo[];
  categories: Category[];
}) {
  const [active, setActive] = useState<string>("全部");
  const [selected, setSelected] = useState<Photo | null>(null);

  const filtered = useMemo(
    () =>
      active === "全部" ? photos : photos.filter((p) => p.category === active),
    [photos, active]
  );

  const index = useMemo(
    () => (selected ? filtered.indexOf(selected) : -1),
    [selected, filtered]
  );

  const open = useCallback(
    (photo: Photo) => setSelected(photo),
    []
  );

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    const i = index > 0 ? index - 1 : filtered.length - 1;
    setSelected(filtered[i]);
  }, [index, filtered]);

  const next = useCallback(() => {
    const i = index < filtered.length - 1 ? index + 1 : 0;
    setSelected(filtered[i]);
  }, [index, filtered]);

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
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm transition cursor-pointer ${
              active === cat
                ? "bg-white text-neutral-900"
                : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-neutral-500 py-10">暂无图片</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((photo) => (
            <button
              key={photo.id}
              onClick={() => open(photo)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-700 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
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
      )}

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
            className="flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-white/80">{selected.alt}</p>
            <div className="relative max-h-[80vh] max-w-[90vw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[80vh] max-w-[90vw] h-auto w-auto rounded-lg shadow-2xl"
              />
            </div>
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
            {index + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
