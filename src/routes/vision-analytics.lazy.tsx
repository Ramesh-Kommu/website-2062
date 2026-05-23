import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/VisionAnalytics";

export const Route = createLazyFileRoute("/vision-analytics")({
  component: Page,
});
