import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWeb制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWeb制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Analytics />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
