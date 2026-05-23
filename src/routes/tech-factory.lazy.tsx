import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/TechFactory";

export const Route = createLazyFileRoute("/tech-factory")({
  component: Page,
});
