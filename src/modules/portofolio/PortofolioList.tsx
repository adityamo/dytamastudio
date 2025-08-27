"use client";

import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import portofolioList from "@/data/portofolio.json";
import Link from "next/link";

const PortofolioList = () => {
  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900"
      id="portofolioList"
    >
      <Container className="py-10 lg:py-20">
        <div className="relative w-full space-y-2 text-center justify-center pb-5">
          <p className="text-sm font-semibold text-primary dark:text-secondary">
            Project
          </p>
          <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
            Beberapa Portolio <span className="text-primary">Dytama</span>
          </h4>
          <p className="text-sm font-normal text-gray-700 dark:text-neutral-400">
            Kami hadir untuk mewujudkan inovasi digital Anda.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5 lg:py-10 w-full ">
            {portofolioList.map((item, key: React.Key) => {
              return (
                <div className="mx-auto w-90" key={key}>
                  <Link href="portofolio/98923">
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-400 bg-white dark:bg-slate-900 transition duration-200 hover:shadow-xl">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                        <Image
                          src={item.imgUrl}
                          width={300}
                          height={300}
                          alt="thumbnail"
                          className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="my-4 text-lg font-bold text-black dark:text-indigo-500">
                          {item.name}
                        </h2>
                        <h2 className="my-4 text-sm font-normal text-zinc-500 dark:text-neutral-400 line-clamp-5">
                          {item.desc}
                        </h2>
                        <div className="mt-10 flex flex-row items-center justify-between">
                          <div className="relative z-10 block rounded-xl bg-black dark:bg-secondary dark:text-black px-6 py-2 text-xs font-bold text-white">
                            Read More
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortofolioList;
