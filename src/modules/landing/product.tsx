"use client";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
// import { Card, Image, Button } from "@heroui/react";

const ProductList = () => {
  return (
    <section
      className="relative py-10 lg:py-18 bg-white dark:bg-slate-900"
      id="ProductList"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-3xl text-slate-700 dark:text-white font-semibold">
              Digital Product
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-50">
              Dytama memiliki salah satu product digital yang siap pakai, untuk
              informasi selengkapnya silahkan lihat card dibawah ini
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center py-10 lg:py-15">
          <div className="flex items-center justify-between rounded-2xl border dark:border-none border-gray-200  bg-white dark:bg-primary shadow-sm p-6">
            {/* Left Content */}
            <div className="max-w-lg">
              <h4 className="text-black dark:text-lime-200 text-xl lg:text-2xl font-semibold">
                💍 Planus – Digital Wedding Planner
              </h4>
              <p className="mt-2 text-gray-600 dark:text-white">
                Buat persiapan pernikahanmu jadi lebih rapi dan mudah,Cocok buat
                kamu yang sedang mempersiapkan pernikahan, tapi bingung mulai
                dari mana. Dengan template ini, kamu bisa merencanakan semua
                keperluan pernikahan dari A–Z dengan mudah dan praktis.
              </p>
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

            {/* Right Content (Image Preview) */}
            <div className="w-60">
              <Image
                width={500}
                height={500}
                src={"/assets/img/product/planus.png"}
                alt="feature-dytama"
                className="w-[100px] h-auto lg:w-[250px] lg:h-auto border border-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductList;
