import type { SlideMeta } from "@/components/presentation/presentation";
import CoverSlide from "./01-cover";
import ProblemSlide from "./02-problem";
import OpportunitySlide from "./03-opportunity";
import InsightSlide from "./04-insight";
import SolutionSlide from "./05-solution";
import HowItWorksSlide from "./06-how-it-works";
import AIAgentsSlide from "./07-ai-agents";
import TargetMarketSlide from "./08-target-market";
import LegalSlide from "./09-legal";
import TechnologySlide from "./10-technology";
import MVPSlide from "./11-mvp";
import BusinessModelSlide from "./12-business-model";
import WhyNowSlide from "./13-why-now";
import RoadmapSlide from "./14-roadmap";
import TheAskSlide from "./15-the-ask";
import ClosingSlide from "./16-closing";

export const slideIds = [
  "cover",
  "problem",
  "opportunity",
  "insight",
  "solution",
  "how-it-works",
  "ai-agents",
  "target-market",
  "legal",
  "technology",
  "mvp",
  "business-model",
  "why-now",
  "roadmap",
  "the-ask",
  "closing",
] as const;

export const slides: SlideMeta[] = [
  { id: "cover", num: "01", title: "Cover", component: () => <CoverSlide /> },
  { id: "problem", num: "02", title: "The Problem", component: () => <ProblemSlide /> },
  { id: "opportunity", num: "03", title: "The Opportunity", component: () => <OpportunitySlide /> },
  { id: "insight", num: "04", title: "The Insight", component: () => <InsightSlide /> },
  { id: "solution", num: "05", title: "The Solution", component: () => <SolutionSlide /> },
  { id: "how-it-works", num: "06", title: "How It Works", component: () => <HowItWorksSlide /> },
  { id: "ai-agents", num: "07", title: "AI Agents", component: () => <AIAgentsSlide /> },
  { id: "target-market", num: "08", title: "Target Market", component: () => <TargetMarketSlide /> },
  { id: "legal", num: "09", title: "Legal & Regulatory", component: () => <LegalSlide /> },
  { id: "technology", num: "10", title: "Technology", component: () => <TechnologySlide /> },
  { id: "mvp", num: "11", title: "MVP", component: () => <MVPSlide /> },
  { id: "business-model", num: "12", title: "Business Model", component: () => <BusinessModelSlide /> },
  { id: "why-now", num: "13", title: "Why Now", component: () => <WhyNowSlide /> },
  { id: "roadmap", num: "14", title: "Roadmap", component: () => <RoadmapSlide /> },
  { id: "the-ask", num: "15", title: "The Ask", component: () => <TheAskSlide /> },
  { id: "closing", num: "16", title: "Closing", component: () => <ClosingSlide /> },
];
