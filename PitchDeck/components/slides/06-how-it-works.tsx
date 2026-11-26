"use client";

import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  { num: "01", title: "Business registers", detail: "Identity, verification, financial disclosures" },
  { num: "02", title: "Legal structuring", detail: "Instrument terms, rights, disclosures drafted" },
  { num: "03", title: "Reviewer approval", detail: "Authorized party reviews and approves offering" },
  { num: "04", title: "Investor eligibility", detail: "KYC, suitability, disclosure acknowledgement" },
  { num: "05", title: "Subscription", detail: "Investor commits to simulated allocation" },
  { num: "06", title: "Token issuance", detail: "On-chain representation — Solana-first" },
  { num: "07", title: "Ownership lifecycle", detail: "Records, reporting, corporate actions" },
];

export default function HowItWorksSlide() {
  return (
    <Slide ariaLabel="How it works — the capital formation flow">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="06" title="How It Works" />
          <Badge variant="outline">simulated flow for MVP · Solana Devnet</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Legal instrument first.{" "}
          <span className="text-gold-metal italic">Token representation second.</span>
        </h2>
      </Reveal>

      <Reveal delay={250}>
        <div className="relative mt-10">
          <div
            aria-hidden
            className="absolute top-6 right-4 left-4 hidden h-px bg-gradient-to-r from-gold/55 via-gold/25 to-transparent md:block"
          />
          <div className="grid gap-4 md:grid-cols-7 md:gap-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={260 + i * 80}>
                <div className="relative flex flex-col md:items-center">
                  <span className="relative z-10 mb-3 hidden size-2.5 rotate-45 border border-gold bg-ink shadow-[0_0_8px_rgba(201,164,92,0.4)] md:block" />
                  <div className="rounded-md border border-line bg-raise/60 p-3 md:text-center">
                    <div className="font-mono text-[9px] tracking-[0.26em] text-gold uppercase">
                      {step.num}
                    </div>
                    <div className="mt-1.5 font-mono text-[10px] leading-snug tracking-wider text-cream">
                      {step.title}
                    </div>
                    <div className="mt-1 font-mono text-[9px] leading-snug text-smoke">
                      {step.detail}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={860}>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span aria-hidden className="gold-hairline w-12 md:w-20" />
          <p className="max-w-2xl text-center font-mono text-[10px] tracking-[0.2em] text-smoke uppercase">
            Rights → verification → issuance → ownership → lifecycle
          </p>
          <span aria-hidden className="gold-hairline w-12 md:w-20" />
        </div>
      </Reveal>
    </Slide>
  );
}
