export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dytama Studion",
  description: "Portofolio Aditya Septama",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "aditya septama",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  fax: process.env.NEXT_PUBLIC_FAX || "",
  siteUrl: process.env.SITE_URL,
  creator: "@getnextui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextui.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/adityamo",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
  navItems: [
    { label: "Home", href: "/", haveChild: false },
    { label: "Product", href: "/product", haveChild: false },
    { label: "About", href: "/about", haveChild: false },
    { label: "Contact", href: "/contact", haveChild: false },
  ],
};
