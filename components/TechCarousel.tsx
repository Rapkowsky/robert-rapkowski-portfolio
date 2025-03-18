import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  randomTechsSet1,
  randomTechsSet2,
  techsStatic,
  TechType,
} from "./TechCarouselData";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useWindowSize } from "react-use";

const TechCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1],
  );

  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0],
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0],
  );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive",
  );
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const centerImgOpacity = useTransform(scrollYProgress, [0, 0.66], [0, 1]);

  return (
    <motion.div animate={carouselVariant} className="bg-black pb-8">
      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={techsStatic[0].poster}
                alt={techsStatic[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale, opacity: centerImgOpacity }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={techsStatic[1].poster}
                alt={techsStatic[1].name}
              />
              {/* <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 z-10 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>Best video title ever</p>
              </motion.div> */}
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={techsStatic[2].poster}
                alt={techsStatic[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallCarousel techs={randomTechsSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallCarousel techs={randomTechsSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechCarousel;

const SmallCarousel = ({ techs }: { techs: TechType[] }) => {
  return (
    <div className="overflow-clip">
      <div className="relative left-[var(--carousel-offset,0px)] flex animate-carousel-move gap-3">
        {techs.map((tech, i) => {
          return (
            <div
              key={`${tech.name}-${i}`}
              className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
            >
              <Image
                width={1000}
                height={1000}
                src={tech.poster}
                alt={tech.name}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
