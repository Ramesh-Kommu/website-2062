import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/EnterpriseDataEngineering";

export const Route = createLazyFileRoute("/enterprise-data-engineering")({
  component: Page,
});
