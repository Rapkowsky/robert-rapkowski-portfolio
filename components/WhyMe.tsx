import React, { useRef } from "react";
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

  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, {
    margin: "200px 0px",
  });
  return (
    <>
      <div className={`relative z-10 justify-center ${ySpacing} flex bg-black`}>
        <motion.div
          style={{ opacity }}
          ref={videoContainerRef}
          className={`flex h-[180vh] min-h-[1500px] flex-col bg-black lg:h-[150vh] xl:h-[165vh] ${isImgInView ? "will-change-[opacity]" : ""}`}
        >
          <video
            src="/keyboard.webm"
            muted
            loop
            playsInline
            autoPlay
            className="sticky top-0 h-[100svh] w-screen object-cover object-[21%,0%] md:object-top"
          />
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1, once: true }}
            transition={{ duration: 0.5, ease: fadeIn }}
            className="absolute w-full pt-28"
            style={{ willChange: isTitleInView ? "transform" : undefined }}
          >
            <Title
              text="Where Creativity Meets Code"
              className="!mb-0 px-xMobile text-[min(8.8vw,40px)] font-bold text-white md:text-[min(6.6vw,55px)] xl:text-[90px]"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-[200px] flex h-[100svh] max-w-[1200px] flex-col justify-end gap-10 px-xMobile text-[min(7.9vw,40px)] font-bold text-white min-[500px]:px-xTablet lg:gap-20 lg:text-6xl xl:text-7xl">
          <FadeIn>
            <p>Over 10 years of experience in the IT industry.</p>
          </FadeIn>
          <FadeIn>
            <p>Frontend Developer - code crafted with a designer’s eye.</p>
          </FadeIn>
          <FadeIn>
            <p>Quality always takes center stage.</p>
          </FadeIn>
          <FadeIn>
            <p>Over 3 years of professional commercial experience</p>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default WhyMe;
