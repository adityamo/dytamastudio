"use client";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const TechnologyContent = () => {
  return (
    <section
      className="relative w-full  bg-white dark:bg-slate-900"
      id="TecnologyDytama"
    >
      <Container>
        <div className="relative w-full py-10 lg:py-15">
          <div className="relative w-full space-y-2 text-center justify-center pb-10">
            <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
              Technology <span className="text-primary">Dytama</span>
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-50">
              Dukung proyek kami, kami menggunakan banyak platform untuk
              menyukseskan proyek ini
            </p>
          </div>
          <div className="pt-10 lg:pt-15 flex w-full justify-center">
            <Image
              width={500}
              height={500}
              src={"/assets/img/illustration/tech-dytama.svg"}
              alt="feature-dytama"
              className="w-[500px] h-auto lg:w-[1000px] lg:h-auto"
            />
          </div>
          <div className="pt-10 lg:pt-15 flex w-full justify-center">
            <div className="relative max-w-2xl text-center justify-center pb-10">
              <h4 className="text-black text-2xl lg:text-5xl font-bold dark:text-white">
                Ready to take <span className="text-primary me-2">your</span>
                digital presence to the next level?
              </h4>
              <p className="text-md font-normal pt-15 text-gray-500 dark:text-gray-50">
                Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals.
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <button
              type="button"
              className="py-3 px-10 inline-flex font-semibold items-center gap-x-2 text-sm rounded-xl border border-transparent bg-slate-800 text-white hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 disabled:opacity-50 disabled:pointer-events-none"
            >
              Contact Me Now <FiArrowUpRight className="" />
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TechnologyContent;
