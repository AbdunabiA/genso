import type { Metadata } from "next";
import Involve from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";

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
  title: "Genso",
  description: "Generated by create next app",
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
        </div>
      </body>
    </html>
  );
}
