// "use strict";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
// import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "آکادمی زعفرانیه | آموزش تخصصی و حرفه‌ای",
    template: "%s | آکادمی زعفرانیه",
  },
  description: "آکادمی زعفرانیه برگزارکننده دوره‌های فنی و حرفه‌ای، زبان‌های خارجی، برنامه‌نویسی کودک و نوجوان، هنرهای تجسمی و طراحی لباس با ارائه مدرک معتبر فنی و حرفه‌ای قابل ترجمه.",
  keywords: "آموزش فنی و حرفه‌ای, زبان انگلیسی, زبان آلمانی, زبان گردشگری, آموزش کامپیوتر, نرم‌افزار تخصصی, برنامه‌نویسی, آموزش کودک, سکرچ, بازی‌سازی, برنامه‌نویسی پیشرفته, نقاشی, سیاه قلم, رنگ روغن, آبرنگ, طراحی لباس, مداد رنگی, دوخت و طراحی, مدرک فنی و حرفه‌ای, ترجمه مدرک",
  openGraph: {
    title: "آکادمی زعفرانیه | آموزش تخصصی و حرفه‌ای",
    description: "با آکادمی زعفرانیه در مسیر یادگیری تخصصی، مهارت‌آموزی و دریافت مدرک معتبر فنی و حرفه‌ای گام بردارید.",
    url: "https://zafaraniyehtvto.ir",
    siteName: "آکادمی زعفرانیه",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://zafaraniyehtvto.ir/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آکادمی زعفرانیه | آموزش تخصصی و حرفه‌ای",
    description: "دوره‌های فنی و حرفه‌ای، زبان‌های خارجی، هنرهای تجسمی، طراحی لباس و برنامه‌نویسی کودک در آکادمی زعفرانیه.",
    images: ["https://zafaraniyehtvto.ir/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="fa">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
