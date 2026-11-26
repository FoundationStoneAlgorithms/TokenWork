"use client";

import { FileText, Gavel, ShieldCheck, Users } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const FRAMEWORK = [
  {
    icon: Gavel,
    title: "Regulatory framework",
    items: [
      "CMA (Offer of Securities) Regulations 2025",
      "CMA (Licensing and Approval) Regulations 2025",
      "CMA (Conduct of Business) Regulations 2025",
      "Securities Central Depositories Act (Cap. 60)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Compliance by design",
    items: [
      "Eligibility and suitability checks built-in",
      "Jurisdiction rules as product architecture",
      "Investor protection and disclosure workflows",
      "Auditable records for all material actions",
    ],
  },
  {
    icon: Users,
    title: "Licensed partner model",
    items: [
      "Platform operates through licensed intermediaries",
      "Custody via licensed CSDs",
      "Regulated placement and distribution partners",
      "Qualified legal counsel per jurisdiction",
    ],
  },
  {
    icon: FileText,
    title: "Open decisions (D1–D10)",
    items: [
      "Instrument classification — pending counsel",
      "Entity licensing map — pending counsel",
      "Company-law process for tokenized equity",
      "Payment and stablecoin permissions",
    ],
  },
];

export default function LegalSlide() {
  return (
    <Slide ariaLabel="Legal and regulatory — Uganda-first framework">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="09" title="Legal & Regulatory" />
          <Badge variant="outline">desk research · counsel pending</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Compliance is{" "}
          <span className="text-gold-metal italic">product architecture.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Uganda&apos;s capital markets are governed by a comprehensive regulatory
          framework. We will operate through licensed partners, not around them.
          Ten open decisions (D1–D10) are tracked and require qualified counsel
          before any live issuance.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FRAMEWORK.map((block, i) => (
            <Reveal key={block.title} delay={340 + i * 100}>
              <div className="h-full rounded-lg border border-line bg-raise/60 p-5">
                <block.icon className="size-4 text-gold" strokeWidth={1.5} />
                <h3 className="mt-3 font-mono text-[11px] tracking-[0.2em] text-cream uppercase">
                  {block.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[9px] leading-relaxed tracking-[0.12em] text-smoke"
                    >
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={760}>
        <p className="mt-6 text-center font-mono text-[9px] tracking-[0.26em] text-smoke uppercase">
          no live issuance before D1, D2, D3, D5, D7 are resolved by qualified counsel
        </p>
      </Reveal>
    </Slide>
  );
}
