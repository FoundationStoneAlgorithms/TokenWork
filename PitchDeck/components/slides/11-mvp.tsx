"use client";

import { Check } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const CRITERIA = [
  "Business registers and creates a verified profile",
  "Reviewer records verification status and evidence",
  "Business creates equity offering with versioned terms",
  "Authorized reviewer approves or rejects demo offering",
  "Investor registers and completes simulated eligibility",
  "Investor reviews offering and acknowledges disclosures",
  "Investor submits simulated subscription",
  "Allocation recorded and linked to investor and offering",
  "Test token representation issued on Solana Devnet",
  "Chain transaction reconciled with allocation record",
  "Dashboards show consistent holdings and offering data",
  "Investor report or corporate action created and recorded",
  "Material actions auditable",
  "Automated tests cover state transitions and authorization",
  "Demo distinguishes simulated from production activity",
  "Business Onboarding Agent guides profile completion",
  "Financial Analysis Agent extracts figures with sources",
  "Due Diligence Assistant runs checklist and flags issues",
  "Agent tools enforce role and tenant permissions server-side",
  "Agent prompts, calls, outputs and corrections auditable",
  "No MVP agent approves offerings or executes transactions",
];

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
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          21 acceptance criteria.{" "}
          <span className="text-gold-metal italic">One demonstrable product.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          The 8-week Bridge programme delivers a working MVP demonstrating an
          end-to-end simulated SME equity capital formation workflow — test data,
          Solana Devnet. No live settlement, no legally effective issuance, no
          secondary market.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-7 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {CRITERIA.map((c, i) => (
            <div key={i} className="flex items-start gap-2.5 rounded-md border border-line bg-raise/50 px-3 py-2.5">
              <Check className="mt-0.5 size-3.5 shrink-0 text-gold/70" />
              <span className="text-[12px] leading-snug text-fog">{c}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
