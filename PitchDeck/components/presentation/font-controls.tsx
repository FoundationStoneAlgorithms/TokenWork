"use client";

import { ChevronDown } from "lucide-react";
import {
  FONT_OPTIONS,
  type FontRole,
  type FontSelection,
} from "@/lib/font-options";

const ROLES: { role: FontRole; label: string }[] = [
  { role: "display", label: "Headings" },
  { role: "body", label: "Body" },
  { role: "mono", label: "Labels & numbers" },
];

export function FontControls({
  selection,
  onChange,
  onReset,
}: {
  selection: FontSelection;
  onChange: (role: FontRole, value: string) => void;
  onReset: () => void;
}) {
  return (
    <section aria-label="Typography" className="mb-5 border-b border-line pb-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
          Typography
        </h3>
        <button
          type="button"
          onClick={onReset}
          className="cursor-pointer rounded-sm font-mono text-[10px] tracking-[0.14em] text-smoke uppercase transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {ROLES.map(({ role, label }) => {
          const selectedLabel = FONT_OPTIONS[role].find(
            (option) => option.value === selection[role]
          )?.label;

          return (
            <label key={role} className="flex flex-col gap-1.5">
              <span className="font-mono text-[9px] tracking-[0.18em] text-smoke uppercase">
                {label}
              </span>
              <span className="relative">
                <select
                  value={selection[role]}
                  onChange={(event) => onChange(role, event.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-sm border border-line-strong bg-ink-soft py-1.5 pr-7 pl-2 font-mono text-[11px] text-cream outline-none transition-colors [color-scheme:dark] hover:border-gold/50 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                >
                  {FONT_OPTIONS[role].map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={{ fontFamily: `var(${option.value})` }}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-smoke"
                />
              </span>
              <span className="flex items-center gap-2 rounded-sm border border-line bg-ink/60 px-2 py-1 font-mono text-[9px] text-smoke">
                <span
                  aria-hidden
                  className="text-[15px] leading-none text-cream"
                  style={{ fontFamily: `var(${selection[role]})` }}
                >
                  Aa
                </span>
                <span className="truncate">{selectedLabel}</span>
              </span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
