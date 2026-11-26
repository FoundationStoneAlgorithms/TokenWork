"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_FONT_SELECTION,
  applyFontVariables,
  readFontSelection,
  saveFontSelection,
  type FontRole,
  type FontSelection,
} from "@/lib/font-options";
import { SlideContext } from "./slide-context";
import { ProgressIndicator } from "./progress-indicator";
import { SlideNavigation } from "./slide-navigation";
import { KeyboardHelp } from "./keyboard-help";
import { TWMark } from "@/components/brand/tw-mark";

export type SlideMeta = {
  id: string;
  num: string;
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
  const [fonts, setFonts] = useState<FontSelection>(DEFAULT_FONT_SELECTION);

  const rootRef = useRef<HTMLDivElement>(null);
  const lockUntilRef = useRef(0);
  const wheelAccRef = useRef(0);
  const touchXRef = useRef<number | null>(null);
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

  const changeFonts = useCallback((selection: FontSelection) => {
    setFonts(selection);
    applyFontVariables(selection);
    saveFontSelection(window.localStorage, selection);
  }, []);

  const handleFontChange = useCallback(
    (role: FontRole, value: string) => changeFonts({ ...fonts, [role]: value }),
    [fonts, changeFonts]
  );
  const handleResetFonts = useCallback(
    () => changeFonts(DEFAULT_FONT_SELECTION),
    [changeFonts]
  );

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = current === 0 ? "/" : `/${slides[current].id}`;
    if (window.location.pathname !== path || window.location.hash !== "") {
      window.history.replaceState(null, "", path);
    }
  }, [current, slides]);

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

  useEffect(() => {
    const saved = readFontSelection(window.localStorage);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFonts(saved);
    applyFontVariables(saved);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target instanceof HTMLElement ? e.target : null;
      if (
        target?.closest("select, input, textarea, [contenteditable='true']") &&
        e.key !== "Escape"
      ) {
        return;
      }
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

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now < lockUntilRef.current) return;
      wheelAccRef.current += Math.abs(e.deltaY) + Math.abs(e.deltaX);
      if (wheelAccRef.current < WHEEL_THRESHOLD) return;
      wheelAccRef.current = 0;
      lockUntilRef.current = now + WHEEL_LOCK_MS;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta > 0) next();
      else prev();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchXRef.current = e.touches[0]?.clientX ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchXRef.current === null) return;
      const dx = touchXRef.current - (e.changedTouches[0]?.clientX ?? 0);
      touchXRef.current = null;
      if (Math.abs(dx) < 40) return;
      if (dx > 0) next();
      else prev();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

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

  const fontStyle = {
    "--font-heading": `var(${fonts.display})`,
    "--font-body": `var(${fonts.body})`,
    "--font-code": `var(${fonts.mono})`,
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      style={fontStyle}
      className="relative h-dvh w-full overflow-hidden bg-ink text-cream font-sans select-none"
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

      {/* Brand pill, top-left */}
      <div
        className={cn(
          "chrome pointer-events-none absolute top-4 left-6 z-30 md:top-5 md:left-8",
          !chromeVisible && "chrome-hidden"
        )}
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-raise/90 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase shadow-2xs backdrop-blur-sm">
          <TWMark className="size-3.5 shrink-0 text-gold" />
          <span className="font-semibold text-cream">TokenWork</span>
          <span className="text-smoke">·</span>
          <span className="text-fog">Capital Markets</span>
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

      <KeyboardHelp
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        fonts={fonts}
        onFontChange={handleFontChange}
        onResetFonts={handleResetFonts}
      />
    </div>
  );
}
