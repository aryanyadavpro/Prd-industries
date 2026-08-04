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
        "rounded-[32px] neu-extruded overflow-hidden transition-all duration-300 ease-out",
        hover && "hover:neu-extruded-hover hover:-translate-y-1 group",
        className
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
    <div className={clsx("p-[clamp(1.25rem,4vw,2.25rem)]", className)}>
      {children}
    </div>
  );
}
