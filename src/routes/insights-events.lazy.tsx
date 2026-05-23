import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/InsightsEvents";

export const Route = createLazyFileRoute("/insights-events")({
  component: Page,
});
