"use client";
import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";

interface MagneticWrapperProps {
  children: ReactElement;
  durationIn?: number;
  durationOut?: number;
}

export default function MagneticWrapper({
  children,
  durationIn = 1.75,
  durationOut = 1.75,
}: MagneticWrapperProps) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: durationOut,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: durationIn,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.5);
      yTo(y * 0.5);
    });
    magnetic.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, [durationIn, durationOut]);

  return React.cloneElement(children, { ref: magnetic });
}
