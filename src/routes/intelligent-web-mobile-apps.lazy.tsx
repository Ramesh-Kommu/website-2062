import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/IntelligentWebMobileApps";

export const Route = createLazyFileRoute("/intelligent-web-mobile-apps")({
  component: Page,
});
