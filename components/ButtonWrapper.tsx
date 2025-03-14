import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticWrapper from "./MagneticWrapper";
import { cn } from "@/lib/utils";

interface ButtonWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  overlayBgColor?: string;
}

export default function ButtonWrapper({
  className,
  children,
  overlayBgColor = "bg-primaryDarker",
  ...attributes
}: ButtonWrapperProps) {
  const circle = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
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
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <MagneticWrapper>
      <div
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-full",
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
            "absolute top-full z-10 h-[150%] w-full rounded-full",
            overlayBgColor,
          )}
        ></div>
      </div>
    </MagneticWrapper>
  );
}
