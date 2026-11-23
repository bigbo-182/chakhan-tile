import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "착한 타일 | 착한사람들 - 경기도 이천 타일 시공 전문",
  description: "경기도 이천 타일 시공 전문 업체 착한타일입니다. 욕실, 주방, 거실, 상업공간 타일 시공. 수익금 1% 기부. 대표 강정호 010-9271-0988",
  keywords: "이천 타일, 타일 시공, 욕실 리모델링, 착한타일, 경기도 타일",
  openGraph: {
    title: "착한 타일 | 착한사람들",
    description: "경기도 이천 타일 시공 전문. 수익금 1% 지역 기부.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
