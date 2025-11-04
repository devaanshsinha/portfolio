'use client';

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface ConsoleHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 2 | 3 | 4;
  label?: string;
  animate?: boolean;
}

const headingComponents = {
  2: motion.h2,
  3: motion.h3,
  4: motion.h4,
} as const;

export const ConsoleHeading = React.forwardRef<HTMLHeadingElement, ConsoleHeadingProps>(
  ({ className, level = 2, label, children, animate = true, ...props }, ref) => {
    const Component = headingComponents[level] ?? headingComponents[2];

    return (
      <Component
        ref={ref}
        className={cn(
          "font-bold font-[var(--font-mono)]",
          level === 2 && "text-xl sm:text-2xl uppercase text-[var(--console-primary)]",
          level === 3 && "text-lg sm:text-xl text-[var(--console-secondary)]",
          level === 4 && "text-base sm:text-lg text-[var(--console-accent)]",
          className
        )}
        initial={animate ? { opacity: 0, y: 4 } : undefined}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={animate ? { duration: 0.2, ease: "easeOut" } : undefined}
        {...props}
      >
        {label ?? children}
      </Component>
    );
  }
);
ConsoleHeading.displayName = "ConsoleHeading";
