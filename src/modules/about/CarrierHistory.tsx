import React from "react";
import Container from "@/components/container";

const CarrierHistory = () => {
  return (
    <section className="mt-14  lg:mt-28 relative w-full  bg-gradient-to-t from-white  to-white dark:from-slate-900 dark:to-slate-800">
      <Container>
        <div className="relative">
          <div className="flex flex-col space-y-4">
            <p className="text-primary text-xs lg:text-sm font-medium">
              MY RESUME
            </p>
            <h4 className="text-black text-xl lg:text-4xl font-bold ">
              Tentang Karier saya
            </h4>
          </div>
          <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  12/02/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900">Kickoff</h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </li>

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  15/03/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900">
                  First Milestone
                </h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </li>

            <li className="relative -ms-1.5 flex items-start gap-4">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700">
                  24/04/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900">Launch</h3>

                <p className="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default CarrierHistory;
