"use client";

import { motion, useInView, animate, Variants } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

// --- 1. Scroll Reveal Wrapper ---
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- 2. Staggered Container & Children ---
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- 3. Animated Number Counter ---
interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// --- 4. Text Word/Line Reveal (Atelier Noor Style) ---
interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}

export function TextReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={containerVariants}
        className="inline border-none bg-transparent"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em] whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

// --- 5. Interactive Hover Zoom Image Container ---
interface ImageZoomProps {
  children: ReactNode;
  className?: string;
}

export function ImageZoom({ children, className = "" }: ImageZoomProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className={`overflow-hidden relative ${className}`}
    >
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// --- 6. Expandable Capability Accordion ---
interface CapabilitiesAccordionProps {
  items: {
    title: string;
    description: string;
    details?: string;
  }[];
}

export function CapabilitiesAccordion({ items }: CapabilitiesAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E8E2D9]">
      {items.map((item, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <div
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="py-[clamp(1.25rem,2.5vh,2rem)] cursor-pointer group transition-colors hover:bg-[#F3EFE9]/50 px-3 rounded-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-[clamp(1rem,2vw,2rem)]">
                  <span className="num-marker text-[clamp(0.75rem,0.85vw,0.875rem)] mt-[clamp(0.125rem,0.3vh,0.25rem)] shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(1.125rem,1.5vw,1.5rem)] font-medium text-[#1A1A1A] group-hover:text-[#8B7355] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-[clamp(0.25rem,0.5vh,0.375rem)] text-[clamp(0.8125rem,0.85vw,0.9375rem)] text-[#7A7468] leading-relaxed max-w-[32rem]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Animated Plus / Minus Indicator */}
                <div className="shrink-0 w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center text-[#7A7468] group-hover:border-[#8B7355] group-hover:text-[#8B7355] transition-colors">
                  <motion.span
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-light leading-none inline-block"
                  >
                    +
                  </motion.span>
                </div>
              </div>

              {/* Animated Detail Panel */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden pl-[clamp(2.5rem,4vw,4rem)]"
              >
                <div className="pt-3 text-[clamp(0.8125rem,0.85vw,0.9375rem)] text-[#8B7355] font-medium leading-relaxed">
                  ✓ ISO 9001:2015 Processed • 100% Quality Inspected • Custom Specs Available
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
