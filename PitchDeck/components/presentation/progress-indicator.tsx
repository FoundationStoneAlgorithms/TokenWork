"use client";

import { cn } from "@/lib/utils";

type RailSlide = { id: string; num: string; title: string };

export function ProgressIndicator({
  slides,
  current,
  onSelect,
  chromeClass,
}: {
  slides: RailSlide[];
  current: number;
  onSelect: (index: number) => void;
  chromeClass: string;
}) {
  return (
    <>
      {/* Top progress bar */}
      <div
        className={cn(chromeClass, "absolute inset-x-0 top-0 z-30 h-[3px] bg-line")}
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-gold via-gold to-gold-deep transition-all duration-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Bottom-left chapter pill strip (desktop) */}
      <nav
        aria-label="Slide progress"
        className={cn(
          chromeClass,
          "absolute bottom-5 left-6 z-30 hidden items-center gap-1.5 rounded-none border border-line bg-raise/90 px-3 py-1.5 backdrop-blur-sm md:flex lg:left-8"
        )}
      >
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <button
              key={slide.id}
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${slide.num}: ${slide.title}`}
              aria-current={active ? "true" : undefined}
              title={`${slide.num} · ${slide.title}`}
              className={cn(
                "group relative cursor-pointer rounded-none transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-gold/50",
                active
                  ? "h-2 w-6 bg-gold"
                  : "size-2 bg-line-strong hover:bg-gold/60"
              )}
            />
          );
        })}
        <span className="ml-2 border-l border-line pl-2.5 font-mono text-[10px] tracking-[0.18em] text-fog uppercase">
          {slides[current].num} · {slides[current].title}
        </span>
      </nav>
    </>
  );
}
