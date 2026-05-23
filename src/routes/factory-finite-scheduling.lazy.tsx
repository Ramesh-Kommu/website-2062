import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/FactoryFiniteScheduling";

export const Route = createLazyFileRoute("/factory-finite-scheduling")({
  component: Page,
});
