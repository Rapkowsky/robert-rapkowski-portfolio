import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticWrapper from "./MagneticWrapper";
import { cn } from "@/lib/utils";

export default function ButtonWrapper({
  className,
  children,
  overlayBgColor = "bg-primaryDarker",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <MagneticWrapper>
      <div
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-full will-change-transform",
          className,
        )}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          className={cn(
            "absolute top-full z-10 h-[150%] w-full rounded-full will-change-[width,top]",
            overlayBgColor,
          )}
        ></div>
      </div>
    </MagneticWrapper>
  );
}
