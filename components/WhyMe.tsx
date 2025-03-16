import Image from "next/image";
import React, { useRef } from "react";
import appleIMg from "@/public/images/appleImg.jpg";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Title from "./Title";
import { fadeIn } from "@/lib/Animations";
import FadeIn from "./FadeIn";

const WhyMe = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const isImgInView = useInView(videoContainerRef, {
    margin: "300px 0px",
  });
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const ySpacing = "dark:py-yMobile dark:md:py-yTablet dark:xl:py-yDesktop";
  return (
    <>
      <div className={`relative justify-center ${ySpacing} flex bg-black`}>
        <motion.div
          style={{ opacity }}
          ref={videoContainerRef}
          className={`flex h-[180vh] min-h-[1530px] flex-col bg-black md:min-h-[1000px] lg:h-[150vh] xl:h-[145vh] ${isImgInView ? "will-change-[opacity]" : ""}`}
        >
          <Image
            src={appleIMg}
            alt=""
            quality={100}
            className="sticky top-0 h-screen object-cover object-[21%,0%] md:object-top"
          />
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1, once: true }}
            transition={{ duration: 0.5, ease: fadeIn }}
            className="absolute w-full pt-10"
          >
            <Title
              text="Where Creativity Meets Code"
              className="!mb-0 px-xMobile text-[min(8.8vw,40px)] font-bold md:text-[min(6.6vw,55px)] xl:text-[90px]"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-[100px] flex h-[100svh] max-w-[1200px] flex-col justify-end gap-10 px-xMobile text-[min(7.9vw,40px)] font-bold text-white min-[500px]:px-xTablet lg:gap-20 lg:text-6xl xl:text-7xl">
          <FadeIn>
            <p>Over 10 years of experience in the IT industry.</p>
          </FadeIn>
          <FadeIn>
            <p>Frontend Developer - Code Crafted with a Designer’s Eye.</p>
          </FadeIn>
          <FadeIn>
            <p>Quality Always Takes Center Stage.</p>
          </FadeIn>
          <FadeIn>
            <p>Stable Collaboration: Where Trust Fuels Innovation.</p>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default WhyMe;
