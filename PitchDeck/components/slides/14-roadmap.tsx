"use client";

import { CircleDot, Globe, Map, Network } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const PHASES = [
  {
    icon: CircleDot,
    tag: "Phase 0 — Now",
    title: "Discovery & legal validation",
    note: "Market research, design partners, qualified counsel, regulatory mapping",
    active: true,
  },
  {
    icon: Map,
    tag: "Phase 1 — Next",
    title: "Foundation & equity MVP",
    note: "8-week Bridge: end-to-end simulated workflow + 3 bounded AI agents",
    active: false,
  },
  {
    icon: Map,
    tag: "Phase 2",
    title: "Controlled pilot readiness",
    note: "Legal docs, licensed partners, production KYC/AML, payments, security review",
    active: false,
  },
  {
    icon: Network,
    tag: "Phase 3",
    title: "Instrument expansion",
    note: "Debt, revenue-sharing, asset-backed modules; unified capital structure",
    active: false,
  },
  {
    icon: Globe,
    tag: "Phase 4–5",
    title: "Institutional & global expansion",
    note: "Partner APIs, white-label, additional jurisdictions, controlled secondary market",
    active: false,
  },
];

export default function RoadmapSlide() {
  return (
    <Slide ariaLabel="Roadmap — phases 0 to 5">
      <Reveal>
        <SectionLabel index="14" title="Roadmap" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Focused MVP.{" "}
          <span className="text-emerald-accent">Phased expansion. No shortcuts.</span>
        </h2>
      </Reveal>

      <div className="relative mt-10">
        <div
          aria-hidden
          className="absolute top-6 right-4 left-4 hidden h-px bg-gradient-to-r from-gold/55 via-gold/25 to-transparent md:block"
        />
        <div className="grid gap-5 md:grid-cols-5 md:gap-3">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.tag} delay={260 + i * 120}>
              <div className="relative flex flex-col">
                <span
                  className={
                    phase.active
                      ? "relative z-10 mb-4 hidden size-3 rotate-45 border border-gold bg-gold shadow-[0_0_12px_rgba(140,168,199,0.45)] md:block"
                      : "relative z-10 mb-4 hidden size-3 rotate-45 border border-smoke bg-ink md:block"
                  }
                />
                <div
                  className={
                    phase.active
                      ? "corner-frame h-full rounded-lg border border-gold-line bg-gold/[0.06] p-4"
                      : "editorial-card h-full rounded-lg p-4"
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={
                        phase.active
                          ? "font-mono text-[9px] tabular-nums tracking-[0.26em] text-gold-bright uppercase"
                          : "font-mono text-[9px] tabular-nums tracking-[0.26em] text-smoke uppercase"
                      }
                    >
                      {phase.tag}
                    </span>
                    <phase.icon
                      className={phase.active ? "size-3.5 text-gold" : "size-3.5 text-fog"}
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-medium leading-snug text-cream">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-fog">{phase.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={900}>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span aria-hidden className="gold-hairline w-12 md:w-20" />
          <p className="max-w-2xl text-center font-display text-sm leading-snug text-fog md:text-base">
            From equity MVP to{" "}
            <span className="text-gold-bright">
              African capital markets infrastructure.
            </span>
          </p>
          <span aria-hidden className="gold-hairline w-12 md:w-20" />
        </div>
      </Reveal>
    </Slide>
  );
}
