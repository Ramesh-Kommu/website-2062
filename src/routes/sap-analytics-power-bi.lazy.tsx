import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapAnalyticsPowerBI";

export const Route = createLazyFileRoute("/sap-analytics-power-bi")({
  component: Page,
});
