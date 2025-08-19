import type { Metadata } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { AOSInit } from "@/components/aos";
import { fontSans } from "@/config/font";
import Script from "next/script";

const baseUrl = siteConfig.siteUrl ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-US": `${baseUrl}/en`,
      id: `${baseUrl}/id`,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: siteConfig.ogImage,
        href: siteConfig.ogImage,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: siteConfig.ogImage,
        href: siteConfig.ogImage,
      },
    ],
  },
  verification: {
    google: siteConfig.verification.google,
    yandex: siteConfig.verification.yandex,
    yahoo: siteConfig.verification.yahoo,
  },
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
          content="V2tw24D7BGzXxwKq3BKCcfmZkRaOq1uCMVM74x0o4JU"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WWF8K3WZ');
        `}
        </Script>
      </head>
      <body className={fontSans.className}>
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWF8K3WZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
