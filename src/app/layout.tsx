import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "usky520的玩具",
  description: "usky520的玩具",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
