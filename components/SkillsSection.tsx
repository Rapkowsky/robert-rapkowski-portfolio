import Image from "next/image";
import useWindowResize from "./hooks/UseWindowResize";
import { easefadeInUp } from "@/lib/Animations";
import TitleSlideLeft from "./TitleSlideLeft";
import SectionWrapper from "./SectionWrapper";
import techStackImg from "@/public/techstack-img.svg";
import techStackImgM from "@/public/techstack-img-m.svg";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const windowSize = useWindowResize();
  const isMobile = windowSize.width < 650;
  const skillsImg = isMobile ? techStackImgM : techStackImg;

  return (
    <>
      <SectionWrapper className="!pb-0">
        <TitleSlideLeft text="Technology Stack" titleClassName="!m-0" />

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5, ease: easefadeInUp }}
          className="min-[500px]:px-0! my-yMobile px-xMobile"
        >
          <Image src={skillsImg} alt="Tech Stack" className="w-full" />
        </motion.div>
      </SectionWrapper>
    </>
  );
};
