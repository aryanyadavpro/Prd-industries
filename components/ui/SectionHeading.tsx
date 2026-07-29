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
        "mb-[clamp(2rem,5vw,3.5rem)]",
        className,
      )}
    >
      <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(0.875rem,1.5vw,1.125rem)] text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
