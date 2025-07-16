import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { AOSInit } from "@/components/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Aditya Septama", "Portofolio Aditya Septama"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
