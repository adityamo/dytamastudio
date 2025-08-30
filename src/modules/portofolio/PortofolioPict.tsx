"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGlobe, FiShare2 } from "react-icons/fi";

const PortofolioPict = () => {
  return (
    <div className="space-y-5">
      <div className="flex w-full ">
        <Link
          href="/portofolio"
          className="inline-flex w-full gap-2 items-center text-black dark:text-white font-semibold hover:text-primary text-xs lg:text-sm pb-5 justify-end"
        >
          <span>Kembali</span>
          <FiArrowRight />
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <h1 className="text-black dark:text-indigo-500 font-bold text-2xl lg:text-4xl">
          Build for monitoring logistics apps
        </h1>
        <div className="flex w-full justify-between items-center">
          <div className="inline-flex gap-2 items-center">
            <FiGlobe className="text-primary dark:text-secondary" />
            <p className="text-gray-600 dark:text-neutral-400 text-xs lg:text-sm">
              Website
            </p>
          </div>
          <div className="flex  items-center gap-2 lg:gap-4 justify-start lg:justify-end ">
            <button
              type="button"
              className="flex flex-row items-center justify-between"
            >
              <div className="flex z-10 gap-1 items-center rounded-full bg-white border border-gray-200  dark:bg-indigo-100 dark:text-black px-5 py-1.5 lg:px-6 lg:py-2 text-[10px] lg:text-xs font-bold text-black">
                Share <FiShare2 />
              </div>
            </button>
            <button
              type="button"
              className="flex flex-row items-center justify-between"
            >
              <div className="relative z-10 block rounded-full bg-black dark:bg-secondary dark:text-black px-5 py-1.5 lg:px-6 lg:py-2 text-[10px] lg:text-xs font-bold text-white">
                Get in Touch
              </div>
            </button>
          </div>
        </div>
      </div>

      <figure>
        <Image
          width={1000}
          height={1040}
          src={"/assets/img/project/Silink-cover.png"}
          alt="adioty"
          className="w-full h-full lg:h-[600px] object-cover rounded-xl"
        />
      </figure>
    </div>
  );
};

export default PortofolioPict;
