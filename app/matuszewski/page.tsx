"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "./InfoCard";
import Image from "next/image";
import matuszewskiImg from "@/public/mat2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";
import matuszewskiImgMobile from "@/public/matMobile.png";
import useWindowResize from "@/components/hooks/UseWindowResize";

const infoData = [
  { header: "Project Type", description: "Commercial" },
  { header: "Role / Services", description: "Development & Design" },
  { header: "Year", description: "2024" },
];

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? matuszewskiImgMobile : matuszewskiImg;
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="Matuszewski" className="!m-0" />

            <div className="mt-14 flex flex-col gap-10 md:flex-row lg:mt-20 lg:gap-20">
              {infoData.map((item, index) => (
                <InfoCard
                  key={index}
                  header={item.header}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="max-w-[1860px]">
          <div className="relative">
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="https://www.adwokatmatuszewski.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    Live site
                  </Link>
                </ButtonWrapper>
              </div>
            </motion.div>
            <div className="overflow-hidden">
              <motion.div
                style={{ y }}
                className="relative will-change-transform"
              >
                <Image
                  src={imageSrc}
                  alt="Matuszewski Project image"
                  className="scale-[1]"
                />
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </div>
  );
};

export default Page;
