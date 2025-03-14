"use client";
import SectionWrapper from "@/components/SectionWrapper";
import { easefadeInUp, mainAnim, wordSlideUp } from "@/lib/Animations";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { FaCode } from "react-icons/fa6";
import { LuPanelsLeftBottom } from "react-icons/lu";
import { IoPulseOutline } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import Image from "next/image";
import rrImg from "@/public/images/IMG_3944retkadr.jpg";
import { RiSpeakAiLine } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
import ButtonWrapper from "@/components/ButtonWrapper";
import Link from "next/link";

const data = [
  {
    title: "Development",
    description:
      "For over three years, I've been exploring Frontend development—a journey I truly adore. I thrive on the details, from microanimations to interactive touches that captivate users. While I continuously refine my Frontend expertise, my next ambition is to evolve into a Full Stack Developer.",
    Icon: FaCode,
  },
  {
    title: "Design",
    description:
      "With 10 years in the industry, collaborating with design teams and delivering pixel-perfect websites based on meticulous projects has honed my expertise in best practices and given me a professional eye for UX/UI.",
    Icon: LuPanelsLeftBottom,
  },
  {
    title: "SEO",
    description:
      "When it comes to SEO and performance, I'm no stranger to metrics like FCP, LCP, TBT, and CLS. I believe that top-notch performance always goes hand in hand with smart design and solid mechanics for websites and applications.",
    Icon: IoPulseOutline,
  },
  {
    title: "AI = opportunity != threat",
    description:
      "AI is an opportunity, not a threat—it's the key to unlocking innovative potential and transforming challenges into creative breakthroughs. AI facilitates the acquisition of new skills and, when leveraged effectively, can accelerate work processes severalfold.",
    Icon: RiRobot2Fill,
  },
  {
    title: "Beyond Code",
    description:
      "Not only do I bring technical expertise to the table, but I'm also a strong communicator with finely honed soft skills—qualities I consider essential for thriving in teamwork and building lasting client relationships.",
    Icon: RiSpeakAiLine,
  },
  {
    title: "Stable Collaboration",
    description:
      "My professional experience clearly shows that I value long-term partnerships—you can always count on me.",
    Icon: PiHandshake,
  },
];

const ImageGridHero = () => {
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
    "Cutting-edge Frontend Developer delivering bespoke, responsive digital experiences, driven by quality and the latest technologies.";
  const description1Ref = useRef(null);
  const isInView1 = useInView(description1Ref, {
    amount: 1,
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
          className="sticky top-0 z-0 grid h-screen grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-4"
        >
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <div className="absolute bottom-0 z-10 h-[20vh] w-screen bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      </section>

      <SectionWrapper className="max-w-[1730px]">
        <div className="flex min-h-screen flex-col">
          <div className="relative mb-28 md:mb-40">
            <motion.p
              className="mb-28 flex max-w-[1040px] flex-wrap gap-x-2 text-left text-[9.1vw] font-medium normal-case !leading-[1.2] min-[500px]:text-[8.4vw] md:mb-40 md:text-6xl xl:text-7xl"
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
            {/* <TitleSlideLeft
              titleClassName="normal-case text-left xl:text-7xl !leading-[1.1] font-medium text-[9.1vw] min-[500px]:text-[8.4vw] md:text-6xl"
              text="Cutting-edge Frontend Developer delivering bespoke, responsive digital experiences, driven by quality and the latest technologies."
            ></TitleSlideLeft> */}

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
                  <ButtonWrapper className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
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
              viewport={{ amount: 1, margin: "0px 0px -300px 0px" }}
              className="text-5xl font-semibold leading-[1.2]"
            >
              Why me?
            </motion.h1>
          </div>

          <div className="flex flex-wrap gap-20">
            {data.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easefadeInUp, delay: i * 0.2 }}
                viewport={{ amount: 1, margin: "300px 0px 0px 0px" }}
                key={i}
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
        <div className="absolute left-[-10%] z-[1] h-[1600%] w-[120%] rounded-bl-[50%] rounded-br-[50%] rounded-tl-none rounded-tr-none bg-white duration-500 dark:bg-black" />
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease: mainAnim }}
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute z-20 flex h-screen w-full flex-col items-center justify-center px-8"
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

  return (
    <>
      <motion.div
        className="relative z-10 col-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="relative z-10 row-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="relative z-10 row-span-2"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr8.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr4.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "32%",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr5.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          borderRadius: "10px",
          backgroundImage: "url(/images/rr6.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: imageOffsetX,
          y: imageOffsetY,
        }}
      />
    </>
  );
};

export default ImageGridHero;
