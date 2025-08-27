import React from "react";
import { Spotlight } from "@/components/spotlightnew";
import Image from "next/image";

const PortofolioPage = () => {
  return (
    <section className="relative w-full">
      <div className="h-[34rem] w-full rounded-md flex md:items-center md:justify-center   bg-gradient-to-t from-indigo-200  to-white antialiased dark:from-slate-900 dark:to-slate-800  relative overflow-hidden">
        <Spotlight />
        <div className="flex flex-col w-full justify-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-indigo-700 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
            Do More <br />{" "}
            <span className="text-black dark:text-neutral-400">
              With Dytama Project
            </span>
          </h1>
          <p className="mt-4 font-normal text-base text-gray-600 dark:text-neutral-300 max-w-lg text-center mx-auto">
            You can use dytama for much more than just Web App..
          </p>
        </div>
        <div className="hidden lg:block absolute top-80 start-40">
          <Image
            width={300}
            height={300}
            src={"/assets/img/illustration/side-left-1.png"}
            alt="side-left-dytama"
            className="lg:w-50"
          />
        </div>
        <div className="hidden lg:block absolute top-25 end-40">
          <Image
            width={300}
            height={300}
            src={"/assets/img/illustration/side-right-1.png"}
            alt="side-left-dytama"
            className="lg:w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default PortofolioPage;
