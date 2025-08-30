/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Container from "@/components/container";
import PortofolioPict from "@/modules/portofolio/PortofolioPict";
import PortofolioDesc from "@/modules/portofolio/PortofolioDesc";
import PortofolioInfo from "@/modules/portofolio/PortofolioInfo";
import PortofolioContact from "@/modules/portofolio/PortofolioContact";

const page = () => {
  return (
    <section className="py-14 lg:py-30 relative w-full bg-white dark:bg-slate-900">
      <Container className="relative w-full space-y-5">
        <PortofolioPict />

        <div className="pt-5 flex flex-col lg:flex-row w-full gap-5">
          <div className="lg:w-3/5 space-y-6">
            <PortofolioDesc />
          </div>
          <div className="lg:w-2/5 ">
            <div className="space-y-5">
              <PortofolioInfo />
              <PortofolioContact />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
