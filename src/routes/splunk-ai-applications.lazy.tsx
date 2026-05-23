import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SplunkAiApplications";

export const Route = createLazyFileRoute("/splunk-ai-applications")({
  component: Page,
});
