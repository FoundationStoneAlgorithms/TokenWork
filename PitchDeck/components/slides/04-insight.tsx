"use client";

import { Scale, Shield, Zap } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const INSIGHTS = [
  {
    num: "01",
    icon: Scale,
    heading: "Rights before tokens",
    body:
      "A token is a technical representation. Legal rights, disclosures, and enforceability must come first — before any on-chain issuance.",
  },
  {
    num: "02",
    icon: Shield,
    heading: "Compliance by design",
    body:
      "Eligibility rules, jurisdiction restrictions, and regulated-role boundaries are core product architecture — not an afterthought.",
  },
  {
    num: "03",
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
        <div className="mt-6 border-l-2 border-gold pl-6">
          <h2 className="max-w-4xl font-display text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.1] font-medium text-cream">
            Tokenization without legal structure is{" "}
            <span className="text-emerald-accent">theater.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
            Most &quot;tokenization&quot; projects mint tokens first and hope legal rights follow.
            We start from the opposite direction: enforceable legal instruments and compliance
            workflows come first; the token is the programmable record of what exists in law.
          </p>
        </div>
      </Reveal>

      <Reveal delay={280}>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {INSIGHTS.map((item, i) => (
            <Reveal key={item.heading} delay={280 + i * 110}>
              <div className="editorial-card h-full rounded-none p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-gold">
                    {item.num}
                  </span>
                  <item.icon className="size-5 text-gold-deep" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream">
                  {item.heading}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fog">
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
