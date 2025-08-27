"use client";
import React from "react";
import Container from "@/components/container";
import portofolioList from "@/data/portofolio.json";
import Link from "next/link";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

const PortofolioContent = () => {
  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900"
      id="PortofolioDytama"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-sm font-semibold text-primary dark:text-secondary">
              Project
            </p>
            <h3 className="text-3xl lg:text-4xl text-slate-700 dark:text-white font-bold">
              Our Work
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-neutral-400">
              Beberapa Project yang pernah kolaborasi dengan dytama
            </p>
          </div>
        </div>
        <div className="relative w-full py-5 lg:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-5 lg:py-10">
            {portofolioList.map((item, key: React.Key) => {
              return (
                <div className="group relative mb-4 rounded-2xl" key={key}>
                  <Link href={`/product/id`}>
                    <Image
                      width={300}
                      height={300}
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-full h-50 lg:w-90 lg:h-60 rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
                    />
                    <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                      <div>
                        <h2 className="z-20 mt-2 font-bold tracking-tight text-black dark:text-neutral-200">
                          {item.name}
                        </h2>
                        <p className="mt-2 max-w-[20rem] text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="transition-all duration-300 group-hover:px-4">
                      <button className="pt-2 text-sm lg:text=sm  text-primary flex w-full font-semibold items-center hover:text-secondary">
                        Lihat Selengkapnya{" "}
                        <span className="ms-2">
                          <FiArrowRight />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* {portofolioList.map((item, key: React.Key) => {
              return (
                <Card
                  key={key}
                  isPressable
                  shadow="sm"
                  onPress={() => console.log("item pressed")}
                  className="relative rounded-2xl shadow-xl backdrop-blur-3xl overflow-hidden"
                >
                  <CardBody className="relative overflow-visible p-0">
                    <Image
                      alt={item.name}
                      className="w-full object-cover h-[180px] lg:h-[240px]"
                      radius="lg"
                      shadow="sm"
                      src={item.imgUrl}
                      width="100%"
                    />
                    <div className="relative w-full pt-5 px-4">
                      <div className="flex flex-col space-y-2 w-full justify-start text-start">
                        <h5 className="text-base lg:text-xl font-semibold ">
                          {item.name}
                        </h5>
                        <p className="text-default-500 text-sm line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="">
                          <Link
                            href={""}
                            className="pt-2 text-xs lg:text=sm text-primary flex w-full font-semibold items-center"
                          >
                            Lihat Selengkapnya{" "}
                            <span className="ms-2">
                              <FiArrowRight />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter></CardFooter>
                </Card>
              );
            })} */}
          </div>
          <div className="flex w-full justify-center pt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
            >
              <button
                type="button"
                className="py-3 px-4 inline-flex font-semibold items-center gap-x-2 text-sm rounded-full border border-transparent bg-secondary text-black hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 disabled:opacity-50 disabled:pointer-events-none"
              >
                Lihat lainnya <FiArrowDown className="" />
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortofolioContent;
