import { fadeIn } from "@/lib/Animations";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn = ({ children }: FadeInProps) => {
  const textsRef = useRef<HTMLDivElement>(null);
  const isTextsInView = useInView(textsRef, {
    margin: "200px 0px",
  });
  return (
    <motion.div
      ref={textsRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -150px 0px" }}
      transition={{ duration: 0.5, ease: fadeIn }}
      className={`${isTextsInView ? "will-change-[transform,opacity]" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
