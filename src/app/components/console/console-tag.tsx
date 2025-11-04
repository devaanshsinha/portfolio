'use client';

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

export interface ConsoleTagProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  tone?: "primary" | "secondary" | "neutral" | "accent";
}

const toneClasses: Record<NonNullable<ConsoleTagProps["tone"]>, string> = {
  primary:
    "bg-[var(--console-bg)] text-[var(--console-primary)] border border-[var(--console-primary)]",
  secondary:
    "bg-[var(--console-bg)] text-[var(--console-secondary)] border border-[var(--console-secondary)]",
  neutral: "bg-[var(--console-bg)] text-[var(--console-text)] border border-[var(--console-border)]",
  accent:
    "bg-[var(--console-bg)] text-[var(--console-accent)] border border-[var(--console-accent)]",
};

export const ConsoleTag = React.forwardRef<HTMLSpanElement, ConsoleTagProps>(
  ({ className, tone = "neutral", children, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded px-3 py-1 text-xs font-medium",
          toneClasses[tone],
          className
        )}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);
ConsoleTag.displayName = "ConsoleTag";
