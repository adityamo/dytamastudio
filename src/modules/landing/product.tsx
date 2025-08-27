"use client";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/3dcard";
import Link from "next/link";
// import { Card, Image, Button } from "@heroui/react";

const ProductList = () => {
  return (
    <section
      className="relative py-2 lg:py-4 bg-white dark:bg-slate-900"
      id="ProductList"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-sm font-semibold text-primary dark:text-secondary">
              Our Product
            </p>
            <h3 className="text-3xl lg:text-4xl text-slate-700 dark:text-white font-bold">
              Digital Product
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-neutral-400">
              Dytama memiliki salah satu product digital yang siap pakai, untuk
              informasi selengkapnya silahkan lihat card dibawah ini
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center py-2 lg:py-5">
          <Link href="https://lynk.id/adityamo/9465pnqpgx2e">
            <CardContainer
              className="max-w-3xl"
              containerClassName="py-2 lg:py-5"
            >
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                <CardItem translateZ="50" className="">
                  <h4 className="text-xl font-bold pb-2 text-black dark:text-white">
                    💍 Planus – Digital Wedding Planner
                  </h4>
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src={"/assets/img/product/planus.png"}
                    alt="wedding-planner-template"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-200"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
                >
                  Buat persiapan pernikahanmu jadi lebih rapi dan mudah,Cocok
                  buat kamu yang sedang mempersiapkan pernikahan, tapi bingung
                  mulai dari mana. Dengan template ini, kamu bisa merencanakan
                  semua keperluan pernikahan dari A–Z dengan mudah dan praktis.
                </CardItem>
                <div className="flex justify-between">
                  <CardItem
                    translateZ={20}
                    translateX={-0}
                    as="button"
                    className="pt-5 rounded-xl text-xs font-normal text-primary dark:text-white"
                  >
                    Lihat selengkapnya →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Link>

          {/* <div className="flex items-center justify-between rounded-2xl border dark:border-none border-gray-200  bg-white dark:bg-primary shadow-sm p-6">
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative space-y-2">
                    <h4 className="text-black dark:text-lime-200 text-xl lg:text-2xl font-semibold">
                      💍 Planus – Digital Wedding Planner
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-white">
                      Buat persiapan pernikahanmu jadi lebih rapi dan
                      mudah,Cocok buat kamu yang sedang mempersiapkan
                      pernikahan, tapi bingung mulai dari mana. Dengan template
                      ini, kamu bisa merencanakan semua keperluan pernikahan
                      dari A–Z dengan mudah dan praktis.
                    </p>
                    <div className="pt-5">
                      <a
                        href="https://lynk.id/adityamo/9465pnqpgx2e"
                        className="mt-3 inline-flex items-center text-sm font-medium text-primary dark:text-secondary hover:underline"
                      >
                        Lihat Selangkapnya
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="order-first lg:order-last flex w-full items-center">
                  <Image
                    width={500}
                    height={500}
                    src={"/assets/img/product/planus.png"}
                    alt="feature-dytama"
                    className="w-full h-auto lg:w-[250px] lg:h-auto border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default ProductList;
