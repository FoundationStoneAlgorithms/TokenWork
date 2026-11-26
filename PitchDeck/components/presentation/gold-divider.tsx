"use client";

import { cn } from "@/lib/utils";

/** Subtle horizontal accent rule */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-3", className)}>
      <div className="editorial-rule flex-1" />
      <div className="size-2 rounded-xs bg-gold-deep/70" />
      <div className="editorial-rule flex-1 rotate-180" />
    </div>
  );
}
