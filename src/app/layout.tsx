import type { Metadata } from "next";
import { Montserrat, Orbitron } from "next/font/google"; // using Orbitron as Bank Gothic stand-in
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Using Orbitron as a temporary alternative to Bank Gothic for the "tech/sport" look
// You can replace this with localFont if you have the actual Bank Gothic files later
const bankGothic = Orbitron({
  variable: "--font-bank-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syrio Volleyball Academy",
  description: "Syrio Volleyball Academy, Sydney's premier volleyball academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bankGothic.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
