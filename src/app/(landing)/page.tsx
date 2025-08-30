import Hero from "@/modules/landing/hero";
import ProductList from "@/modules/landing/product";
import FeatureContent from "@/modules/landing/feature";
import React from "react";
// import AboutContent from "@/modules/landing/about";
import PortofolioContent from "@/modules/landing/portofolio";
import HowWeWorkContent from "@/modules/landing/howwework";
// import WorkingTogetherContent from "@/modules/landing/workingtogether";
import TechnologyContent from "@/modules/landing/technology";
import FqaContent from "@/modules/landing/fqa";
import WhyChooseUs from "@/modules/landing/whychooseus";
import PricingPage from "@/modules/landing/pricing";

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureContent />
      <ProductList />
      {/* <AboutContent /> */}
      <PortofolioContent />
      <WhyChooseUs />
      <HowWeWorkContent />
      <PricingPage />
      <FqaContent />
      {/* <WorkingTogetherContent /> */}
      <TechnologyContent />
    </>
  );
}
