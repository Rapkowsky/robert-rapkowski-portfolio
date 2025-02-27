"use client";
import Image from "next/image";
import bgImage from "@/public/images/canyon-1740973.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Clock from "./Clock";

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
    <section className="relative flex h-screen overflow-hidden">
      <Clock />
      <div>
        <Image
          src={bgImage}
          alt="Background image"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10">
          <div
            ref={slider}
            className="relative z-10 whitespace-nowrap text-[clamp(180px,36vw,310px)] font-medium text-white"
          >
            <p ref={firstText} className="relative m-0 pr-[50px]">
              Freelance Developer -
            </p>

            <p
              ref={secondText}
              className="absolute left-full top-0 m-0 pr-[50px]"
            >
              Freelance Developer -
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-[1] float-left h-[50vh] w-full bg-[linear-gradient(to_top,#080808_0%,rgba(8,8,8,0.738)_19%,rgba(8,8,8,0.541)_34%,rgba(8,8,8,0.382)_47%,rgba(8,8,8,0.278)_56.5%,rgba(8,8,8,0.194)_65%,rgba(8,8,8,0.126)_73%,rgba(8,8,8,0.075)_80.2%,rgba(8,8,8,0.042)_86.1%,rgba(8,8,8,0.021)_91%,rgba(8,8,8,0.008)_95.2%,rgba(8,8,8,0.002)_98.2%,transparent_100%)] opacity-0 duration-500 ease-rrSmooth dark:opacity-100" />
    </section>
  );
}
