import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/PredictiveAnalytics";

export const Route = createLazyFileRoute("/predictive-analytics")({
  component: Page,
});
