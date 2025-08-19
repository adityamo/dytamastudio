import Hero from "@/modules/landing/hero";
import ProductList from "@/modules/landing/product";
import FeatureContent from "@/modules/landing/feature";
import React from "react";
import AboutContent from "@/modules/landing/about";
import PortofolioContent from "@/modules/landing/portofolio";
import HowWeWorkContent from "@/modules/landing/howwework";
import WorkingTogetherContent from "@/modules/landing/workingtogether";
import TechnologyContent from "@/modules/landing/technology";

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureContent />
      <ProductList />
      <AboutContent />
      <PortofolioContent />
      <HowWeWorkContent />
      <WorkingTogetherContent />
      <TechnologyContent />
    </>
  );
}
