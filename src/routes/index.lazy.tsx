import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Index";

export const Route = createLazyFileRoute("/")({
  component: Page,
});
