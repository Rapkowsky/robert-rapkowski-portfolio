"use client";
import Image from "next/image";
import bgImage from "@/public/images/apple2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Animations";

export default function HeroSection() {
  const firstText = useRef(null);
  const secondText = useRef<HTMLDivElement>(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };
  return (
    <section className="relative flex h-[100svh] overflow-hidden">
      <div>
        <motion.div
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: fadeIn }}
          viewport={{ once: true }}
        >
          <Image
            src={bgImage}
            alt="Background image"
            quality={100}
            className="h-[100svh] w-screen object-cover"
          />
        </motion.div>
        <div className="absolute bottom-10">
          <div
            ref={slider}
            className="relative z-10 whitespace-nowrap text-[clamp(180px,36vw,310px)] font-medium text-white"
          >
            <p
              ref={firstText}
              className="relative m-0 pr-[50px] will-change-transform"
            >
              Freelance Developer -
            </p>

            <p
              ref={secondText}
              className="absolute left-full top-0 m-0 pr-[50px] will-change-transform"
            >
              Freelance Developer -
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-10px] z-[1] float-left h-[50vh] w-full bg-[linear-gradient(to_top,black,transparent)] opacity-0 duration-500 dark:opacity-100" />
    </section>
  );
}
