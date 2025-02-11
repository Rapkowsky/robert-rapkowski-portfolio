import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";
import FooterInfo from "./FooterInfo";

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
      className="relative flex flex-col items-center justify-center bg-rrDark pt-[clamp(170px,31vh,450px)] text-white"
    >
      <div className="w-full max-w-[1800px] bg-rrDark">
        <div className="relative ml-[200px] mr-[200px] border-b border-b-rrGrayLight pb-[100px]">
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
            transition={{ ease: [0.45, 0, 0.55, 1] }}
            className="absolute left-[calc(100%-400px)] top-[calc(100%-100px)]"
          >
            <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
              <ButtonWrapper className="relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full bg-primary font-[700] shadow-[0px_8px_200px_rgba(149,157,165,0.2)] shadow-black">
                <Link
                  href="/contact"
                  className="absolute inset-0 z-20 flex items-center justify-center"
                >
                  Get in touch
                </Link>
              </ButtonWrapper>
              {/* <div className="absolute left-[-230px] top-[90px] z-[-10] h-[390px] w-[590px] rounded-full bg-gradient-to-t from-primary via-[#05367f] to-black blur-[200px]"></div> */}
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
          <div className="duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
            <a href="mailto:robertrapkowski19@gmail.com">
              <ButtonWrapper className="border border-rrGrayLight px-[60px] py-[30px]">
                <p className="z-20">robertrapkowski19@gmail.com</p>
              </ButtonWrapper>
            </a>
          </div>

          <div className="duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
            <a href="tel:+48698868730">
              <ButtonWrapper className="border border-rrGrayLight px-[60px] py-[30px]">
                <p className="z-20"> +48 698868730</p>
              </ButtonWrapper>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
