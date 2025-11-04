'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const panelVariants = cva(
  "rounded-[6px] border border-[var(--console-border)] bg-[var(--console-bg-light)]",
  {
    variants: {
      tone: {
        light: "bg-[var(--console-bg-light)]",
        base: "bg-[var(--console-bg)]",
        subtle: "bg-[var(--console-bg)]/70",
      },
      padding: {
        none: "",
        sm: "p-3",
        md: "p-4 sm:p-6",
        lg: "p-6 sm:p-8",
      },
      interactive: {
        true: "transition-colors hover:border-[var(--console-secondary)]",
        false: "",
      },
    },
    defaultVariants: {
      tone: "light",
      padding: "md",
      interactive: false,
    },
  }
);

type MotionDivProps = HTMLMotionProps<"div">;

export interface ConsolePanelProps
  extends Omit<MotionDivProps, "className">,
    VariantProps<typeof panelVariants> {
  className?: string;
  animateOnMount?: boolean;
}

export const ConsolePanel = React.forwardRef<HTMLDivElement, ConsolePanelProps>(
  ({ className, tone, padding, interactive, children, animateOnMount = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={
          animateOnMount
            ? {
                opacity: 0,
                y: 8,
              }
            : undefined
        }
        animate={
          animateOnMount
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        transition={animateOnMount ? { duration: 0.25, ease: "easeOut" } : undefined}
        className={cn(panelVariants({ tone, padding, interactive }), className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
ConsolePanel.displayName = "ConsolePanel";
