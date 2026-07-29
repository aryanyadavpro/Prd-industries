import { clsx } from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-[clamp(0.75rem,2vw,1rem)] border border-gray-800 bg-gray-900/60 backdrop-blur-sm overflow-hidden",
        hover &&
          "transition-all duration-300 hover:-translate-y-[clamp(0.125rem,0.4vw,0.25rem)] hover:shadow-xl hover:shadow-amber-500/5 hover:border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("p-[clamp(0.75rem,3vw,1.5rem)]", className)}>
      {children}
    </div>
  );
}
