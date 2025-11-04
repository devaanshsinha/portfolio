import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--console-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--console-bg)] disabled:pointer-events-none disabled:opacity-60 font-[var(--font-mono)] rounded-[3px]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--console-primary)] text-[var(--console-bg)] border-transparent hover:bg-[var(--console-secondary)] hover:scale-[1.01]",
        secondary:
          "bg-[var(--console-bg)] text-[var(--console-primary)] border-[var(--console-primary)] hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] hover:scale-[1.01]",
        ghost:
          "bg-transparent text-[var(--console-text)] border-transparent hover:bg-[var(--console-bg-light)] hover:text-[var(--console-primary)]",
        outline:
          "bg-[var(--console-bg-light)] text-[var(--console-text)] border-[var(--console-border)] hover:border-[var(--console-primary)] hover:text-[var(--console-primary)]",
        nav: "bg-[var(--console-bg-light)] text-[var(--console-text)] border-[var(--console-bg-light)] text-left justify-start hover:border-[var(--console-primary)] hover:text-[var(--console-primary)]",
        link: "bg-transparent text-[var(--console-secondary)] border-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-5",
        icon: "h-10 w-10",
      },
      isActive: {
        true:
          "bg-[var(--console-primary)] text-[var(--console-bg)] border-[var(--console-primary)] font-bold shadow-[0_0_16px_rgba(0,255,157,0.15)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      isActive: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isActive, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
