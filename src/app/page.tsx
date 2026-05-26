import Gallery from "@/components/gallery";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <main className="mx-auto max-w-lg px-4 py-10 sm:py-16">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-light tracking-wide text-white sm:text-3xl">
          usky520的玩具
        </h1>
        <p className="mt-2 text-sm text-neutral-400">闲鱼账号：usky520 &nbsp;|&nbsp; 点击图片查看大图</p>
        <p className="mt-1 text-sm text-neutral-500">所有模型都可以打印其他颜色</p>
      </header>
      <Gallery photos={photos} />
    </main>
  );
}
