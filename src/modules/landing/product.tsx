"use client";
import Container from "@/components/container";
import React from "react";
import { Card, Image, Button } from "@heroui/react";

const ProductList = () => {
  return (
    <section className="relative py-28" id="ProductList">
      <Container>
        <div className="flex w-full justify-between">
          <h3 className="text-3xl text-slate-700 dark:text-white font-semibold">
            Digital Product
          </h3>
        </div>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-items-center">
          <Card
            isBlurred
            isFooterBlurred
            className="border-none w-full p-4"
            radius="lg"
          >
            <Image
              alt="Woman listing to music"
              className="h-56 w-full rounded-md object-cover"
              height={250}
              src="https://heroui.com/images/hero-card.jpeg"
              width={400}
            />
            <div className="mt-2 relative space-y-2">
              <h3 className="text-base lg:text-xl text-black dark:text-white font-semibold">
                Wedding Planner
              </h3>
              <p className="text-gray-600 dark:text-gray-200 font-normal text-xs lg:text-sm ">
                A REAL Software-as-a-Service app with AI features and a payments
                and credits system using the latest tech stack.
              </p>
            </div>
            <div className="flex w-full justify-between pt-4">
              <p className="text-xs text-gray-500 dark:text-white">test</p>
              <Button
                className="text-tiny bg-indigo-500 text-white dark:bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Learn more
              </Button>
            </div>

            {/* <CardFooter className="mt-5 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 shadow-small  z-10">
              <b>test</b>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter> */}
          </Card>
          <Card
            isBlurred
            isFooterBlurred
            className="border-none w-full p-4"
            radius="lg"
          >
            <Image
              alt="Woman listing to music"
              className="h-56 w-full rounded-md object-cover"
              height={250}
              src="https://heroui.com/images/hero-card.jpeg"
              width={400}
            />
            <div className="mt-2 relative space-y-2">
              <h3 className="text-base lg:text-xl text-black dark:text-white font-semibold">
                Wedding Planner
              </h3>
              <p className="text-gray-600 dark:text-gray-200 font-normal text-xs lg:text-sm ">
                A REAL Software-as-a-Service app with AI features and a payments
                and credits system using the latest tech stack.
              </p>
            </div>
            <div className="flex w-full justify-between pt-4">
              <p className="text-xs text-gray-500 dark:text-white">test</p>
              <Button
                className="text-tiny bg-indigo-500 text-white dark:bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Learn more
              </Button>
            </div>

            {/* <CardFooter className="mt-5 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 shadow-small  z-10">
              <b>test</b>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter> */}
          </Card>
          <Card
            isBlurred
            isFooterBlurred
            className="border-none w-full p-4"
            radius="lg"
          >
            <Image
              alt="Woman listing to music"
              className="h-56 w-full rounded-md object-cover"
              height={250}
              src="https://heroui.com/images/hero-card.jpeg"
              width={400}
            />
            <div className="mt-2 relative space-y-2">
              <h3 className="text-base lg:text-xl text-black dark:text-white font-semibold">
                Wedding Planner
              </h3>
              <p className="text-gray-600 dark:text-gray-200 font-normal text-xs lg:text-sm ">
                A REAL Software-as-a-Service app with AI features and a payments
                and credits system using the latest tech stack.
              </p>
            </div>
            <div className="flex w-full justify-between pt-4">
              <p className="text-xs text-gray-500 dark:text-white">test</p>
              <Button
                className="text-tiny bg-indigo-500 text-white dark:bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Learn more
              </Button>
            </div>

            {/* <CardFooter className="mt-5 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 shadow-small  z-10">
              <b>test</b>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter> */}
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ProductList;
