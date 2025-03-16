import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      style={{
        outline: "none",
      }}
      className={cn(
        "ease-fadeIn !m-0 flex min-h-[60px] w-full border-b border-neutral-600 bg-transparent px-5 py-2 pb-6 pt-6 text-xl shadow-sm duration-700 file:font-medium file:text-foreground placeholder:text-xl placeholder:text-muted-foreground placeholder:text-neutral-600 placeholder:transition-[border,transform,opacity] placeholder:duration-500 focus:border-neutral-300 focus:placeholder:-translate-y-5 focus:placeholder:opacity-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
