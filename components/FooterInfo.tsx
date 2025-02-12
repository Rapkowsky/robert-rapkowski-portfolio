import React from "react";
import CurrentYear from "./CurrentYear";
import StandardLink from "./StandardLink";

const FooterInfo = () => {
  return (
    <section className="bg-rrDark">
      <div className="mx-auto flex max-w-[1800px] justify-between pb-10 pt-[200px]">
        <div className="flex items-end gap-[10px]">
          <span className="flex flex-col gap-[15px]">
            <h3 className="m-0 font-light text-rrGrayText hover:after:w-full text-xs">
              VERSION
            </h3>

            <CurrentYear />
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="m-0 font-light text-rrGrayText hover:after:w-full text-xs">
            SOCIALS
          </p>

          <div className="flex space-x-5 text-white">
            <StandardLink href="https://www.linkedin.com/in/robert-rapkowski/details/experience/?locale=en_US">
              Linkedin
            </StandardLink>
            <StandardLink>Instagram</StandardLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterInfo;
