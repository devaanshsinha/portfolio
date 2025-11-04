'use client';

import * as React from "react";

import { cn } from "@/lib/utils";

import { ConsoleHeading } from "./console-heading";
import { ConsolePanel, type ConsolePanelProps } from "./console-panel";

interface ConsoleSectionProps extends ConsolePanelProps {
  title?: string;
  titleLevel?: 2 | 3 | 4;
  titleClassName?: string;
}

export const ConsoleSection = React.forwardRef<HTMLDivElement, ConsoleSectionProps>(
  ({ title, titleLevel = 3, titleClassName, className, children, ...panelProps }, ref) => {
    return (
      <ConsolePanel ref={ref} className={cn("space-y-4", className)} {...panelProps}>
        {title ? (
          <ConsoleHeading level={titleLevel} className={cn("text-xl text-[var(--console-secondary)]", titleClassName)}>
            {title}
          </ConsoleHeading>
        ) : null}
        {children}
      </ConsolePanel>
    );
  }
);
ConsoleSection.displayName = "ConsoleSection";
