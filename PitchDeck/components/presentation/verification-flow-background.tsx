"use client";

const VERIFICATION_STRANDS = [
  "M -80 780 C 300 760 480 540 820 470 S 1180 430 1520 250",
  "M -80 700 C 280 690 500 500 840 455 S 1220 440 1520 330",
  "M -80 600 C 260 620 520 520 860 480 S 1240 470 1520 430",
  "M -80 500 C 240 540 540 530 880 495 S 1240 500 1520 520",
  "M -80 380 C 220 460 560 545 900 520 S 1260 540 1520 620",
  "M -80 260 C 200 400 580 570 920 555 S 1280 580 1520 720",
  "M -80 140 C 180 350 600 600 940 590 S 1300 620 1520 820",
];

/**
 * Shared deck background: light strands converge into a soft platinum glow,
 * with staggered pulses travelling through them on a loop.
 */
export function VerificationFlowBackground() {
  return (
    <div className="absolute inset-0 bg-ink">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="size-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="verification-glow" cx="70%" cy="54%" r="55%">
            <stop offset="0%" stopColor="rgba(197, 214, 234, 0.16)" />
            <stop offset="100%" stopColor="rgba(140, 168, 199, 0)" />
          </radialGradient>
        </defs>
        <ellipse
          className="verification-glow"
          cx="1030"
          cy="500"
          rx="430"
          ry="290"
          fill="url(#verification-glow)"
        />
        {VERIFICATION_STRANDS.map((path, index) => (
          <g key={path}>
            <path
              d={path}
              fill="none"
              stroke="rgba(140, 168, 199, 0.14)"
              strokeWidth="1.2"
            />
            <path
              className="verification-flow verification-flow-glow"
              style={{ animationDelay: `${(-index * 1.15).toFixed(2)}s` }}
              d={path}
              pathLength={1000}
              stroke="rgba(140, 168, 199, 0.5)"
            />
            <path
              className="verification-flow"
              style={{ animationDelay: `${(-index * 1.15).toFixed(2)}s` }}
              d={path}
              pathLength={1000}
              stroke="rgba(197, 214, 234, 0.65)"
              strokeWidth="2.2"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
