"use client";

import { Bot, Brain, ClipboardCheck } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const AGENTS = [
  {
    icon: Bot,
    name: "Business Onboarding Agent",
    description:
      "Guides businesses through profile completion, document collection, and verification readiness.",
    allowed: "Profile guidance & drafts",
    blocked: "Cannot approve issuers",
  },
  {
    icon: Brain,
    name: "Financial Analysis Agent",
    description:
      "Extracts and structures financial figures from submitted documents with explicit source citations.",
    allowed: "Source-linked extraction",
    blocked: "Cannot certify valuations",
  },
  {
    icon: ClipboardCheck,
    name: "Due Diligence Assistant",
    description:
      "Runs structured checklists, flags inconsistencies, and assembles reviewer packets.",
    allowed: "Checklist & flag drafts",
    blocked: "Cannot execute transactions",
  },
];

export default function AIAgentsSlide() {
  return (
    <Slide ariaLabel="AI agents — bounded, accountable, auditable">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="07" title="AI Agent Layer" />
          <Badge variant="outline">MVP · 3 bounded agents</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Agents assist.{" "}
          <span className="text-emerald-accent">Humans and systems decide.</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Every agent operates inside a typed tool registry with server-side authorization
          and a full audit trail of prompts, calls, outputs, and human corrections.
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {AGENTS.map((agent) => (
            <div key={agent.name} className="editorial-card flex flex-col justify-between rounded-none p-6">
              <div>
                <div className="inline-flex size-10 items-center justify-center rounded-none bg-ok-soft text-gold">
                  <agent.icon className="size-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {agent.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-fog">
                  {agent.description}
                </p>
              </div>

              <div className="mt-5 space-y-2 border-t border-line pt-4 font-mono text-[10px]">
                <div className="flex items-center gap-2 text-ok">
                  <span className="size-1.5 rounded-none bg-ok" />
                  {agent.allowed}
                </div>
                <div className="flex items-center gap-2 text-fail">
                  <span className="size-1.5 rounded-none bg-fail" />
                  {agent.blocked}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
