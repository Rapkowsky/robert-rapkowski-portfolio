"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import portfolioImg from "@/public/apple3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";
import matuszewskiImgMobile from "@/public/matMobile.png";
import useWindowResize from "@/components/hooks/UseWindowResize";
import portfolioPerformanceD from "@/public/portfolioPerformanceD.png";
import portfolioPerformanceM from "@/public/portfolioPerformanceM.png";

const infoData = [
  { header: "Project Type", description: "Private" },
  { header: "Role / Services", description: ["Development", "Design"] },
  { header: "Year", description: "2025" },
  { header: "Technology", description: ["Next.js", "React", "Tailwind"] },
];

const Page = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Page;

const Section1 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? portfolioImg : portfolioImg;
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="Portfolio" className="!m-0 text-left" />

            <div className="grid grid-cols-1 gap-10 pt-yMobile md:grid-cols-3 md:pt-yTablet lg:gap-20 xl:pt-yDesktop">
              {infoData.map((item, i) => (
                <div key={i}>
                  <InfoCard
                    header={item.header}
                    description={item.description}
                  />
                </div>
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
                    href="/"
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
                style={{ y, willChange: "transform" }}
                className="relative will-change-transform"
              >
                <Image
                  src={imageSrc}
                  alt="Matuszewski Project image"
                  className="scale-[1.1]"
                />
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </div>
  );
};
const performanceData = [
  {
    src: portfolioPerformanceD,
    alt: "Matuszewski Performance",
    className: "",
  },
  {
    src: portfolioPerformanceM,
    alt: "Matuszewski Performance",
    className: "px-16 max-w-[300px] md:px-0  mx-auto justify-end",
  },
];
const Section2 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <div ref={container} className="from-black to-bgGray">
      <SectionWrapper className="flex min-h-[100vh] items-center justify-center !pt-0">
        <motion.div
          style={{ y, willChange: "transform" }}
          className="flex flex-col gap-20 md:flex-row"
        >
          {performanceData.map((item, index) => (
            <div key={index} className={`flex flex-col ${item.className}`}>
              <Image src={item.src} alt={item.alt} className="" />
            </div>
          ))}
        </motion.div>
      </SectionWrapper>
    </div>
  );
};
