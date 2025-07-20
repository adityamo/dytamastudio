"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/container";
import { Button } from "@heroui/react";
import Image from "next/image";

const words = [
  "Bangun kreatifitasmu",
  "Eksplorasi Desain",
  "Produk Digital",
  "Ide Segar",
];

const FlippingWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Durasi sama dengan animasi (4 detik)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full justify-center items-center h-[3rem] lg:h-[2rem]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute text-3xl lg:text-5xl font-semibold tracking-tight 
                     lg:leading-[1.2] text-center bg-gradient-to-b 
                     from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground 
                     bg-clip-text text-transparent"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
export default function Hero() {
  return (
    <section
      className="-mt-25 lg:-mt-16 relative w-full  bg-gradient-to-t from-indigo-200  to-white dark:from-slate-900 dark:to-slate-800"
      id="hero"
    >
      <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/img/background/hero-background-indigo.svg')] lg:min-h-screen">
        <Container className="px-4 py-36 gap-12 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
            className="h-full flex flex-col justify-center items-center space-y-3 max-w-6xl mx-auto text-center"
          >
            <FlippingWords />

            <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:leading-[1.2] text-center lg:antialiased bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
              bersama{" "}
              <span className="antialiased bg-gradient-to-r from-indigo-500 dark:from-indigo-400 to-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent">
                Dytama
              </span>
            </h1>
            <p className="max-w-5xl text-xs lg:text-base mx-auto text-muted-foreground text-balance">
              Selamat datang di Dytama – tempat di mana ide kreatif, desain
              digital, dan portofolio profesional bersatu. Temukan siapa saya,
              karya yang saya banggakan, dan berbagai produk digital yang siap
              menunjang produktivitas dan kreativitasmu.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <div className="mt-2 flex space-x-4">
                <Button
                  className="bg-slate-700 dark:shadow-none light:shadow-slate-200"
                  color="primary"
                  variant="shadow"
                >
                  Lihat Portofolio
                </Button>
                <Button
                  className="bg-indigo-600 dark:shadow-none light:shadow-indigo-200"
                  color="primary"
                  variant="shadow"
                >
                  Jelajahi Produk
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="bottom-0 w-full z-0"
        >
          <Image
            src="/assets/img/illustration/hero-illustration.svg"
            alt="Ilustrasi Dashboard"
            width={1200}
            height={600}
            className="mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
