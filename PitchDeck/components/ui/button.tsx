import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-mono text-[11px] tracking-[0.16em] uppercase transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "border border-gold/40 bg-ok-soft text-gold-bright hover:border-gold hover:bg-gold/20",
        solid: "bg-gold text-ink hover:bg-gold-bright",
        ghost: "border border-transparent text-fog hover:bg-raise-2 hover:text-cream",
        danger: "border border-fail/40 bg-fail-soft text-fail hover:bg-fail/20",
        outline: "border border-line-strong bg-raise/60 text-cream hover:border-gold/50 hover:text-gold-bright",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-5",
        lg: "h-12 px-7 text-xs",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
