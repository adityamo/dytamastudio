"use client";
import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureContent = () => {
  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900 pt-5 lg:pt-10"
      id="featureDytama"
    >
      <Container className="py-10">
        <div className="relative w-full">
          <div className="flex flex-col space-y-2 text-center justify-center">
            <p className="text-sm font-semibold text-primary dark:text-secondary">
              Services
            </p>
            <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
              Beberapa layanan <span className="text-primary">Dytama</span>
            </h4>
          </div>
          <div className="flex w-full justify-center">
            <div className="grid w-full grid-cols-1 max-w-5xl lg:grid-cols-3 mx-auto gap-4 auto-rows-auto lg:auto-rows-[24rem] pt-5 lg:pt-10 lg:pb-5">
              <div className="lg:col-span-2 group/bento shadow-input row-span-1 flex flex-col justify-between space-y-1 lg:space-y-4 rounded-xl border bg-gradient-to-tl from-indigo-500 to-indigo-800 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none">
                <div className="flex flex-col space-y-2 h-auto lg:h-40 p-4">
                  <h3 className="text-lg lg:text-2xl font-semibold text-white ">
                    Website Design
                  </h3>
                  <p className="text-white font-normal text-xs lg:text-sm max-w-lg">
                    Dytama membangun pengalaman baru pada website yang memadukan
                    antara estetika dan fungsi, serta memadukan dengan teknologi
                    terbaru
                  </p>
                </div>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="overflow-hidden relative w-full"
                >
                  <div className="overflow-hidden relative w-full">
                    <div className="w-full h-full pt-2 px-2 lg:pt-4 lg:px-4 pb-0  rounded-t-2xl lg:rounded-t-3xl bg-slate-700 dark:border-neutral-700 ml-6 mt-2">
                      <Image
                        width={800}
                        height={800}
                        src={"/assets/img/illustration/services-4.png"}
                        alt="website-design"
                        className="w-full h-full lg:h-auto lg:object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 bg-gradient-to-t from-indigo-200 to-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none">
                <div className="flex flex-col space-y-2 h-auto lg:h-40 p-4">
                  <h3 className="text-lg lg:text-2xl font-semibold text-black ">
                    Mobile Design
                  </h3>
                  <p className="text-neutral-700 font-normal text-xs lg:text-sm max-w-lg">
                    Buat tampilan aplikasi mobile anda lebih user friendly
                  </p>
                </div>
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="overflow-hidden relative w-full"
                >
                  <div className="flex w-full mb-0 justify-center">
                    <Image
                      width={800}
                      height={800}
                      src={"/assets/img/illustration/services-2.png"}
                      alt="mobile-design"
                      className="w-50 lg:w-70  object-cover "
                    />
                  </div>
                </motion.div>
              </div>

              <div className="group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-gradient-to-t from-indigo-200 to-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none">
                <div className="flex flex-col space-y-2 h-40 p-4">
                  <h3 className="text-lg lg:text-2xl font-semibold text-black">
                    SEO Optimize
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-700 font-normal text-xs lg:text-sm max-w-lg">
                    Membantu website Anda tampil di halaman pertama mesin
                    pencari untuk menjangkau audiens yang tepat.
                  </p>
                </div>
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="flex w-full justify-center">
                    <Image
                      width={800}
                      height={800}
                      src={"/assets/img/illustration/services-3.png"}
                      alt="SEO-optimize"
                      className="w-50 lg:w-55 object-cover "
                    />
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-2 group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-gradient-to-tl from-indigo-500 to-indigo-800 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none">
                <div className="flex flex-col space-y-2  h-auto lg:h-40 p-4">
                  <h3 className="text-lg lg:text-2xl font-semibold text-white ">
                    Website Development
                  </h3>
                  <p className="text-white font-normal text-xs lg:text-sm max-w-lg">
                    Dengan kemajuan teknologi sekarang dytama akan membantu anda
                    membangun website anda dengan fitur yang high end
                  </p>
                </div>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="overflow-hidden relative w-full"
                >
                  <div className="overflow-hidden relative w-full">
                    <div className="w-full h-full pt-2 px-2 lg:pt-4 lg:px-4 pb-0  rounded-t-2xl lg:rounded-t-3xl bg-slate-700 dark:border-neutral-700 ml-6 mt-2">
                      <Image
                        width={800}
                        height={800}
                        src={"/assets/img/illustration/services-5.png"}
                        alt="website-design"
                        className="w-full h-full lg:h-auto lg:object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* <div className="relative w-full space-y-2 text-center justify-center ">
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
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default FeatureContent;
