"use client";

import {
  Building2,
  Handshake,
  Layers,
  LifeBuoy,
  Percent,
  Plug,
  Upload,
} from "lucide-react";
import { Slide } from "@/components/presentation/slide";
import { SectionLabel } from "@/components/presentation/section-label";
import { Reveal } from "@/components/presentation/reveal";
import { Badge } from "@/components/ui/badge";

const CUSTOMERS = [
  { icon: Building2, label: "SME issuers", note: "equity capital formation" },
  { icon: Layers, label: "Institutional investors", note: "portfolio diversification" },
  { icon: Handshake, label: "Financial institutions", note: "infrastructure integration" },
  { icon: Percent, label: "Professional partners", note: "legal, audit, advisory" },
];

const REVENUE = [
  { icon: Upload, label: "Platform subscription", note: "issuer and investor accounts" },
  { icon: Plug, label: "Transaction fees", note: "per offering and allocation" },
  { icon: Layers, label: "API & white-label licensing", note: "institutional integrations" },
  { icon: LifeBuoy, label: "Professional services", note: "onboarding, compliance enablement" },
];

export default function BusinessModelSlide() {
  return (
    <Slide ariaLabel="Business model — high level">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index="12" title="Business Model" />
          <Badge variant="outline">directional — shaped by pilot learning</Badge>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-7 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-cream">
          Infrastructure fees.{" "}
          <span className="text-gold-metal italic">Shared with the ecosystem.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal delay={260}>
          <div className="h-full rounded-lg border border-line bg-raise/50 p-6">
            <div className="font-mono text-[10px] tracking-[0.26em] text-gold uppercase">
              Customers
            </div>
            <ul className="mt-5 flex flex-col divide-y divide-line">
              {CUSTOMERS.map((c) => (
                <li key={c.label} className="flex items-start gap-3.5 py-3">
                  <c.icon className="mt-0.5 size-4 shrink-0 text-fog" strokeWidth={1.5} />
                  <div>
                    <span className="text-sm text-cream">{c.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-fog">
                      {c.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="h-full rounded-lg border border-gold-line bg-gold/[0.04] p-6">
            <div className="font-mono text-[10px] tracking-[0.26em] text-gold uppercase">
              Revenue streams
            </div>
            <ul className="mt-5 flex flex-col divide-y divide-gold-line/60">
              {REVENUE.map((r) => (
                <li key={r.label} className="flex items-start gap-3.5 py-3">
                  <r.icon className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <span className="text-sm text-cream">{r.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-fog">
                      {r.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={500}>
        <p className="mt-8 text-center text-[13px] leading-relaxed text-fog md:text-sm">
          Kept deliberately high-level —{" "}
          <span className="text-cream">
            pricing and packaging follow what the pilot teaches us.
          </span>
        </p>
      </Reveal>
    </Slide>
  );
}
