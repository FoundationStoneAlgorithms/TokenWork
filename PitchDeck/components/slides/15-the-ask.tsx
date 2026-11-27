"use client";

import { Coins, FileSearch, MessageSquare, Rocket } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const USES = [
  {
    icon: Rocket,
    label: "Build the Bridge (8 weeks)",
    note: "Rust/Postgres backend, Solana integration, 3 AI agents, end-to-end simulated workflow",
    pct: 40,
  },
  {
    icon: FileSearch,
    label: "Legal & regulatory validation",
    note: "Qualified Ugandan counsel for D1–D10 decisions, instrument classification, licensing map",
    pct: 25,
  },
  {
    icon: MessageSquare,
    label: "Market & partner development",
    note: "Design partner outreach, investor discovery, institutional partner pipeline",
    pct: 20,
  },
  {
    icon: Coins,
    label: "Operations & contingency",
    note: "Infrastructure, security review, team, advisors, 3-month operational runway",
    pct: 15,
  },
];

export default function TheAskSlide() {
  return (
    <Slide ariaLabel="The ask — seed investment">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="15" title="The Ask" />
          <Badge variant="outline">seed allocation · build · validate · prepare</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Seed capital to build the Bridge,{" "}
          <span className="text-emerald-accent">validate the market,</span>
          <br />
          and prepare for the pilot.
        </h2>
      </Reveal>

      <Reveal delay={250}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          We are raising to fund the <span className="font-mono tabular-nums text-cream">8</span>-week Bridge programme (working MVP), resolve
          the open legal and regulatory decisions with qualified counsel, and establish
          design partnerships with pilot issuers and investors.
        </p>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-8 flex flex-col gap-3">
          {USES.map((u, i) => (
            <Reveal key={u.label} delay={360 + i * 100}>
              <div className="editorial-card flex items-center gap-4 rounded-none p-4">
                <u.icon className="size-5 shrink-0 text-gold" strokeWidth={1.6} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-cream">
                      {u.label}
                    </span>
                    <span className="font-mono text-xs font-semibold tabular-nums text-gold-bright">{u.pct}%</span>
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-fog">{u.note}</p>
                </div>
                <div className="hidden shrink-0 items-center md:flex">
                  <div className="h-1.5 w-24 rounded-none bg-raise-2">
                    <div
                      className="h-full rounded-none bg-gradient-to-r from-gold-deep to-gold"
                      style={{ width: `${u.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={760}>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span aria-hidden className="gold-hairline w-14" />
          <p className="font-mono text-[10px] tracking-[0.28em] text-smoke uppercase">
            amounts to be finalised — shown once real, never invented
          </p>
          <span aria-hidden className="gold-hairline w-14" />
        </div>
      </Reveal>
    </Slide>
  );
}
