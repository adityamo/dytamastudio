import type { Metadata } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { AOSInit } from "@/components/aos";
import { fontSans } from "@/config/font";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Aditya Septama",
    "Portofolio Aditya Septama",
    "Dytama",
    "Dytama Studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <head>
        <meta
          name="google-site-verification"
          content="9V40jNgQWdJTsh5MsvlYE2kyl7ca46yH3AibIwGuFqs"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </head>
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
