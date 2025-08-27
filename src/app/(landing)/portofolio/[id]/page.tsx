/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "@/components/container";
import Image from "next/image";

const page = () => {
  return (
    <section className="py-14 lg:py-36 relative w-full bg-white dark:bg-slate-900">
      <Container>
        <figure>
          <Image
            width={1000}
            height={1040}
            src={"/assets/img/project/Silink-cover.png"}
            alt="adioty"
            className="w-full h-full lg:h-[600px] object-cover rounded-xl"
          />
        </figure>
      </Container>
    </section>
  );
};

export default page;
