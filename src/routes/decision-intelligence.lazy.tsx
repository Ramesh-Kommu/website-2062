import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/DecisionIntelligence";

export const Route = createLazyFileRoute("/decision-intelligence")({
  component: Page,
});
