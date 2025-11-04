import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center gap-2 rounded-[3px] border border-[var(--console-border)] bg-[var(--console-bg)] p-1 text-[var(--console-text)]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex min-w-[80px] items-center justify-center rounded-[3px] bg-transparent px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--console-text)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--console-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--console-bg)] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--console-primary)] data-[state=active]:text-[var(--console-bg)] data-[state=active]:shadow-sm hover:text-[var(--console-primary)]",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--console-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--console-bg)]",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
