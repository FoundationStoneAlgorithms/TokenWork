"use client";

import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  { num: "01", title: "Business registers", detail: "Identity, verification & financial disclosures" },
  { num: "02", title: "Legal structuring", detail: "Instrument terms, rights & disclosures drafted" },
  { num: "03", title: "Reviewer approval", detail: "Authorized party reviews & approves offering" },
  { num: "04", title: "Investor eligibility", detail: "KYC, suitability & disclosure acknowledgement" },
  { num: "05", title: "Subscription", detail: "Investor commits to simulated allocation" },
  { num: "06", title: "Token issuance", detail: "On-chain representation on Solana Devnet" },
  { num: "07", title: "Ownership lifecycle", detail: "Cap table records, reporting & corporate actions" },
];

export default function HowItWorksSlide() {
  return (
    <Slide ariaLabel="How it works — the capital formation flow">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="06" title="How It Works" />
          <Badge variant="gold">MVP · Simulated flow on Solana Devnet</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Legal instrument first.{" "}
          <span className="text-emerald-accent">Token representation second.</span>
        </h2>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`editorial-card rounded-xl p-5 ${
                i === 6 ? "sm:col-span-2 lg:col-span-2 border-l-4 border-l-gold" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-7 items-center justify-center rounded-md bg-ok-soft font-mono text-xs font-semibold text-gold-bright">
                  {step.num}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-smoke uppercase">
                  {i < 3 ? "Issuer" : i < 5 ? "Investor" : "Ledger"}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-cream">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-fog">{step.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
