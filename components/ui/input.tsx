import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        style={{
          outline: "none",
        }}
        className={cn(
          "ease-fadeIn !m-0 flex w-full border-b border-input border-neutral-600 bg-transparent px-5 pb-6 pt-6 text-xl shadow-sm duration-700 file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-xl placeholder:text-neutral-600 placeholder:transition-[border,transform,opacity] placeholder:duration-500 focus:border-neutral-300 focus:placeholder:-translate-y-5 focus:placeholder:opacity-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
