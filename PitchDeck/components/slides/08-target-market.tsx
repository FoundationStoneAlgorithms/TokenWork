"use client";

import { Building2, Factory, Sprout, Store, Truck } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const SEGMENTS = [
  {
    icon: Sprout,
    label: "Agro-processors",
    note: "Export-ready coffee, tea, cocoa — working-capital gap before payment",
    priority: true,
  },
  {
    icon: Factory,
    label: "Manufacturing SMEs",
    note: "NDP IV targets industrialisation; IFC agribusiness + manufacturing portfolio",
    priority: false,
  },
  {
    icon: Truck,
    label: "Trade & distribution",
    note: "Raw materials, transport, quality standards — CMA-documented financing need",
    priority: false,
  },
  {
    icon: Building2,
    label: "Listed company pipeline",
    note: "11 domestic + 8 cross-border listed firms; proven disclosure readiness",
    priority: false,
  },
  {
    icon: Store,
    label: "Women-owned enterprises",
    note: "GROW priority sectors: agri, ICT/STEM, manufacturing — same disclosure requirements",
    priority: false,
  },
];

export default function TargetMarketSlide() {
  return (
    <Slide ariaLabel="Target market — Uganda SME issuers">
      <Reveal>
        <SectionLabel index="08" title="Target Market" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Uganda first.{" "}
          <span className="text-gold-metal italic">East Africa next. Africa-wide ambition.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Our initial commercial product targets established Ugandan SMEs seeking
          equity capital. The platform is designed for multiple jurisdictions from
          day one — activating countries only after legal, regulatory, operational,
          and partner readiness.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-8 flex flex-col gap-3">
          {SEGMENTS.map((seg, i) => (
            <Reveal key={seg.label} delay={340 + i * 90}>
              <div
                className={
                  seg.priority
                    ? "corner-frame rounded-lg border border-gold-line bg-gold/[0.05] p-4"
                    : "rounded-lg border border-line bg-raise/60 p-4"
                }
              >
                <div className="flex items-start gap-4">
                  <seg.icon
                    className={`mt-0.5 size-4 shrink-0 ${seg.priority ? "text-gold" : "text-fog"}`}
                    strokeWidth={1.5}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-[11px] tracking-wider ${seg.priority ? "text-cream" : "text-cream/80"}`}
                      >
                        {seg.label}
                      </span>
                      {seg.priority && (
                        <span className="font-mono text-[9px] tracking-[0.26em] text-gold uppercase">
                          primary focus
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-fog">{seg.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
