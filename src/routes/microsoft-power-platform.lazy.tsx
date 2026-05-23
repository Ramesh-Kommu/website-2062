import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/MicrosoftPowerPlatform";

export const Route = createLazyFileRoute("/microsoft-power-platform")({
  component: Page,
});
