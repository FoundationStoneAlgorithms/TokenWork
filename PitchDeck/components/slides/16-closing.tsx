"use client";

import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { GoldDivider } from "@/components/presentation/gold-divider";
import { NetworkVisualization } from "@/components/visualizations/network-visualization";
import { TWMark } from "@/components/brand/tw-mark";

export default function ClosingSlide() {
  return (
    <Slide
      ariaLabel="Closing — TokenWork"
      background={
        <>
          <div className="gold-aura absolute inset-0" />
          <NetworkVisualization density={26} seed={99} opacity={0.55} />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#080a0e_90%)]"
          />
        </>
      }
    >
      <div className="w-full">
        <Reveal>
          <SectionLabel index="16" title="Closing" />
        </Reveal>

        <div className="mt-10 text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.7rem,4.2vw,3.5rem)] leading-[1.12] font-medium text-cream">
              African SMEs deserve access to capital markets
              <br />
              <span className="text-fog">without asking permission from gatekeepers.</span>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <GoldDivider className="mx-auto mt-10 max-w-xs" />
          </Reveal>

          <Reveal delay={300}>
            <TWMark className="mx-auto mt-6 size-12 text-gold md:size-16" />
          </Reveal>

          <Reveal delay={360}>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              <span className="text-cream">TokenWork</span>
            </h2>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.35em] text-gold-bright/90 uppercase md:text-[11px]">
              <span>Structure</span>
              <span aria-hidden className="size-1 rotate-45 bg-gold/70" />
              <span>Issue</span>
              <span aria-hidden className="size-1 rotate-45 bg-gold/70" />
              <span>Invest</span>
              <span aria-hidden className="size-1 rotate-45 bg-gold/70" />
              <span>Govern</span>
            </div>
          </Reveal>

          <Reveal delay={640}>
            <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              Built in Uganda with African roots.
              <br />
              Designed for global capital markets.
            </p>
          </Reveal>

          <Reveal delay={780}>
            <p className="mt-14 font-mono text-[9px] tracking-[0.3em] text-smoke uppercase">
              TokenWork — Seed Investment Presentation · 2026 · Foundation Stone Algorithms
            </p>
          </Reveal>
        </div>
      </div>
    </Slide>
  );
}
