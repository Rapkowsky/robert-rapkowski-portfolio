"use client";
import SectionWrapper from "@/components/SectionWrapper";

import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { LuPanelsLeftBottom } from "react-icons/lu";
import { IoPulseOutline } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import Image from "next/image";
import rrImg from "@/public/IMG_3944retkadr.jpg";
import { RiSpeakAiLine } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";
import { easefadeInUp, mainAnim, wordSlideUp } from "@/lib/Animations";
import { ScrollToTop, SmoothScroll } from "@/lib/utils";

const data = [
  {
    title: "Development",
    description:
      "I am a Frontend Developer with over 3 years of professional experience in building user application interfaces. I leverage Next.js, React, and TypeScript to craft modern, fast, and scalable applications and websites. I am also interested in fullstack development to gain a broad view of architecture and deepen my knowledge, enabling me to deliver optimal solutions.",
    Icon: FaCode,
  },
  {
    title: "Design & Quality",
    description:
      "With 10 years in the industry, I have worked closely with design teams and delivered pixel-perfect user application interfaces based on detailed project requirements. This experience has helped me develop a solid understanding of best practices and a professional approach to UX/UI. My previous work as a tester also gave me an appreciation for software quality.",
    Icon: LuPanelsLeftBottom,
  },
  {
    title: "SEO",
    description:
      "When it comes to SEO and performance, I'm no stranger to metrics like FCP, LCP, TBT, and CLS. I believe that top-notch performance always goes hand in hand with smart design and solid mechanics for websites and applications. I pay attention to optimizing assets, implementing responsive design, and using techniques such as lazy loading to improve loading times. Additionally, I leverage server-side rendering (SSR) and static site generation (SSG) to enhance both performance and SEO.",
    Icon: IoPulseOutline,
  },
  {
    title: "AI = opportunity != threat",
    description:
      "From my experience, I can see that using AI tools can really streamline work and make a lot of tasks easier—if you know how to use them well. At the same time, I think it’s important to remember that AI always needs to be supervised and double-checked, because leaving it unchecked can easily lead to mistakes.",
    Icon: RiRobot2Fill,
  },
  {
    title: "Beyond Code",
    description:
      "Not only do I bring technical skills to the table, but I also value good communication and strong soft skills—I believe these are key to working well in a team and building lasting relationships with clients. I really appreciate a positive atmosphere at work, as it helps everyone do their best.",
    Icon: RiSpeakAiLine,
  },
  {
    title: "Stable Collaboration",
    description:
      "My professional experience clearly shows that I value long-term partnerships - you can always count on me.",
    Icon: PiHandshake,
  },
];

const ImageGridHero = () => {
  SmoothScroll();
  ScrollToTop();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const container = useRef(null);
  const { scrollYProgress: curveScrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(containerScrollYProgress, [0, 0.5], [100, 0]);
  const height = useTransform(curveScrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(containerScrollYProgress, [0, 0.5], [0, 1]);

  const phrase =
    "Frontend Developer leveraging Next.js, React and TypeScript — crafting modern, fast, and scalable applications and websites. Also interested in fullstack development to gain a broad view of architecture and deep knowledge, enabling me to deliver optimal solutions.";
  const description1Ref = useRef(null);
  const isInView1 = useInView(description1Ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <>
      <section ref={targetRef} className="h-[350vh]">
        <motion.div className="absolute top-0 z-[1] h-[30vh] w-screen bg-gradient-to-b from-black to-transparent" />
        <motion.div
          initial={{ y: "300px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: mainAnim }}
          className="sticky top-0 z-0 grid h-[100svh] grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-4"
        >
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <div className="absolute bottom-0 z-10 h-[20vh] w-screen bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      </section>

      <SectionWrapper className="max-w-[1730px]">
        <div className="flex min-h-[100svh] flex-col">
          <div className="relative mb-28 md:mb-40">
            <motion.p
              className="mb-28 flex max-w-[1040px] flex-wrap gap-x-2 text-left text-[9.1vw] font-medium normal-case !leading-[1.2] min-[500px]:text-[8.4vw] md:mb-40 md:text-5xl"
              ref={description1Ref}
            >
              {phrase.split(" ").map((word, index) => {
                return (
                  <span
                    className="relative inline-flex overflow-hidden"
                    key={index}
                  >
                    <motion.span
                      key={index}
                      variants={wordSlideUp}
                      custom={index}
                      initial="closed"
                      animate={isInView1 ? "open" : "closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </motion.p>

            <div className="overflow-hidden">
              <motion.div
                initial={{ x: "-25vw" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.8, ease: mainAnim }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="h-[0.5px] w-full bg-[linear-gradient(90deg,#fe5766,#c1498b,#6e30f8,#146ef5,transparent)]"
              />
              <motion.div
                className="absolute bottom-[-95px] right-[15%] z-[1]"
                initial={{ x: "-15vw" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2, ease: mainAnim }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <motion.div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                  <ButtonWrapper className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-bgDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                    <Link
                      href="/contact"
                      className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                      Say Hi!
                    </Link>
                  </ButtonWrapper>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div
            ref={containerRef}
            className="my-yTablet flex items-center gap-5"
          >
            <motion.div style={{ y, opacity }}>
              <Image
                src={rrImg}
                alt="image"
                className="h-[120px] w-[120px] rounded-full object-cover object-top"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5, ease: mainAnim }}
              className="text-5xl font-semibold leading-[1.2]"
            >
              Why me?
            </motion.h1>
          </div>

          <div className="flex flex-wrap gap-20">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easefadeInUp, delay: i * 0.2 }}
                className="min-w-[300px] flex-1"
              >
                <p className="mb-10 border-b pb-5 text-stone-400">0{i + 1}</p>
                <div className="mb-10 flex items-center gap-5">
                  <item.Icon className="text-[35px]" />
                  <p className="text-4xl font-semibold">{item.title}</p>
                </div>
                <p className="text-xl text-stone-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <motion.div style={{ height }} className="relative w-full">
        <div className="absolute left-[-10%] z-[1] h-[900%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-white duration-500 dark:bg-black" />
      </motion.div>
    </>
  );
};

const Copy = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute z-20 flex h-[100svh] w-full flex-col items-center justify-center px-8"
    >
      <h1 className="max-w-xl text-center text-5xl font-bold md:text-7xl">
        Some pixels from my life.
      </h1>
      <p className="my- text-stone-00 max-w-xl text-center text-sm md:text-base"></p>
    </motion.div>
  );
};

const Images = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const imageOffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const imageOffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrolling(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="relative z-10 col-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/lake.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />
      <motion.div
        className="relative z-10 row-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/rr2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />

      <motion.div
        className="relative z-10 row-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/rr8.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/guitar.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "32%",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/zanzi.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "10% 90%",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/jordan.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: imageOffsetX,
          y: imageOffsetY,
          transform: "translateZ(0)",
          willChange: isScrolling ? "transform" : undefined,
        }}
      />
    </>
  );
};

export default ImageGridHero;
