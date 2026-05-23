import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ConditionMonitoring";

export const Route = createLazyFileRoute("/condition-monitoring")({
  component: Page,
});
