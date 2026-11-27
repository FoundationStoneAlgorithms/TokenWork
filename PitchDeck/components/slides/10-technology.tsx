"use client";

import { Code2, Database, Globe, Link2 } from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";

const STACK = [
  {
    icon: Code2,
    layer: "Backend",
    tech: "Rust · Axum · Tokio",
    rationale: "Memory-safe, concurrent, high-throughput financial services",
  },
  {
    icon: Database,
    layer: "Database",
    tech: "PostgreSQL",
    rationale: "Authoritative record for all business, investor, and offering data",
  },
  {
    icon: Link2,
    layer: "Blockchain",
    tech: "Solana · Anchor",
    rationale: "High throughput, low cost — Devnet for MVP, Solana-first production",
  },
  {
    icon: Globe,
    layer: "Frontend",
    tech: "TypeScript · Next.js",
    rationale: "Accessible, server-rendered web application for all user roles",
  },
];

export default function TechnologySlide() {
  return (
    <Slide ariaLabel="Technology — the stack">
      <Reveal>
        <SectionLabel index="10" title="Technology" />
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.06] font-medium text-cream">
          Rust-first. Postgres-authoritative.{" "}
          <span className="text-emerald-accent">Solana-anchored.</span>
        </h2>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
          Technology choices are proposed defaults validated against requirements.
          The stack prioritises security, performance, and auditability over
          novelty. Solana is the initial chain; additional adapters only when justified.
        </p>
      </Reveal>

      <Reveal delay={340}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((item, i) => (
            <Reveal key={item.layer} delay={340 + i * 100}>
              <div className="editorial-card h-full rounded-none p-5">
                <item.icon className="size-5 text-gold" strokeWidth={1.6} />
                <div className="mt-3 font-mono text-[9px] tracking-[0.26em] text-smoke uppercase">
                  {item.layer}
                </div>
                <div className="mt-1.5 font-display text-lg font-medium text-cream">
                  {item.tech}
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-fog">
                  {item.rationale}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={760}>
        <div className="editorial-card mt-8 rounded-none p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="font-mono text-[9px] tracking-[0.26em] text-smoke uppercase">Security</div>
              <p className="mt-2 text-[13px] leading-relaxed text-fog">
                AuthN/AuthZ, ABAC, key management, off-chain sensitive data, audit events
              </p>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.26em] text-smoke uppercase">AI infrastructure</div>
              <p className="mt-2 text-[13px] leading-relaxed text-fog">
                Typed tool registry, server-side authZ, model gateway, evaluation & observability
              </p>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-[0.26em] text-smoke uppercase">Interoperability</div>
              <p className="mt-2 text-[13px] leading-relaxed text-fog">
                APIs, SDKs, webhooks, white-label deployments, additional chain adapters when justified
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Slide>
  );
}
