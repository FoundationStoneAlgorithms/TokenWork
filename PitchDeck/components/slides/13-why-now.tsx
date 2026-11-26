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
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Regulations, capital, and infrastructure{" "}
          <span className="text-gold-metal italic">aligned for the first time.</span>
        </h2>
      </Reveal>

      <Reveal delay={250}>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.heading} delay={250 + i * 110}>
              <div className="h-full rounded-lg border border-line bg-raise/60 p-6">
                <r.icon className="size-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg leading-snug text-cream">
                  {r.heading}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-fog">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
