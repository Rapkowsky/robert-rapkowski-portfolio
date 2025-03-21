"use client";
import PageWrapper from "@/components/PageWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import Title from "@/components/Title";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";
import { InfoCard } from "@/components/InfoCard";
import Image from "next/image";
import petsoft from "@/public/petsoft.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";
import useWindowResize from "@/components/hooks/UseWindowResize";
// import portfolioPerformanceD from "@/public/portfolioPerformanceD.png";
// import portfolioPerformanceM from "@/public/portfolioPerformanceM.png";

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
  const imageSrc = isMobile ? petsoft : petsoft;
  return (
    <div ref={container} className="min-h-screen">
      <PageWrapper className="">
        <SectionWrapper className="!pb-0">
          <div className="relative flex flex-col">
            <Title text="Pet Soft" className="!m-0 text-left" />

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
              <div className="relative">
                <ButtonWrapper className="bg-bg-stone-500 relative flex h-[120px] w-[120px] cursor-not-allowed items-center justify-center rounded-full font-medium text-white dark:bg-stone-500 md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                  <div className="flex items-center justify-center gap-1">
                    <span className="z-20">Coming soon</span>
                    <div className="z-20">
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.3,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.3,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      >
                        .
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.3,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      >
                        .
                      </motion.span>
                    </div>
                  </div>
                </ButtonWrapper>
              </div>
            </motion.div>
            <div className="overflow-hidden bg-[#2e9677]">
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
// const performanceData = [
//   {
//     src: portfolioPerformanceD,
//     alt: "Matuszewski Performance",
//     className: "",
//   },
//   {
//     src: portfolioPerformanceM,
//     alt: "Matuszewski Performance",
//     className: "px-16 max-w-[300px] md:px-0  mx-auto justify-end",
//   },
// ];
// const Section2 = () => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
//   return (
//     <div ref={container} className="from-black to-bgGray">
//       <SectionWrapper className="flex min-h-[100vh] items-center justify-center !pt-0">
//         <motion.div
//           style={{ y, willChange: "transform" }}
//           className="flex flex-col gap-20 md:flex-row"
//         >
//           {performanceData.map((item, index) => (
//             <div key={index} className={`flex flex-col ${item.className}`}>
//               <Image src={item.src} alt={item.alt} className="" />
//             </div>
//           ))}
//         </motion.div>
//       </SectionWrapper>
//     </div>
//   );
// };
