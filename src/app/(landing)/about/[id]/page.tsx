import React from "react";
import HeroAbout from "@/modules/about/HeroAbout";
import CarrierHistory from "@/modules/about/CarrierHistory";
import TechnologyMe from "@/modules/about/TechnologyMe";
import AboutContent from "@/modules/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aditya Septama – Web Developer & UI/UX Designer | Dytama",
  description:
    "Aditya Septama adalah Web Developer & UI/UX Designer berpengalaman yang menyediakan jasa pembuatan website Next.js, desain UI/UX profesional, dan konsultasi IT melalui Dytama.",
  keywords: [
    "Frontend Engineer Indonesia",
    "Aditya Septama",
    "Aditya Septama Portofolio",
    "Tentang Aditya Septama",
    "Aditya Septama UI/UX",
    "Aditya Septama nextjs developer",
    "Dytama web development",
    "Jasa Website Aditya Septama",
  ],
  openGraph: {
    title:
      "Tentang Aditya Septama – Web Developer & UI/UX Designer Profesional",
    description:
      "Pelajari lebih lanjut tentang Aditya Septama, Web Developer & UI/UX Designer yang ahli di bidang Next.js, desain antarmuka, dan pengembangan website profesional melalui Dytama.",
    url: "https://dytama.com/about/aditya-septama",
    siteName: "Dytama",
    type: "profile",
    locale: "id_ID",
  },
  alternates: {
    canonical: "https://dytama.com/about/aditya-septama",
  },
};

const page = () => {
  return (
    <>
      <HeroAbout />
      <AboutContent />
      <TechnologyMe />
      <CarrierHistory />
    </>
  );
};

export default page;
