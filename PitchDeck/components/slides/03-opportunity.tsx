"use client";

import { TrendingUp } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const STATS = [
  {
    label: "Market cap growth",
    from: "UGX 4.33tn",
    to: "UGX 21.77tn",
    period: "Jun 2021 → Mar 2026",
    note: "5× growth in 5 years",
  },
  {
    label: "Funded investor accounts",
    from: "29,000",
    to: "220,000+",
    period: "2021 → 2026",
    note: "7.5× expansion of retail investors",
  },
  {
    label: "CIS AUM",
    from: "UGX 731bn",
    to: "UGX 6.02tn",
    period: "2021 → 2026",
    note: "8× growth in assets under management",
  },
];

export default function OpportunitySlide() {
  return (
    <Slide ariaLabel="The opportunity — Uganda capital markets">
      <Reveal>
        <SectionLabel index="03" title="The Opportunity" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Uganda&apos;s capital markets are{" "}
          <span className="text-gold-metal italic">growing fast.</span>
        </h2>
        <p className="mt-4 font-display text-[clamp(1.2rem,2.8vw,2.2rem)] leading-[1.15] text-fog italic">
          SMEs are still locked out.
        </p>
      </Reveal>

      <Reveal delay={250}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          CMA Uganda reports dramatic market expansion — MTN and Airtel IPOs proved
          domestic appetite. Yet no accessible, legally structured pathway exists
          for SMEs to tap this growing pool of capital.
        </p>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="corner-frame rounded-lg border border-gold-line bg-gold/[0.04] p-5"
            >
              <div className="font-mono text-[9px] tracking-[0.26em] text-gold uppercase">
                {s.label}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono text-[11px] text-smoke line-through">{s.from}</span>
                <TrendingUp className="size-3 text-gold" />
                <span className="font-display text-lg text-cream">{s.to}</span>
              </div>
              <div className="mt-1 font-mono text-[9px] text-smoke">{s.period}</div>
              <div className="mt-2 font-mono text-[10px] text-gold-bright">{s.note}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={560}>
        <div className="mt-8 rounded-lg border border-line bg-raise/60 p-4">
          <p className="text-center text-sm leading-relaxed text-fog">
            Agriculture employs <span className="text-cream font-medium">72% of Uganda&apos;s labour force</span> and
            contributes <span className="text-cream font-medium">24.8% of GDP</span> —
            yet the sector has no SME equity platform.{" "}
            <span className="font-mono text-[10px] tracking-wider text-smoke">
              Source: World Bank / CMA Uganda 2026
            </span>
          </p>
        </div>
      </Reveal>
    </Slide>
  );
}
