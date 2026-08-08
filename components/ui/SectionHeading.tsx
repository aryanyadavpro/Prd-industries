import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        align === "center" && "text-center",
        "mb-[clamp(2.5rem,6vw,4.5rem)]",
        className
      )}
    >
      {label && (
        <p
          className={clsx(
            "section-label mb-[clamp(0.75rem,1.5vh,1.25rem)]",
            dark && "!text-[#B0A898]"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={clsx(
          "font-serif fluid-heading tracking-tight",
          dark ? "text-[#FAF8F5]" : "text-[#1A1A1A]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-[clamp(0.75rem,1.5vw,1rem)] fluid-small max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-[#B0A898]" : "text-[#7A7468]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
