import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ICenteredContainer {
  children: ReactNode;
  className?: string;
}

const CenteredContainer = ({ children, className }: ICenteredContainer) => {
  return (
    <section className={cn("max-w-[1300px] mx-auto", className)}>
      {children}
    </section>
  );
};

export default CenteredContainer;
