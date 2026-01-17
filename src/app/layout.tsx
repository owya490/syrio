import AppContent from "@/components/loading/AppContent";
import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bankGothic = localFont({
  src: "../../public/fonts/bankgothic-md-bt/BankGothic Md BT.ttf",
  variable: "--font-bank-gothic",
});

const geekTrend = localFont({
  src: "../../public/fonts/geek-trend-demo.regular.ttf",
  variable: "--font-geek-trend",
});

const serif12 = localFont({
  src: "../../public/fonts/Serif12_Beta_Rg/Serif12Beta-Italic.otf",
  variable: "--font-serif12",
});

const youSheBiaoTiHei = localFont({
  src: "../../public/fonts/YouSheBiaoTiHei/YouSheBiaoTiHei-2.ttf",
  variable: "--font-youshe",
});

export const metadata: Metadata = {
  title: "Syrio Volleyball Academy",
  description: "Syrio Volleyball Academy, Sydney's premier volleyball academy",
  themeColor: "#000000",
  colorScheme: "dark",
  appleWebApp: {
    statusBarStyle: "black",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body
        className={`${archivo.variable} ${montserrat.variable} ${bankGothic.variable} ${geekTrend.variable} ${serif12.variable} ${youSheBiaoTiHei.variable} antialiased bg-syrio-black`}
      >
        <AppContent>{children}</AppContent>
      </body>
    </html>
  );
}
