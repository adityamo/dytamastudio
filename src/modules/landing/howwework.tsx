"use client";

import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import workProcess from "@/data/howwork.json";
import { motion } from "framer-motion";

const HowWeWorkContent = () => {
  return (
    <section className="bg-indigo-100 relative">
      <div className="bg-[url('/assets/img/background/background-pattern-1.svg')] bg-no-repeat bg-center bg-cover">
        <Container>
          <div className="relative w-full py-10">
            <div className="relative w-full space-y-2 text-center justify-center pb-5">
              <p className="text-sm font-semibold text-primary dark:text-secondary">
                How we work
              </p>
              <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-black">
                Proses Kerja <span className="text-primary">Dytama</span>
              </h4>
              <p className="text-sm font-normal text-gray-700 dark:text-black">
                Ciptakan langkah kreatif dan keunggulan melalui setiap langkah
              </p>
            </div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 py-14 gap-5">
                {workProcess.map((item, key: React.Key) => {
                  return (
                    <div
                      key={key}
                      className="bg-white relative rounded-xl border border-gray-200 shadow-md 
                 flex flex-col justify-between min-h-[300px] lg:min-h-[350px]"
                    >
                      <div className="flex flex-col space-y-1 p-4">
                        <h6 className="font-semibold text-sm lg:text-lg text-black">
                          {item.title}
                        </h6>
                        <p className="text-gray-700 font-normal text-[11px] lg:text-xs">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex w-full">
                        <Image
                          width={400}
                          height={400}
                          src={item.imgUrl}
                          alt="feature-dytama"
                          className="w-[200px] h-auto lg:w-[350px] lg:h-[200px] rounded-b-xl"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HowWeWorkContent;
