"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { SlideContext } from "./slide-context";
import { ProgressIndicator } from "./progress-indicator";
import { SlideNavigation } from "./slide-navigation";
import { KeyboardHelp } from "./keyboard-help";
import { TWMark } from "@/components/brand/tw-mark";

export type SlideMeta = {
  /** Anchor id, e.g. "03-the-problem" */
  id: string;
  /** Two-digit display number, e.g. "03" */
  num: string;
  /** Short title for the progress rail tooltip */
  title: string;
  component: () => ReactNode;
};

const WHEEL_LOCK_MS = 950;
const WHEEL_THRESHOLD = 56;
const CHROME_IDLE_MS = 2600;

export function Presentation({ slides }: { slides: SlideMeta[] }) {
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [visited, setVisited] = useState<ReadonlySet<number>>(() => new Set([0]));
  const [helpOpen, setHelpOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const lockUntilRef = useRef(0);
  const wheelAccRef = useRef(0);
  const touchYRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((prev) => {
        const next = Math.max(0, Math.min(total - 1, index));
        if (next !== prev) {
          setVisited((v) => (v.has(next) ? v : new Set(v).add(next)));
        }
        return next;
      });
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Deep-linking */
  useEffect(() => {
    const fromSeg = window.location.pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.toLowerCase();
    const legacy = window.location.hash.replace("#", "").toLowerCase();
    const token = fromSeg && fromSeg.length > 1 ? fromSeg : legacy || null;
    if (!token) return;

    const byNum = token.match(/^(\d{1,2})$/);
    let index = -1;
    if (byNum) {
      const n = parseInt(byNum[1], 10);
      if (n >= 1 && n <= total) index = n - 1;
    } else {
      index = slides.findIndex((s) => s.id === token);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (index >= 0) setCurrent(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Keep URL in sync */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = current === 0 ? "/" : `/${slides[current].id}`;
    if (window.location.pathname !== path || window.location.hash !== "") {
      window.history.replaceState(null, "", path);
    }
  }, [current, slides]);

  /* Fullscreen */
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    } else {
      rootRef.current?.requestFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case " ":
          e.preventDefault();
          if (e.shiftKey) prev();
          else next();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "?":
          setHelpOpen((v) => !v);
          break;
        case "Escape":
          if (helpOpen) setHelpOpen(false);
          else if (document.fullscreenElement) void document.exitFullscreen().catch(() => {});
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goTo, total, toggleFullscreen, helpOpen]);

  /* Wheel navigation */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now < lockUntilRef.current) return;
      wheelAccRef.current += Math.abs(e.deltaY);
      if (wheelAccRef.current < WHEEL_THRESHOLD) return;
      wheelAccRef.current = 0;
      lockUntilRef.current = now + WHEEL_LOCK_MS;
      if (e.deltaY > 0) next();
      else prev();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  /* Touch navigation */
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchYRef.current = e.touches[0]?.clientY ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchYRef.current === null) return;
      const dy = touchYRef.current - (e.changedTouches[0]?.clientY ?? 0);
      touchYRef.current = null;
      if (Math.abs(dy) < 40) return;
      if (dy > 0) next();
      else prev();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  /* Chrome auto-hide */
  useEffect(() => {
    const wake = () => {
      setChromeVisible(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(
        () => setChromeVisible(false),
        CHROME_IDLE_MS
      );
    };
    wake();
    window.addEventListener("mousemove", wake);
    window.addEventListener("mousedown", wake);
    window.addEventListener("touchstart", wake);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("mousedown", wake);
      window.removeEventListener("touchstart", wake);
    };
  }, []);

  const chromeClass = useMemo(
    () => cn("chrome", !chromeVisible && "chrome-hidden"),
    [chromeVisible]
  );

  return (
    <div
      ref={rootRef}
      className="relative h-dvh w-full overflow-hidden bg-ink text-cream select-none"
    >
      {slides.map((slide, i) => {
        const state = i === current ? "active" : i < current ? "before" : "after";
        const shouldRender = Math.abs(i - current) <= 1 || visited.has(i);
        return (
          <SlideContext.Provider
            key={slide.id}
            value={{ active: i === current, index: i }}
          >
            <section
              id={slide.id}
              data-state={state}
              aria-hidden={i !== current}
              aria-label={`${slide.num} — ${slide.title}`}
              className="slide-frame"
            >
              {shouldRender ? slide.component() : null}
            </section>
          </SlideContext.Provider>
        );
      })}

      {/* Brand mark, top-left */}
      <div
        className={cn(
          "chrome pointer-events-none absolute top-5 left-6 z-30 md:top-6 md:left-8",
          !chromeVisible && "chrome-hidden"
        )}
      >
        <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase">
          <TWMark className="size-4 shrink-0 text-gold" />
          <span className="text-cream/80">TokenWork</span>
          <span className="text-smoke">/</span>
          <span className="text-smoke">Seed Pitch</span>
        </div>
      </div>

      <ProgressIndicator
        slides={slides.map(({ id, num, title }) => ({ id, num, title }))}
        current={current}
        onSelect={goTo}
        chromeClass={chromeClass}
      />

      <SlideNavigation
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        onOpenHelp={() => setHelpOpen(true)}
        chromeClass={chromeClass}
      />

      <KeyboardHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  );
}
