"use client";
import React from "react";
import Container from "@/components/container";
import { Tabs, Tab } from "@heroui/tabs";
import portofolioList from "@/data/portofolio.json";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

const PortofolioContent = () => {
  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900"
      id="PortofolioDytama"
    >
      <Container>
        <div className="relative w-full py-5 lg:py-10">
          <div className="flex w-full justify-start space-y-1">
            <div className="flex flex-col space-y-4">
              <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
                Beberapa Portofolio <span className="text-primary">Dytama</span>
              </h4>
              <div className="flex w-full flex-col">
                <Tabs aria-label="Tabs sizes" size="md">
                  <Tab key="website" title="Website" />
                  <Tab key="mobile" title="Mobile" />
                </Tabs>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
            {portofolioList.map((item, key: React.Key) => {
              return (
                <Card
                  key={key}
                  isPressable
                  shadow="sm"
                  onPress={() => console.log("item pressed")}
                  className="relative rounded-2xl shadow-xl backdrop-blur-3xl overflow-hidden"
                >
                  {/* <span
                    className="absolute inset-0 rounded-2xl p-[2px] animate-[pulse_2s_ease-in-out_infinite] 
               bg-[conic-gradient(from_90deg_at_50%_50%,#343434_90%,#fb8d0e_50%,#610efb_100%)]"
                  ></span> */}
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
            })}
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
