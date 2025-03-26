"use client";
import React from "react";
import CurrentYear from "./CurrentYear";
import StandardLink from "./StandardLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const FooterInfo = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    !isContactPage && (
      <div className="bg-bgGray">
        <div className="relative mx-auto flex max-w-[1900px] justify-between px-xMobile py-10">
          <div className="absolute left-[20px] top-0 h-[1px] w-[calc(100%-40px)] bg-borderGray md:hidden" />
          <div className="flex items-end gap-3">
            <span className="flex flex-col gap-3">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                className="m-0 text-xs font-light text-textGray hover:after:w-full"
              >
                VERSION
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.45, 0, 0.55, 1],
                }}
              >
                <CurrentYear />
              </motion.div>
            </span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
              className="m-0 text-xs font-light text-textGray hover:after:w-full"
            >
              SOCIALS
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.45, 0, 0.55, 1] }}
              className="flex space-x-5 text-white"
            >
              <StandardLink href="https://www.linkedin.com/in/robert-rapkowski/details/experience/?locale=en_US">
                Linkedin
              </StandardLink>
              <StandardLink href="https://github.com/Rapkowsky/robert-rapkowski-portfolio">
                Github
              </StandardLink>
            </motion.div>
          </div>
        </div>
      </div>
    )
  );
};

export default FooterInfo;
