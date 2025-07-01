"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import rBooking from "@/public/rBooking.png";
import rBookingMobile from "@/public/rBookingMobile.png";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import useWindowResize from "@/components/hooks/UseWindowResize";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { rrEaseBtnHover } from "@/lib/Animations";
import Link from "next/link";

const infoData = [
  { header: "Project Type", description: "Frontend Application" },
  { header: "Role / Services", description: ["Development", "Design"] },
  { header: "Year", description: "2025" },
  {
    header: "Technology",
    description: [
      "React",
      "TypeScript",
      "Shadcn",
      "React Router",
      "Redux & Redux Toolkit",
      "TanStack Query",
      "Zod",
      "Axios",
      "React Hook Form",
      "Tailwind CSS",
      "JavaScript",
      "git",
      "Vercel",
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
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "20%"]);

  ScrollToTop();
  SmoothScroll();

  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 768;
  const imageSrc = isMobile ? rBookingMobile : rBooking;

  const words = `More project details`;
  const githubBlockRef = useRef(null);
  const isInView = useInView(githubBlockRef, { once: true });
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="R-booking" className="!m-0 text-left" />

            <InfoCards data={infoData} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="max-w-[1860px]">
          <div className="relative">
            <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                <ButtonWrapper className="relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <Link
                    href="https://r-booking-project.vercel.app"
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
                <Image src={imageSrc} alt="Matuszewski Project image" />
              </motion.div>
            </div>
            <div ref={githubBlockRef} className="mt-16 flex justify-center">
              {isInView && <GitHubBlock words={words} />}
            </div>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </div>
  );
};

const InfoCards = ({ data }: { data: typeof infoData }) => (
  <div className="grid grid-cols-1 gap-10 pt-yMobile md:grid-cols-3 md:pt-yTablet lg:gap-20 xl:pt-yDesktop">
    {data.map((item) => (
      <InfoCard
        key={item.header}
        header={item.header}
        description={item.description}
      />
    ))}
  </div>
);

const GitHubBlock = ({ words }: { words: string }) => {
  return (
    <div className="relative z-10 w-fit">
      <TextGenerateEffect words={words} duration={1.3} />
      <Link
        href="https://github.com/Rapkowsky/r-booking "
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl"
      >
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.5, ease: rrEaseBtnHover }}
        >
          <HoverBorderGradient
            containerClassName="rounded-full mt-5 active:scale-[0.95] absolute bottom-2 sm:bottom-3 md:bottom-5 right-0 xl:bottom-6"
            as="button"
            className="flex items-center space-x-2 bg-white px-6 py-1.5 text-black dark:bg-black dark:text-white sm:px-10 sm:py-3 md:px-14 md:py-[18px] xl:px-[75px] xl:py-5"
          >
            GitHub
          </HoverBorderGradient>
        </motion.div>
      </Link>
    </div>
  );
};
