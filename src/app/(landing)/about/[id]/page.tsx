"use client";
import React from "react";
import HeroAbout from "@/modules/about/HeroAbout";
import CarrierHistory from "@/modules/about/CarrierHistory";
import TechnologyMe from "@/modules/about/TechnologyMe";
import AboutContent from "@/modules/about/about";

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
