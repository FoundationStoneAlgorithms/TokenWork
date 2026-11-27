/**
 * TokenWork brand mark — Architectural keystone & interlocking capital ledger.
 * Sharp geometric silhouette inspired by institutional masonry/ledger architecture.
 */
export type TWMarkProps = {
  className?: string;
};

export function TWMark({ className }: TWMarkProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label="TokenWork"
    >
      {/* Base structural foundation & twin vertical ledger piers */}
      <path
        fill="currentColor"
        fillOpacity={0.48}
        d="M44 52h168v32h-68v120h-32V84H44V52Z"
      />
      {/* Interlocking lower capital lock & keystone bar */}
      <path
        fill="currentColor"
        d="M44 108h44v96H44v-96Zm124 0h44v96h-44v-96ZM96 52h64v32H96V52Z"
      />
    </svg>
  );
}
