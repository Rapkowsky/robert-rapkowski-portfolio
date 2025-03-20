import { cn } from "@/lib/utils";
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const PageWrapper = ({ className, children }: PageWrapperProps) => {
  return <div className={cn("pt-10 md:pt-16", className)}>{children}</div>;
};

export default PageWrapper;
