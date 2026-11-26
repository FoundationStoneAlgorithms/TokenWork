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
  { icon: Lock, name: "Collateral", risk: "unattainable for most SMEs" },
  { icon: FileX, name: "No records", risk: "limited financial history" },
  { icon: Clock, name: "Delays", risk: "months of approval process" },
  { icon: Banknote, name: "High cost", risk: "22%+ loan rates" },
  { icon: Users, name: "Network", risk: "capital behind closed doors" },
  { icon: AlertTriangle, name: "Opacity", risk: "informal gatekeeping" },
];

export default function ProblemSlide() {
  return (
    <Slide ariaLabel="The problem — SME capital access">
      <Reveal>
        <SectionLabel index="02" title="The Problem" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.04] text-cream">
          2.57 million Ugandan enterprises.
        </h2>
        <p className="mt-4 font-display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1.1] text-fog italic">
          Only 25% have access to credit.
        </p>
      </Reveal>

      <Reveal delay={250}>
        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Bank financing is short-term, expensive, and collateral-heavy. Uganda&apos;s
          capital markets remain largely untapped for SMEs despite rapid growth —
          the structural financing gap blocks value creation at scale.
        </p>
      </Reveal>

      <Reveal delay={380}>
        <div className="mt-10">
          <div className="flex flex-wrap items-stretch justify-center gap-2 md:flex-nowrap md:gap-0">
            {BARRIERS.map((b, i) => (
              <div key={b.name} className="flex items-center">
                <div className="flex w-28 flex-col items-center rounded-md border border-line bg-raise/70 px-2 py-4 text-center md:w-32">
                  <b.icon
                    className={`size-5 ${i === 0 ? "text-gold" : "text-fog"}`}
                    strokeWidth={1.5}
                  />
                  <span className="mt-2.5 font-mono text-[10px] tracking-wider text-cream">
                    {b.name}
                  </span>
                  <span className="mt-1 font-mono text-[8.5px] tracking-[0.14em] text-smoke uppercase">
                    {b.risk}
                  </span>
                </div>
                {i < BARRIERS.length - 1 ? (
                  <span
                    aria-hidden
                    className="mx-0.5 size-1.5 shrink-0 rotate-45 bg-smoke/30 md:mx-1"
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span aria-hidden className="gold-hairline w-14" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-smoke uppercase">
              six barriers — one structural gap
            </span>
            <span aria-hidden className="gold-hairline w-14" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={520}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-fog md:text-base">
          Raising access from 25% to 44% could unlock{" "}
          <span className="text-cream">USD 277.6M in financial-sector revenue.</span>
          <br />
          <span className="mt-1 block font-mono text-[10px] tracking-wider text-smoke">
            Source: GROW / MGLSD, 2025
          </span>
        </p>
      </Reveal>
    </Slide>
  );
}
