import { Deck } from "@/components/presentation/deck";
import { slideIds } from "@/components/slides";

/**
 * Optional catch-all so every slide owns a named path:
 * /            → 01 cover
 * /problem     → 02 problem
 * /the-ask     → 15 the ask …
 */
export function generateStaticParams() {
  return [
    { slug: [] },
    ...slideIds.map((id) => ({ slug: [id] })),
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  await params;
  return <Deck />;
}
