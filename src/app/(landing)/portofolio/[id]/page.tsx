import React from "react";
import Container from "@/components/container";
import PortofolioPict from "@/modules/portofolio/PortofolioPict";
import PortofolioDesc from "@/modules/portofolio/PortofolioDesc";
import PortofolioInfo from "@/modules/portofolio/PortofolioInfo";
import PortofolioContact from "@/modules/portofolio/PortofolioContact";
import { Metadata, ResolvingMetadata } from "next";
import portofolioList from "@/data/portofolio.json";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const portofolio = portofolioList.find((item) => item.slug === id);

  return {
    title: `${id} | Dytama`,
    description: portofolio?.meta_description,
  };
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  const portofolio = portofolioList.find((item) => item.slug === id);

  if (!portofolio) {
    return <div>Portofolio tidak ditemukan</div>;
  }

  const header = {
    name: portofolio.name,
    type: portofolio.type,
    picture: portofolio.imgUrl,
  };

  const description = {
    overview_description: portofolio.overview_description,
    the_challenge: portofolio.the_challenge,
    the_solution: portofolio.the_solution,
    features: portofolio.features,
  };

  const projectDesc = {
    category: portofolio.category,
    duration: portofolio.duration,
    client: portofolio.client,
    develope: portofolio.develope,
  };

  return (
    <section className="py-14 lg:py-30 relative w-full bg-white dark:bg-slate-900">
      <Container className="relative w-full space-y-5">
        <PortofolioPict data={header} />
        <div className="pt-5 flex flex-col lg:flex-row w-full gap-5">
          <div className="lg:w-3/5 space-y-6">
            <PortofolioDesc data={description} />
          </div>
          <div className="lg:w-2/5 ">
            <div className="space-y-5">
              <PortofolioInfo data={projectDesc} />
              <PortofolioContact />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
