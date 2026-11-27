"use client";

import { Check } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const CRITERIA_GROUPS: { title: string; criteria: string[] }[] = [
  {
    title: "Core equity flow",
    criteria: [
      "Verified business profile",
      "Reviewer evidence recorded",
      "Versioned equity offering",
      "Reviewer approves / rejects",
      "Investor eligibility simulated",
      "Disclosures acknowledged",
      "Subscription submitted",
      "Allocation linked to investor",
    ],
  },
  {
    title: "Devnet & data integrity",
    criteria: [
      "Test token on Solana Devnet",
      "Chain tx reconciled to allocation",
      "Dashboards show consistent data",
    ],
  },
  {
    title: "Audit & assurance",
    criteria: [
      "Report / corporate action recorded",
      "Material actions auditable",
      "Tests cover transitions & authZ",
      "Simulated vs. production marked",
      "Agent activity auditable",
    ],
  },
  {
    title: "Bounded AI agents",
    criteria: [
      "Onboarding Agent guides profile",
      "Analysis Agent cites figures",
      "Diligence Assistant flags issues",
      "Server-side role / tenant authZ",
      "No agent approvals or transactions",
    ],
  },
];

const TOTAL_CRITERIA = CRITERIA_GROUPS.reduce(
  (total, group) => total + group.criteria.length,
  0
);

export default function MVPSlide() {
  return (
    <Slide ariaLabel="MVP — 8-week Bridge programme">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="11" title="MVP" />
          <Badge variant="outline">8-week Bridge · Solana Devnet · simulated flow</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
            <span className="font-mono tabular-nums">{TOTAL_CRITERIA}</span> acceptance criteria.{" "}
            <span className="text-emerald-accent">One demonstrable product.</span>
          </h2>
          <span className="font-mono text-[10px] tabular-nums tracking-[0.18em] text-smoke uppercase">
            {TOTAL_CRITERIA}/{TOTAL_CRITERIA} covered
          </span>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          The <span className="font-mono tabular-nums text-cream">8</span>-week Bridge programme delivers a working MVP demonstrating an
          end-to-end simulated SME equity capital formation workflow — test data,
          Solana Devnet. No live settlement, no legally effective issuance, no
          secondary market.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {CRITERIA_GROUPS.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={340 + groupIndex * 90}
              className="h-full"
            >
              <div className="editorial-card h-full rounded-none p-4">
                <div className="flex items-baseline justify-between gap-3 border-b border-line pb-2.5">
                  <h3 className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] tabular-nums text-smoke">
                    {String(group.criteria.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-2.5 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                  {group.criteria.map((criterion) => (
                    <li key={criterion} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-3 shrink-0 text-gold"
                        strokeWidth={2}
                      />
                      <span className="text-[11px] leading-snug text-fog md:text-xs">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
