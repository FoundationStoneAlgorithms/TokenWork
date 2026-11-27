"use client";

import {
  AlertTriangle,
  Banknote,
  Clock,
  FileX,
  Lock,
  Users,
} from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const BARRIERS = [
  { icon: Lock, name: "Collateral", risk: "Unattainable for most SMEs" },
  { icon: FileX, name: "Thin records", risk: "Limited formal credit history" },
  { icon: Clock, name: "Slow cycles", risk: "Months of manual underwriting" },
  { icon: Banknote, name: "High cost", risk: "Loan rates up to 22%+" },
  { icon: Users, name: "Closed networks", risk: "Capital gated by relationships" },
  { icon: AlertTriangle, name: "Opacity", risk: "Informal gatekeeping" },
];

export default function ProblemSlide() {
  return (
    <Slide ariaLabel="The problem — SME capital access">
      <Reveal>
        <SectionLabel index="02" title="The Problem" />
      </Reveal>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
              Viable businesses are{" "}
              <span className="text-emerald-accent">starved of patient capital.</span>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-sm leading-relaxed text-fog md:text-base">
              Bank financing is short-term, expensive, and collateral-heavy. Uganda&apos;s
              capital markets remain largely untapped for SMEs despite rapid growth.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="editorial-card rounded-none p-5">
                <div className="font-mono text-4xl font-semibold tracking-tight tabular-nums text-cream md:text-5xl">
                  2.57M
                </div>
                <div className="mt-2 text-xs text-fog">Ugandan enterprises</div>
              </div>
              <div className="editorial-card rounded-none border-l-2 border-l-gold p-5">
                <div className="font-mono text-4xl font-semibold tracking-tight tabular-nums text-gold-bright md:text-5xl">
                  25%
                </div>
                <div className="mt-2 text-xs text-fog">With formal credit access</div>
              </div>
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-wider text-smoke">
              Raising access to 44% could unlock USD 277.6M in financial-sector revenue (GROW / MGLSD, 2025).
            </p>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <div className="grid gap-3 sm:grid-cols-2">
            {BARRIERS.map((b, i) => (
              <div
                key={b.name}
                className="editorial-card flex items-start gap-3.5 rounded-none p-4"
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-none ${
                    i === 0 ? "bg-teal-soft text-teal" : "bg-ink-soft text-fog"
                  }`}
                >
                  <b.icon className="size-4" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cream">{b.name}</div>
                  <div className="mt-0.5 text-xs leading-snug text-fog">{b.risk}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
