import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { motion } from "framer-motion";
export default function ComingSoonBtn() {
  return (
    <motion.div className="absolute inset-0 z-10 flex items-center justify-center will-change-transform">
      <div className="relative">
        <ButtonWrapper className="bg-bg-stone-500 relative flex h-[120px] w-[120px] cursor-not-allowed items-center justify-center rounded-full font-medium text-white dark:bg-stone-500 md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
          <div className="flex items-center justify-center gap-1">
            <span className="z-20">Coming soon</span>
            <div className="z-20">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  delay: 0,
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  delay: 0.4,
                }}
              >
                .
              </motion.span>
            </div>
          </div>
        </ButtonWrapper>
      </div>
    </motion.div>
  );
}
