"use client";

import {
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
  { icon: Briefcase, label: "Capital formation & offering distribution" },
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
          <Badge variant="outline">Uganda-first · multi-jurisdiction by design</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium text-cream">
          One connected layer for{" "}
          <span className="text-emerald-accent">
            businesses, investors, and institutions.
          </span>
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal delay={240}>
          <div className="editorial-card rounded-xl p-6">
            <div className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
              Seven-layer platform stack
            </div>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {LAYERS.map((layer, i) => (
                <div
                  key={layer.label}
                  className="flex items-center gap-3 rounded-lg bg-ink-soft/70 px-3.5 py-2.5"
                >
                  <span className="font-mono text-[10px] font-semibold text-gold">
                    0{i + 1}
                  </span>
                  <layer.icon className="size-4 shrink-0 text-fog" strokeWidth={1.6} />
                  <span className="text-xs font-medium text-cream">{layer.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="flex h-full flex-col gap-4">
            <div className="editorial-card rounded-xl border-gold-line/60 p-6">
              <div className="font-mono text-[10px] tracking-[0.22em] text-gold-bright uppercase">
                Four instrument families
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  { name: "Business equity", tag: "Phase 1" },
                  { name: "Business debt", tag: "Phase 3" },
                  { name: "Revenue-sharing", tag: "Phase 3" },
                  { name: "Asset-backed", tag: "Phase 3" },
                ].map((inst, i) => (
                  <div
                    key={inst.name}
                    className="flex items-center justify-between rounded-lg bg-ink-soft/80 px-3.5 py-2"
                  >
                    <span className="text-sm font-medium text-cream">{inst.name}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[9px] tabular-nums uppercase ${
                        i === 0
                          ? "bg-gold text-ink font-semibold"
                          : "bg-raise-2 text-fog"
                      }`}
                    >
                      {inst.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-card rounded-xl border-l-4 border-l-gold p-5">
              <div className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
                AI Agent Infrastructure
              </div>
              <p className="mt-2 text-xs leading-relaxed text-fog">
                Bounded assistants for onboarding, financial extraction, and due-diligence
                prep — deterministic systems and authorized humans decide.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
