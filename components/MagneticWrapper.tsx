"use client";
import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";
import useWindowResize from "./hooks/UseWindowResize";

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
  const magnetic = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowResize();
  const isMobile = width < 1024;
  useEffect(() => {
    if (!magnetic.current || isMobile) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: durationOut,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: durationIn,
      ease: "elastic.out(1, 0.3)",
    });

    const node = magnetic.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = node.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.5);
      yTo(y * 0.5);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [durationIn, durationOut, isMobile]);

  return (
    // @ts-expect-error – child DOM with ref
    React.cloneElement(children, { ref: magnetic })
  );
}
