"use client";

import { Presentation } from "./presentation";
import { slides } from "@/components/slides";

/** The full TokenWork seed pitch deck. */
export function Deck() {
  return <Presentation slides={slides} />;
}
