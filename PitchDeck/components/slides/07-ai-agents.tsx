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
      "Guides businesses through profile completion, document collection, and verification readiness. Never approves — only assists.",
    constraints: ["Read-only suggestions", "No document signing", "Human reviews all outputs"],
  },
  {
    icon: Brain,
    name: "Financial Analysis Agent",
    description:
      "Extracts and structures financial figures from submitted documents with explicit source references. Labels all AI-generated output.",
    constraints: ["Source-linked output", "AI-labelled always", "Human correction route"],
  },
  {
    icon: ClipboardCheck,
    name: "Due Diligence Assistant",
    description:
      "Runs structured checklists, flags inconsistencies, and assembles review packets. All findings are labelled as draft aids.",
    constraints: ["Draft aids only", "No valuations certified", "Reviewer queue required"],
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
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Agents assist.{" "}
          <span className="text-gold-metal italic">Humans and systems decide.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          AI agents are a first-class product capability — not a chatbot. Each agent
          operates within typed tool permissions, server-side authorization, and a
          complete audit trail. No agent approves offerings, certifies valuations,
          or moves client funds.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.name} delay={340 + i * 120}>
              <div className="h-full rounded-lg border border-gold-line bg-gold/[0.04] p-6">
                <agent.icon className="size-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base leading-snug text-cream">
                  {agent.name}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-fog">
                  {agent.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {agent.constraints.map((c) => (
                    <li
                      key={c}
                      className="font-mono text-[9px] tracking-[0.18em] text-smoke uppercase"
                    >
                      · {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Slide>
  );
}
