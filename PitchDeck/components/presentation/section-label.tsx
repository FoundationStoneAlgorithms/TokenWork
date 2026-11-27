import { cn } from "@/lib/utils";

/** Pill eyebrow label: "03 / THE OPPORTUNITY" */
export function SectionLabel({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-none border border-line bg-raise px-3 py-1 font-mono text-[10px] tracking-[0.24em] uppercase shadow-2xs",
        className
      )}
    >
      <span className="font-semibold text-gold">{index}</span>
      <span aria-hidden className="text-smoke">/</span>
      <span className="text-fog">{title}</span>
    </div>
  );
}
