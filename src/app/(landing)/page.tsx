import Hero from "@/modules/landing/hero";
import ProductList from "@/modules/landing/product";
import FeatureContent from "@/modules/landing/feature";
import React from "react";
import AboutContent from "@/modules/landing/about";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureContent />
      <ProductList />
      <AboutContent />
    </>
  );
}
