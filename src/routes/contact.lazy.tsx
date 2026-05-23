import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Contact";

export const Route = createLazyFileRoute("/contact")({
  component: Page,
});
