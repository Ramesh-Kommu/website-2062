import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Careers";

export const Route = createLazyFileRoute("/careers")({
  component: Page,
});
