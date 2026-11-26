"use client";

import { ArrowRight } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { Reveal } from "@/components/presentation/reveal";
import { NetworkVisualization } from "@/components/visualizations/network-visualization";
import { TWMark } from "@/components/brand/tw-mark";
import { Badge } from "@/components/ui/badge";

export default function CoverSlide() {
  return (
    <Slide
      ariaLabel="Cover — TokenWork"
      background={
        <>
          <div className="emerald-wash absolute inset-0" />
          <NetworkVisualization density={28} seed={42} opacity={0.65} />
        </>
      }
      className="flex items-center"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div>
          <Reveal>
            <Badge variant="gold">Seed Investment Presentation · 2026</Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.25rem)] leading-[0.96] font-semibold tracking-tight text-cream">
              TokenWork
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.3] text-fog">
              Legally structured{" "}
              <span className="text-emerald-accent font-semibold">
                capital markets infrastructure
              </span>{" "}
              for African SMEs.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-cream uppercase">
              {["Structure", "Issue", "Invest", "Govern"].map((word, i) => (
                <div key={word} className="flex items-center gap-2.5">
                  <span className="rounded-md border border-line bg-raise px-3 py-1.5 shadow-2xs">
                    {word}
                  </span>
                  {i < 3 && <ArrowRight className="size-3.5 text-gold-deep" />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="editorial-card rounded-2xl border-gold-line/60 p-7 shadow-xl md:p-8">
            <div className="flex items-center justify-between">
              <TWMark className="size-9 text-gold-bright" />
              <span className="font-mono text-[10px] tracking-[0.24em] text-smoke uppercase">
                Uganda → Global
              </span>
            </div>

            <div className="mt-8 space-y-4 border-t border-line pt-6">
              <div>
                <div className="font-mono text-[9px] tracking-[0.22em] text-smoke uppercase">
                  Initial commercial product
                </div>
                <div className="mt-1 text-sm font-medium text-cream">
                  SME Equity Capital Formation
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.22em] text-smoke uppercase">
                  Core principle
                </div>
                <div className="mt-1 text-sm font-medium text-cream">
                  Rights before tokens · Compliance by design
                </div>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.22em] text-smoke uppercase">
                  Planned architecture
                </div>
                <div className="mt-1 font-mono text-xs text-gold-bright">
                  Rust · PostgreSQL · Solana · Next.js
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-line pt-4 font-mono text-[9px] tracking-[0.2em] text-smoke uppercase">
              Foundation Stone Algorithms · Planning / MVP Stage
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
