import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "애비앤조 | 신뢰와 품질로 함께하는 유통 파트너",
  description: "중소 유통업체 애비앤조 - 도매·소매·물류 유통 전문. 제품 카탈로그, 견적 요청, 문의하기",
  openGraph: {
    title: "애비앤조 | 신뢰와 품질로 함께하는 유통 파트너",
    description: "중소 유통업체 애비앤조 - 도매·소매·물류 유통 전문",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen bg-[#0a0a0b] text-white">
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
