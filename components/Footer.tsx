import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ButtonWrapper from "./ButtonWrapper";
import StandardLink from "./StandardLink";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [162, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative flex flex-col items-center justify-center bg-black pt-[clamp(170px,31vh,450px)] text-white"
    >
      <div className="w-full max-w-[1800px] bg-black">
        <div className="relative ml-[200px] mr-[200px] border-b border-b-[#868686] pb-[100px]">
          <motion.div style={{ y, opacity }}>
            <span className="flex items-center">
              <motion.div className="relative h-[120px] w-[120px] overflow-hidden rounded-full">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/IMG_3944retkadr.jpg`}
                  className="object-cover object-top"
                />
              </motion.div>
              <h2 className="m-0 pl-[0.3em] text-[min(5vw,133px)] font-light leading-[1.065]">
                Let&apos;s work
              </h2>
            </span>
            <h2 className="m-0 text-[min(5vw,133px)] font-light leading-[1.065]">
              together
            </h2>
          </motion.div>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
          >
            <div className="absolute bottom-[-175px] flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full bg-primary p-0 py-[15px] text-white">
              <p className="relative z-[2] m-0 text-[16px] font-light transition-[color] duration-400 ease-linear">
                Get in touch
              </p>
            </div>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[100%] top-[30%]"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <motion.div
          style={{ scale }}
          className="mx-[200px] mt-[100px] flex gap-[20px]"
        >
          <ButtonWrapper className="px-[60px] py-[30px]">
            <p className="relative z-[1] transition-[color] duration-400 ease-linear">
              robertrapkowski19@gmail.com
            </p>
          </ButtonWrapper>

          <ButtonWrapper className="px-[60px] py-[30px]">
            <p className="relative z-[1] transition-[color] duration-400 ease-linear">
              +48 698868730
            </p>
          </ButtonWrapper>
        </motion.div>
        <div className="mx-auto mt-[200px] flex max-w-[1400px] justify-between p-[20px]">
          <div className="flex items-end gap-[10px]">
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-pointer p-[2.5px] text-[1em] font-light text-[#868686] hover:after:w-full">
                Version
              </h3>
              <p className="m-0 cursor-pointer p-[2.5px] hover:after:w-full">
                2025 © Edition
              </p>
            </span>
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-pointer p-[2.5px] text-[1em] font-light text-[#868686] hover:after:w-full">
                Local time
              </h3>
              <p className="m-0 cursor-pointer p-[2.5px] hover:after:w-full">
                11:49 PM GMT+2
              </p>
            </span>
          </div>
          <div className="flex items-end gap-[10px]">
            <span className="flex flex-col gap-[15px]">
              <h3 className="m-0 cursor-pointer p-[2.5px] text-[1em] font-light text-[#868686] hover:after:w-full">
                socials
              </h3>
              <StandardLink href="https://www.linkedin.com/in/robert-rapkowski/details/experience/?locale=en_US">
                Linkedin
              </StandardLink>
            </span>
            <StandardLink>Instagram</StandardLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
