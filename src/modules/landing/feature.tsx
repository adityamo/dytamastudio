"use client";
import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import featureData from "@/data/feature.json";
import { motion } from "framer-motion";
// import { Chip } from "@heroui/react";

const FeatureContent = () => {
  return (
    <section
      className="relative w-full  bg-white dark:bg-slate-900"
      id="featureDytama"
    >
      <Container className="py-10">
        <div className="relative w-full">
          <div className="relative w-full space-y-2 text-center justify-center ">
            {/* <Chip className="bg-gray-50 text-semibold text-center">
            Our Service
          </Chip> */}
            <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
              Feature <span className="text-primary">Dytama</span>
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-50">
              Beberapa Feature unggul yang dimiliki dytama
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-0 lg:gap-x-10 pt-5 px-5 lg:px-0 lg:pt-10 ">
              <div className="lg:col-span-2 bg-primary bg-gradient-to-tl from-indigo-900 to-indigo-600 rounded-xl">
                <h4 className="text-white text-lg lg:text-2xl font-semibold text-start p-5">
                  Dytama mengutamakan kolaborasi klien, ciptakan komunikasi
                  terbuka
                </h4>

                <div className="lg:absolute bottom-0 left-0 w-full flex justify-start">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={"/assets/img/illustration/feature-dytama-illust.svg"}
                      alt="feature-dytama"
                      className="w-[200px] h-auto lg:w-[450px] lg:h-auto"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 lg:pt-0">
                  {featureData.map((item, key: React.Key) => {
                    return (
                      <div className="flex flex-col text-start" key={key}>
                        <Image
                          width={10}
                          height={10}
                          src={item.icon}
                          alt="feature-dytama"
                          className="w-10 h-10 lg:w-15 lg:h-15"
                        />
                        <div className="flex flex-col pt-5 space-y-2">
                          <h4 className="text-lg lg:text-xl font-semibold text-black dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-white font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureContent;
