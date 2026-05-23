import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/AgenticIntelligence";

export const Route = createLazyFileRoute("/agentic-intelligence")({
  component: Page,
});
