import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-[0.16em] uppercase",
  {
    variants: {
      variant: {
        gold: "border-gold/35 bg-ok-soft text-gold-bright",
        neutral: "border-line-strong bg-raise text-fog",
        ok: "border-ok/35 bg-ok-soft text-ok",
        fail: "border-fail/40 bg-fail-soft text-fail",
        outline: "border-line-strong bg-raise/70 text-fog",
        teal: "border-teal/35 bg-teal-soft text-teal",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
