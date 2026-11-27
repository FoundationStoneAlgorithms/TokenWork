"use client";

import { ChevronLeft, ChevronRight, Keyboard, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SlideNavigation({
  current,
  total,
  onPrev,
  onNext,
  onToggleFullscreen,
  isFullscreen,
  onOpenHelp,
  chromeClass,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onOpenHelp: () => void;
  chromeClass: string;
}) {
  return (
    <div
      className={cn(
        chromeClass,
        "absolute right-4 bottom-4 z-30 flex items-center gap-2.5 rounded-none border border-line bg-raise/90 px-3 py-1.5 backdrop-blur-sm md:right-7 md:bottom-5"
      )}
    >
      <div className="hidden items-center gap-1.5 pr-1 font-mono text-[10px] tracking-[0.2em] text-smoke uppercase sm:flex">
        <span className="font-semibold text-cream">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span aria-hidden>/</span>
        <span>{String(total).padStart(2, "0")}</span>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="size-8 rounded-none border-transparent bg-transparent"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="size-8 rounded-none border-transparent bg-transparent"
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onOpenHelp}
          aria-label="Keyboard shortcuts"
          className="hidden size-8 rounded-none border-transparent bg-transparent sm:inline-flex"
        >
          <Keyboard className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter presentation mode"}
          className="size-8 rounded-none border-transparent bg-transparent"
        >
          {isFullscreen ? (
            <Minimize className="size-3.5" />
          ) : (
            <Maximize className="size-3.5" />
          )}
        </Button>
      </div>
    </div>
  );
}
