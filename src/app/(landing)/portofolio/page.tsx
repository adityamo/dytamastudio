import React from "react";
import HeroPortofolio from "@/modules/portofolio/HeroPortofolio";
import PortofolioList from "@/modules/portofolio/PortofolioList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dytama Portofolio – Jasa Pembuatan Website & Desain UI/UX Profesional",
  description:
    "Lihat portofolio Dytama yang berisi hasil karya website, desain UI/UX, dan produk digital untuk berbagai bisnis.",
  keywords: [
    "portofolio jasa website",
    "portofolio desain UI/UX",
    "Dytama",
    "pembuatan website profesional",
    "jasa web Depok",
    "desain aplikasi",
    "aditya septama portofolio",
  ],
  openGraph: {
    title: "Dytama Portofolio – Jasa Website & Desain UI/UX",
    description:
      "Lihat hasil karya Dytama untuk website dan desain profesional.",
    url: "https://dytama.com/portofolio",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Dytama Portofolio",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://dytama.com/portofolio",
  },
};

const PortofolioPage = () => {
  return (
    <>
      <HeroPortofolio />
      <PortofolioList />
    </>
  );
};

export default PortofolioPage;
