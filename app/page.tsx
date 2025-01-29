"use client";
import Image from "next/image";
import bgImage from "@/public/images/hero-img.jpg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  // Smooth scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  // Text animation
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
      x: "-300px",
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
    xPercent += 0.1 * direction;
  };

  return (
    <main className="relative mb-[100vh] flex h-screen overflow-hidden">
      <Image
        src={bgImage}
        alt="Background image"
        fill
        objectFit="cover"
        quality={100}
      />

      <div className="absolute top-[calc(100vh-350px)]">
        <div
          ref={slider}
          className="relative whitespace-nowrap text-[240px] font-medium text-white"
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
    </main>
  );
};

export default Home;
