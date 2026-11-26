"use client";

import { TrendingUp } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const STATS = [
  {
    label: "Domestic market cap",
    from: "UGX 4.33tn",
    to: "UGX 21.77tn",
    period: "Jun 2021 → Mar 2026",
    multiplier: "5.0×",
    barPct: 72,
  },
  {
    label: "Funded investor accounts",
    from: "29,000",
    to: "220,000+",
    period: "2021 → 2026",
    multiplier: "7.5×",
    barPct: 86,
  },
  {
    label: "CIS assets under management",
    from: "UGX 731bn",
    to: "UGX 6.02tn",
    period: "2021 → 2026",
    multiplier: "8.2×",
    barPct: 94,
  },
];

export default function OpportunitySlide() {
  return (
    <Slide ariaLabel="The opportunity — Uganda capital markets">
      <Reveal>
        <SectionLabel index="03" title="The Opportunity" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,4.3vw,3.5rem)] leading-[1.06] font-medium text-cream">
          Capital markets are expanding rapidly —{" "}
          <span className="text-emerald-accent">SMEs are still locked out.</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          CMA Uganda data and the MTN / Airtel IPOs prove domestic investor appetite.
          Yet no accessible, legally structured pathway exists for SMEs to raise equity.
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="editorial-card rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-smoke uppercase">
                  {s.label}
                </span>
                <span className="inline-flex items-center gap-1 rounded-sm bg-ok-soft px-2 py-0.5 font-mono text-[11px] font-medium tabular-nums text-ok">
                  <TrendingUp className="size-3" />
                  {s.multiplier}
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-2.5">
                <span className="font-mono text-xs tabular-nums text-smoke line-through">{s.from}</span>
                <span className="font-mono text-2xl font-semibold tracking-tight tabular-nums text-cream">{s.to}</span>
              </div>

              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-soft">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-deep"
                  style={{ width: `${s.barPct}%` }}
                />
              </div>

              <div className="mt-3 font-mono text-[10px] text-smoke">{s.period}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={500}>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gold-line bg-ok-soft/60 px-6 py-4">
          <p className="text-sm text-cream">
            Agriculture employs <span className="font-mono font-semibold">72%</span> of
            Uganda&apos;s labour force and contributes{" "}
            <span className="font-mono font-semibold">24.8%</span> of GDP — with no dedicated SME equity rail.
          </p>
          <span className="font-mono text-[10px] tracking-wider text-fog uppercase">
            World Bank / CMA 2026
          </span>
        </div>
      </Reveal>
    </Slide>
  );
}
