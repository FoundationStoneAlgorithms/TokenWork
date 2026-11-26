/**
 * TokenWork brand mark — TW capital formation symbol.
 *
 * A rising step motif: legal foundation → token layer → capital.
 * The capstone glows in luminous gold — the moment of issuance.
 */
export type TWMarkProps = {
  className?: string;
  variant?: "default" | "brand" | "light" | "mono";
  baseColor?: string;
  topColor?: string;
};

export function TWMark({
  className,
  variant = "default",
  baseColor,
  topColor,
}: TWMarkProps) {
  let computedBase = baseColor;
  let computedTop = topColor;
  let baseOpacity: number | undefined = undefined;

  if (!computedBase && !computedTop) {
    if (variant === "brand") {
      computedBase = "#8F6E31";
      computedTop = "#E9D096";
    } else if (variant === "light") {
      computedBase = "#14110C";
      computedTop = "#C9A45C";
    } else if (variant === "mono") {
      computedBase = "currentColor";
      computedTop = "currentColor";
    } else {
      computedBase = "currentColor";
      computedTop = "currentColor";
      baseOpacity = 0.52;
    }
  }

  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label="TokenWork — Capital Formation Mark"
    >
      {/* Legal foundation layer — broad base */}
      <rect
        x="28"
        y="196"
        width="200"
        height="20"
        fill={computedBase ?? "currentColor"}
        fillOpacity={baseOpacity}
      />
      {/* Platform layer */}
      <rect
        x="56"
        y="156"
        width="144"
        height="20"
        fill={computedBase ?? "currentColor"}
        fillOpacity={baseOpacity ? baseOpacity * 0.75 : undefined}
      />
      {/* Instrument layer */}
      <rect
        x="88"
        y="116"
        width="80"
        height="20"
        fill={computedBase ?? "currentColor"}
        fillOpacity={baseOpacity ? baseOpacity * 0.5 : undefined}
      />
      {/* Token capstone — luminous gold */}
      <rect
        x="112"
        y="76"
        width="32"
        height="20"
        fill={computedTop ?? "currentColor"}
      />
      {/* Capital arrow pointing up */}
      <polygon
        points="128,40 148,72 108,72"
        fill={computedTop ?? "currentColor"}
      />
    </svg>
  );
}
