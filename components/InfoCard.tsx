import { mainAnim } from "@/lib/Animations";
import { motion } from "framer-motion";
import { RiCheckboxCircleFill } from "react-icons/ri";

interface InfoCardProps {
  header: string;
  description: string | string[];
}

export const InfoCard = ({ header, description }: InfoCardProps) => {
  return (
    <div className="flex-col overflow-clip">
      <p className="text-xs uppercase text-textGray">{header}</p>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: mainAnim, delay: 1 }}
        className="mb-3 mt-2 h-[1px] bg-bgGrayLight"
      />
      {Array.isArray(description) ? (
        <div className="flex flex-wrap gap-5">
          {description.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <RiCheckboxCircleFill className="text-bgGrayLight" />
              <p className="lg:text-lg">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="lg:text-lg">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
      )}
    </div>
  );
};
