import React from "react";
import HeroAbout from "@/modules/about/HeroAbout";
import CarrierHistory from "@/modules/about/CarrierHistory";
import TechnologyMe from "@/modules/about/TechnologyMe";

const page = () => {
  return (
    <>
      <HeroAbout />
      <TechnologyMe />
      <CarrierHistory />
    </>
  );
};

export default page;
