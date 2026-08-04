import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        align === "center" && "text-center",
        "mb-[clamp(2.5rem,6vw,4rem)]",
        className
      )}
    >
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight text-[#3D4852]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-[clamp(0.5rem,1.5vw,0.875rem)] text-[clamp(0.9rem,1.5vw,1.1rem)] text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
