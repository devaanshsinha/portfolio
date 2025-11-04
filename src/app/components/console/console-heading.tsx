'use client';

import * as React from "react";

import { cn } from "@/lib/utils";

export interface ConsoleHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 2 | 3 | 4;
  label?: string;
}

const headingComponents: Record<2 | 3 | 4, "h2" | "h3" | "h4"> = {
  2: "h2",
  3: "h3",
  4: "h4",
};

export const ConsoleHeading = React.forwardRef<HTMLHeadingElement, ConsoleHeadingProps>(
  ({ className, level = 2, label, children, ...props }, ref) => {
    const Component = headingComponents[level] ?? "h2";

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
        {...props}
      >
        {label ?? children}
      </Component>
    );
  }
);
ConsoleHeading.displayName = "ConsoleHeading";
