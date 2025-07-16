"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import { Button } from "@heroui/react";

export default function Hero() {
  return (
    <section
      className="relative justify-center items-center bg-no-repeat bg-center bg-cover bg-[url('/assets/img/background/hero-background-transparent.svg')] lg:min-h-screen"
      id="hero"
    >
      <Container className="px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="h-full flex flex-col justify-center items-center space-y-3 max-w-6xl mx-auto text-center"
        >
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:leading-[1.2] text-center lg:antialiased bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            Bangun kreatifitasmu, Eksplorasi desain,
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:leading-[1.2] text-center lg:antialiased bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            produk digital, dan ide segar
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:leading-[1.2] text-center lg:antialiased bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            bersama{" "}
            <span className="antialiased bg-gradient-to-r from-indigo-500 dark:from-indigo-400 to-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent">
              Dytama
            </span>
          </h1>
          <p className="max-w-5xl text-sm lg:text-base mx-auto text-muted-foreground text-balance">
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
                Jelah Produk
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
    </section>
  );
}
