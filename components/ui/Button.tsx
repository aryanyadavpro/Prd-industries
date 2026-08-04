import { clsx } from "clsx";
import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center font-display font-semibold rounded-2xl transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px]";

const variants = {
  primary:
    "neu-accent text-white hover:-translate-y-1 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.25)]",
  secondary:
    "neu-extruded text-[#3D4852] hover:neu-extruded-hover hover:-translate-y-1 active:neu-inset-sm active:translate-y-[1px]",
  outline:
    "neu-extruded text-[#6C63FF] border border-[#6C63FF]/20 hover:neu-extruded-hover hover:-translate-y-1 active:neu-inset-sm",
  ghost:
    "text-[#6B7280] hover:text-[#3D4852] hover:neu-extruded-sm hover:-translate-y-0.5 rounded-xl",
} as const;

const sizes = {
  sm: "text-[clamp(0.8rem,1.2vw,0.875rem)] px-[clamp(0.875rem,2vw,1.125rem)] py-[clamp(0.4rem,0.9vw,0.6rem)] min-h-[44px]",
  md: "text-[clamp(0.9rem,1.4vw,1rem)] px-[clamp(1.25rem,2.5vw,1.75rem)] py-[clamp(0.6rem,1.1vw,0.85rem)] min-h-[48px]",
  lg: "text-[clamp(1rem,1.6vw,1.125rem)] px-[clamp(1.75rem,3vw,2.25rem)] py-[clamp(0.85rem,1.3vw,1.1rem)] min-h-[52px]",
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
