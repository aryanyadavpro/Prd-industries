import { clsx } from "clsx";
import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-amber-500 text-gray-950 hover:bg-amber-400 shadow-md hover:shadow-lg",
  secondary:
    "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700",
  outline:
    "border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10",
  ghost: "text-gray-300 hover:text-white hover:bg-white/5",
} as const;

const sizes = {
  sm: "text-[clamp(0.75rem,1.2vw,0.875rem)] px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.375rem,0.8vw,0.5rem)]",
  md: "text-[clamp(0.875rem,1.4vw,1rem)] px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(0.5rem,1vw,0.75rem)]",
  lg: "text-[clamp(1rem,1.6vw,1.125rem)] px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.2vw,1rem)]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
