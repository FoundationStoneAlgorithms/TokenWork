export type FontRole = "display" | "body" | "mono";
export type FontSelection = Record<FontRole, string>;

export const FONT_VARIABLES = {
  ubuntu: "--font-ubuntu",
  fraunces: "--font-fraunces",
  spaceGrotesk: "--font-space-grotesk",
  syne: "--font-syne",
  playfairDisplay: "--font-playfair-display",
  geist: "--font-geist-sans",
  jakarta: "--font-plus-jakarta-sans",
  inter: "--font-inter",
  manrope: "--font-manrope",
  dmSans: "--font-dm-sans",
  geistMono: "--font-geist-mono",
  ibmPlexMono: "--font-ibm-plex-mono",
  jetbrainsMono: "--font-jetbrains-mono",
  robotoMono: "--font-roboto-mono",
} as const;

export const FONT_OPTIONS: Record<FontRole, { value: string; label: string }[]> = {
  display: [
    { value: FONT_VARIABLES.ubuntu, label: "Ubuntu" },
    { value: FONT_VARIABLES.fraunces, label: "Fraunces" },
    { value: FONT_VARIABLES.spaceGrotesk, label: "Space Grotesk" },
    { value: FONT_VARIABLES.syne, label: "Syne" },
    { value: FONT_VARIABLES.playfairDisplay, label: "Playfair Display" },
  ],
  body: [
    { value: FONT_VARIABLES.geist, label: "Geist" },
    { value: FONT_VARIABLES.jakarta, label: "Plus Jakarta Sans" },
    { value: FONT_VARIABLES.inter, label: "Inter" },
    { value: FONT_VARIABLES.manrope, label: "Manrope" },
    { value: FONT_VARIABLES.dmSans, label: "DM Sans" },
  ],
  mono: [
    { value: FONT_VARIABLES.geistMono, label: "Geist Mono" },
    { value: FONT_VARIABLES.ibmPlexMono, label: "IBM Plex Mono" },
    { value: FONT_VARIABLES.jetbrainsMono, label: "JetBrains Mono" },
    { value: FONT_VARIABLES.robotoMono, label: "Roboto Mono" },
  ],
};

export const DEFAULT_FONT_SELECTION: FontSelection = {
  display: FONT_VARIABLES.ubuntu,
  body: FONT_VARIABLES.geist,
  mono: FONT_VARIABLES.geistMono,
};

const FONT_STORAGE_KEY = "tokenwork:pitch-fonts";

function isFontSelection(value: unknown): value is FontSelection {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (Object.keys(FONT_OPTIONS) as FontRole[]).every(
    (role) =>
      typeof candidate[role] === "string" &&
      FONT_OPTIONS[role].some((option) => option.value === candidate[role])
  );
}

export function readFontSelection(storage: Storage): FontSelection {
  try {
    const saved = storage.getItem(FONT_STORAGE_KEY);
    if (!saved) return DEFAULT_FONT_SELECTION;
    const parsed: unknown = JSON.parse(saved);
    return isFontSelection(parsed) ? parsed : DEFAULT_FONT_SELECTION;
  } catch {
    // Storage can be blocked or hold malformed JSON; defaults keep the deck usable.
    return DEFAULT_FONT_SELECTION;
  }
}

export function saveFontSelection(storage: Storage, selection: FontSelection): void {
  try {
    storage.setItem(FONT_STORAGE_KEY, JSON.stringify(selection));
  } catch {
    // The chosen fonts still apply for this session when storage is unavailable.
  }
}

/** Apply the selection to the document root so every slide resolves it immediately. */
export function applyFontVariables(selection: FontSelection): void {
  if (typeof document === "undefined") return;
  const style = document.documentElement.style;
  style.setProperty("--font-heading", `var(${selection.display})`);
  style.setProperty("--font-body", `var(${selection.body})`);
  style.setProperty("--font-code", `var(${selection.mono})`);
}
