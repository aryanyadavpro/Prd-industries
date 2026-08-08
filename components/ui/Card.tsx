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
        "card-editorial",
        !hover && "!shadow-none hover:!transform-none hover:!shadow-none hover:!border-[#E8E2D9]",
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
    <div className={clsx("p-[clamp(1.25rem,3vw,2rem)]", className)}>
      {children}
    </div>
  );
}
