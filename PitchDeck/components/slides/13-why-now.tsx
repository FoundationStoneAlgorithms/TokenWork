"use client";

import { Clock, Globe, Landmark, Zap } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const REASONS = [
  {
    icon: Landmark,
    heading: "CMA 2025 regulations live",
    body: "Uganda's CMA (Offer of Securities) Regulations 2025 and CMA (Licensing and Approval) Regulations 2025 create the clearest regulatory environment for structured digital issuance yet.",
  },
  {
    icon: Globe,
    heading: "Market capacity proven",
    body: "Market cap 5×, funded investor accounts 7.5×, CIS AUM 8× — in 5 years. MTN and Airtel IPOs proved domestic appetite. The capital is there.",
  },
  {
    icon: Zap,
    heading: "Infrastructure moment",
    body: "Solana's throughput and cost profile make viable on-chain equity records economically sensible for the first time. Rust's safety properties match financial-infrastructure requirements.",
  },
  {
    icon: Clock,
    heading: "SME financing urgency",
    body: "GROW's 2026 grant call and CMA's export-revolution framing signal government priority. First-mover infrastructure advantage is available to those who build it right.",
  },
];

export default function WhyNowSlide() {
  return (
    <Slide ariaLabel="Why now — timing and market conditions">
      <Reveal>
        <SectionLabel index="13" title="Why Now" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Regulations, capital, and infrastructure{" "}
          <span className="text-emerald-accent">aligned for the first time.</span>
        </h2>
      </Reveal>

      <Reveal delay={250}>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.heading} delay={250 + i * 110}>
              <div className="editorial-card h-full rounded-lg p-6">
                <r.icon className="size-5 text-gold" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-cream">
                  {r.heading}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-fog md:text-sm">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
