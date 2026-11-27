"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Structural shell for every slide — sits above the shared animated canvas. */
export function Slide({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div className="relative h-full w-full" aria-label={ariaLabel}>
      <div
        data-slide-content
        className={cn(
          "no-scrollbar relative z-10 h-full w-full overflow-y-auto",
          className
        )}
      >
        <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center-safe px-6 pt-16 pb-24 md:px-14 md:pt-20 md:pb-24 lg:px-20">
          {children}
        </div>
      </div>
    </div>
  );
}
