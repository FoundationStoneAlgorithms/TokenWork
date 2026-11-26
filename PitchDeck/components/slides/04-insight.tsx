"use client";

import { Scale, Shield, Zap } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const INSIGHTS = [
  {
    icon: Scale,
    heading: "Rights before tokens",
    body:
      "A token is a technical representation. Legal rights, disclosures, and enforceability must come first — before any on-chain issuance.",
  },
  {
    icon: Shield,
    heading: "Compliance by design",
    body:
      "Eligibility rules, jurisdiction restrictions, and regulated-role boundaries are product architecture — not an afterthought.",
  },
  {
    icon: Zap,
    heading: "Infrastructure, not a marketplace",
    body:
      "TokenWork is not a token-minting service. It is an integrated layer for identity, instruments, capital formation, ownership, and servicing.",
  },
];

export default function InsightSlide() {
  return (
    <Slide ariaLabel="The insight — rights before tokens">
      <Reveal>
        <SectionLabel index="04" title="The Insight" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 max-w-4xl font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.1] text-cream">
          Tokenization without legal structure is{" "}
          <span className="text-gold-metal italic">theater.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Most &quot;tokenization&quot; projects mint tokens first and hope legal rights follow.
          We start from the opposite direction — legal instruments, enforceable rights, and
          compliance infrastructure come first. The token is simply the most efficient
          record and transfer mechanism for what already exists on paper and in law.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {INSIGHTS.map((item, i) => (
            <Reveal key={item.heading} delay={340 + i * 120}>
              <div className="h-full rounded-lg border border-line bg-raise/60 p-6">
                <item.icon className="size-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg leading-snug text-cream">
                  {item.heading}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-fog">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
