"use client";
import React from "react";
import Container from "@/components/container";
import { motion } from "framer-motion";
import FlippingWords from "@/components/flippingwords";
import Image from "next/image";

const words = [
  "Aditya Septama",
  "Web Developers",
  "UI/UX Designer",
  "Product Designer",
  "System Analyst",
];

const HeroAbout = () => {
  return (
    <section className='"mt-14  lg:-mt-16 relative w-full  bg-gradient-to-t from-white  to-white dark:from-slate-900 dark:to-slate-800'>
      <div className="">
        <Container className="py-36">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:items-center">
              <div className="order-2 lg:order-1 relative items-start space-y-2 ">
                <p className="text-primary dark:text-secondary text-xs lg:text-sm font-medium">
                  Profile Saya
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight lg:leading-[1.2] text-black dark:text-white">
                  Hello folks, I&apos;m
                </h1>
                <FlippingWords
                  words={words}
                  color={
                    "bg-gradient-to-b from-indigo-300 dark:from-lime-100 to-indigo-800 dark:to-lime-500 bg-clip-text text-transparent"
                  }
                />
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-50 pt-5 lg:pt-10">
                    Membangun aplikasi yang sukses adalah sebuah tantangan. Saya
                    sangat energik dalam pengalaman pengguna, antarmuka
                    pengguna, dan pengembangan web.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex w-full justify-center lg:justify-end">
                <Image
                  width={340}
                  height={340}
                  src={"/assets/img/photo/aditya-septama.png"}
                  alt="aditya-septama-picture"
                />
              </div>
            </div>
          </motion.div>
          <div className="py-15 relative">
            <div className="flex w-full p-5 lg:px-16 lg:py-10 bg-gray-100 rounded-xl shadow-sm border-border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-center">
                <div>
                  <Image
                    width={400}
                    height={440}
                    src={"/assets/img/photo/momoji.png"}
                    alt="aditya-septama-picture"
                  />
                </div>
                <div className="flex w-full justify-end">
                  <div className="flex flex-col space-y-4">
                    <p className="text-primary text-xs lg:text-sm font-medium">
                      ABOUT ME
                    </p>
                    <h4 className="text-black text-xl lg:text-4xl font-bold ">
                      Bangun Kreativitas dan Digitalisasi ke lingkungan kerja
                      anda
                    </h4>
                    <p className="text-sm text-gray-500  font-normal">
                      Halo, saya dari Indonesia. Saya telah berkarir di bidang
                      Sistem dan Pengembangan TI selama lebih dari 5 tahun.
                      Dengan pengalaman tersebut, saya menguasai pemrograman
                      berbasis web dan UI/UX, serta familiar dengan manajemen
                      data dengan basis data. Saat ini, saya fokus sebagai
                      front-end engineer. Dengan beberapa pengalaman yang saya
                      miliki, saya yakin ini dapat membantu mengembangkan bisnis
                      Anda. Saya sangat menyukai tantangan dan kerja sama tim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroAbout;
