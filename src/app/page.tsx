import Gallery from "@/components/gallery";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <main className="mx-auto max-w-lg px-4 py-12 sm:py-20">
      <header className="mb-10 text-center animate-fade-up">
        <h1 className="text-3xl font-light tracking-wide text-white sm:text-4xl font-heading">
          Musky<span className="text-accent">Shop</span>
        </h1>
        <div className="mx-auto mt-3 h-px w-12 bg-accent/50" />
        <p className="mt-4 text-sm text-neutral-400">
          闲鱼账号：<span className="text-accent-light">muskyshop</span>
        </p>
        <p className="mt-1 text-xs text-neutral-500">所有模型都可以打印其他颜色 · 可以换头雕</p>
      </header>
      <Gallery photos={photos} />
    </main>
  );
}
