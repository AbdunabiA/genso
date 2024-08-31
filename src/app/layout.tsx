import type { Metadata } from "next";
import Involve from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const involve = Involve({
  src: [
    {
      path: "../../public/Involve-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Involve-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Involve-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Involve-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Генсо - Ваш надежный партнер по аутсорсингу",
  description:
    "Genso – маркетинговое агентство и дизайн студию. Мы создаем уникальные бренды, впечатляющие веб-сайты и эффективные SMM-стратегии, чтобы ваш бизнес выделялся и рос.",
  openGraph: {
    title: "Генсо - Ваш надежный партнер по аутсорсингу",
    description:
      "Genso – маркетинговое агентство и дизайн студию. Мы создаем уникальные бренды, впечатляющие веб-сайты и эффективные SMM-стратегии, чтобы ваш бизнес выделялся и рос.",
    url: "https://www.genso.uz/",
    images: [
      {
        url: "https://www.genso.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoFull.6c133828.png&w=256&q=75",
        width: 996,
        height: 664,
        alt: "Логотип Генсо",
      },
    ],
    locale: "ru_RU",
    siteName: "Генсо",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={involve.className}>
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
