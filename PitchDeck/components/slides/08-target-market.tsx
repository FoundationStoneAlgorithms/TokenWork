"use client";

import { Building2, Factory, Sprout, Store, Truck } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const SEGMENTS = [
  {
    icon: Factory,
    label: "Manufacturing SMEs",
    note: "NDP IV industrialisation targets; IFC agribusiness & manufacturing focus",
  },
  {
    icon: Truck,
    label: "Trade & distribution",
    note: "Raw materials, transport, quality standards — CMA-documented financing need",
  },
  {
    icon: Building2,
    label: "Listed company pipeline",
    note: "11 domestic + 8 cross-border listed firms; proven disclosure readiness",
  },
  {
    icon: Store,
    label: "Women-owned enterprises",
    note: "GROW priority sectors: agri, ICT/STEM, manufacturing",
  },
];

export default function TargetMarketSlide() {
  return (
    <Slide ariaLabel="Target market — Uganda SME issuers">
      <Reveal>
        <SectionLabel index="08" title="Target Market" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Uganda first.{" "}
          <span className="text-emerald-accent">East Africa next.</span>
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={220}>
          <div className="editorial-card flex h-full flex-col justify-between rounded-none border-gold-line/60 p-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-none bg-gold px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.2em] text-ink uppercase">
                <Sprout className="size-3.5" />
                Primary focus
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                Exporting Agro-Processors
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Coffee, tea, and cocoa processors face a documented working-capital gap
                between purchasing/processing and export payment (CMA illustrates a{" "}
                <span className="font-mono font-semibold tabular-nums text-cream">UGX 10bn</span>{" "}
                coffee order cycle).
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-4 font-mono text-[10px] tracking-[0.18em] text-smoke uppercase">
              Jurisdictions activate only after legal & partner readiness
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {SEGMENTS.map((seg) => (
              <div key={seg.label} className="editorial-card rounded-none p-5">
                <seg.icon className="size-5 text-gold-deep" strokeWidth={1.6} />
                <h3 className="mt-3.5 text-sm font-semibold text-cream">{seg.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-fog">{seg.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
