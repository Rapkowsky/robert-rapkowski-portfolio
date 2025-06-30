"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import petsoft from "@/public/devhub-bg-git.png";
import petsoftM from "@/public/m-devhub-bg-git.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import useWindowResize from "@/components/hooks/UseWindowResize";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const infoData = [
  { header: "Project Type", description: "Fullstack Application" },
  { header: "Role / Services", description: ["Development", "Design"] },
  { header: "Year", description: "2025" },
  {
    header: "Technology",
    description: [
      "nextjs",
      "react",
      "typescript",
      "react hook form",
      "zod",
      "openai",
      "mongodb",
      "tailwind",
      "shadcnui",
      "motion",
      "node",
      "prisma",
      "git",
      "vercel",
    ],
  },
];

const Page = () => {
  return (
    <div>
      <Section1 />
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? petsoftM : petsoft;
  const words = `Visit the GitHub repository to learn more about project details and get involved.`;

  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="DevHub" className="!m-0 text-left" />

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
            <TextGenerateEffect
              words={words}
              duration={0.5}
              className="mt-14"
            />
            <HoverBorderGradient
              containerClassName="rounded-full mt-5 active:scale-[0.95]"
              as="button"
              className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              <Link
                href="https://github.com/Rapkowsky/dev-hub "
                target="_blank"
                rel="noopener noreferrer"
                className="px-14"
              >
                Github
              </Link>
            </HoverBorderGradient>
          </div>
        </SectionWrapper>

        <SectionWrapper className="max-w-[1860px]">
          <div className="relative">
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="https://devhub-prod.vercel.app/"
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
                <Image src={imageSrc} alt="DevHub Project image" />
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </div>
  );
};
