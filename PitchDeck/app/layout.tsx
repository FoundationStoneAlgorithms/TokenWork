import type { Metadata, Viewport } from "next";
import { fontVariableClasses } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TokenWork — Seed Investment Pitch",
  description:
    "TokenWork is business capital markets infrastructure — legally structured equity issuance for African SMEs. Built in Uganda with African roots, designed for global markets.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontVariableClasses} h-full antialiased`}
    >
      <body className="h-full overflow-hidden bg-ink text-cream">{children}</body>
    </html>
  );
}
