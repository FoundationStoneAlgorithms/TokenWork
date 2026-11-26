"use client";

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Coins,
  FileText,
  Globe,
  Users,
} from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const LAYERS = [
  { icon: Users, label: "Business identity & verification" },
  { icon: FileText, label: "Legal instruments & disclosures" },
  { icon: Briefcase, label: "Capital formation & offering" },
  { icon: CheckCircle, label: "Investor eligibility & subscription" },
  { icon: Coins, label: "Settlement & ownership records" },
  { icon: BookOpen, label: "Servicing & corporate actions" },
  { icon: Globe, label: "APIs, SDKs & partner integrations" },
];

export default function SolutionSlide() {
  return (
    <Slide ariaLabel="The solution — integrated capital markets infrastructure">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="05" title="The Solution" />
          <Badge variant="outline">Uganda-first · global by design</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 max-w-4xl font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.1] text-cream">
          An integrated infrastructure layer connecting{" "}
          <span className="text-gold-metal italic">
            businesses, investors, and institutions.
          </span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <Reveal delay={250}>
          <div className="rounded-lg border border-line bg-raise/60 p-5">
            <div className="font-mono text-[9px] tracking-[0.28em] text-smoke uppercase">
              Platform layers
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {LAYERS.map((layer, i) => (
                <div key={layer.label} className="flex items-center gap-3">
                  <layer.icon
                    className={`size-4 shrink-0 ${i === 0 || i === 2 ? "text-gold" : "text-fog"}`}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-cream/90">{layer.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={360} className="hidden lg:flex lg:items-center">
          <ArrowRight className="size-6 text-gold/40" />
        </Reveal>

        <Reveal delay={410}>
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-lg border border-gold-line bg-gold/[0.05] p-5">
              <div className="font-mono text-[9px] tracking-[0.28em] text-gold uppercase">
                Four instrument families
              </div>
              <div className="mt-3.5 flex flex-col gap-2">
                {[
                  "Business equity",
                  "Business debt",
                  "Revenue-sharing",
                  "Asset-backed investments",
                ].map((inst, i) => (
                  <div key={inst} className="flex items-center gap-2.5">
                    <span className={`size-1.5 rotate-45 ${i === 0 ? "bg-gold" : "bg-gold/40"}`} />
                    <span className="font-mono text-[11px] tracking-wider text-cream">
                      {inst}
                    </span>
                    {i === 0 && (
                      <Badge variant="gold">first</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-raise/50 p-5">
              <div className="font-mono text-[9px] tracking-[0.28em] text-smoke uppercase">
                AI agent layer
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-fog">
                Onboarding, financial analysis, and due diligence — agents assist,
                deterministic systems decide.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
