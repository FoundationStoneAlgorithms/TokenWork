import {
  DM_Sans,
  Fraunces,
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Inter,
  JetBrains_Mono,
  Manrope,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Roboto_Mono,
  Space_Grotesk,
  Syne,
  Ubuntu,
} from "next/font/google";

/*
 * Next's font transform requires literal option values, so these names are
 * duplicated from lib/font-options.ts (FONT_VARIABLES). Keep the two in sync.
 * The original triad is preloaded; optional choices load only when selected.
 */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  preload: false,
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  preload: false,
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  preload: false,
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  preload: false,
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  preload: false,
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: false,
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  preload: false,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  preload: false,
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  preload: false,
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  preload: false,
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  preload: false,
});

export const fontVariableClasses = [
  geistSans,
  geistMono,
  ubuntu,
  fraunces,
  spaceGrotesk,
  syne,
  playfairDisplay,
  jakarta,
  inter,
  manrope,
  dmSans,
  ibmPlexMono,
  jetbrainsMono,
  robotoMono,
]
  .map((font) => font.variable)
  .join(" ");
