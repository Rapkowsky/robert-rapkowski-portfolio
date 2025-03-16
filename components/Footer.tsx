"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ButtonWrapper from "./ButtonWrapper";
import Link from "next/link";
import { mainAnim } from "@/lib/Animations";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [162, 90]);
  return (
    !isContactPage && (
      <motion.div
        ref={container}
        className="relative flex h-[calc(100vh-130px)] max-h-[1400px] min-h-[750px] flex-col items-center justify-center bg-bgGray px-xMobile text-white min-[500px]:px-xTablet"
      >
        <div className="relative w-full max-w-[1300px] bg-bgGray">
          <div className="relative pb-[100px]">
            <motion.div style={{ y, opacity }}>
              <div className="flex items-center">
                <motion.div className="relative h-[60px] w-[60px] overflow-hidden rounded-full md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px]">
                  <Image
                    fill={true}
                    alt={"image"}
                    src={`/images/IMG_3944retkadr.jpg`}
                    className="object-cover object-top"
                  />
                </motion.div>
                <h2 className="ml-4 text-[2.9rem] leading-[1.065] md:text-7xl lg:text-8xl xl:text-9xl">
                  Let&apos;s work
                </h2>
              </div>
              <h2 className="text-[2.9rem] leading-[1.065] md:text-7xl lg:text-8xl xl:text-9xl">
                together
              </h2>
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.6, ease: mainAnim }}
              viewport={{ once: true }}
              className="absolute bottom-[-70px] left-[unset] right-[10%] z-[1] max-[374px]:left-[40%] md:bottom-[-85px] lg:bottom-[-98px]"
            >
              <div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
                <ButtonWrapper className="relative flex h-[145px] w-[145px] cursor-pointer items-center justify-center rounded-full bg-primary text-xs font-bold md:h-[175px] md:w-[175px] md:text-base lg:h-[200px] lg:w-[200px]">
                  <Link
                    href="/contact"
                    className="absolute inset-0 z-20 flex items-center justify-center font-medium"
                  >
                    Get in touch
                  </Link>
                </ButtonWrapper>
              </div>
            </motion.div>
            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[90%] top-[45%]"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>
          <div className="relative z-0 h-[1px] w-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.6, ease: mainAnim }}
              viewport={{ once: true }}
              className="absolute bottom-0 h-[1px] w-full bg-borderGray"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: mainAnim }}
            viewport={{ amount: 1, once: true }}
            className="mt-[120px] flex flex-col gap-3 md:flex-row"
          >
            <div className="duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
              <a href="mailto:robertrapkowski19@gmail.com">
                <ButtonWrapper className="border border-borderGray px-14 py-6 xl:py-7">
                  <p className="z-20">robertrapkowski19@gmail.com</p>
                </ButtonWrapper>
              </a>
            </div>

            <div className="duration-3000 ease-rrEaseBtnHover active:scale-[0.75]">
              <a href="tel:+48698868730">
                <ButtonWrapper className="border border-borderGray px-14 py-6 xl:py-7">
                  <p className="z-20"> +48 698868730</p>
                </ButtonWrapper>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  );
}
