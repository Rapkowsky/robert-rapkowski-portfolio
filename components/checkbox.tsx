import { mainAnim } from "@/lib/Animations";
import { motion } from "framer-motion";
import { SVGProps } from "react";

const Checkbox = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center rounded-full text-primary">
      <svg
        {...props}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        className="p-1.5"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: mainAnim }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
