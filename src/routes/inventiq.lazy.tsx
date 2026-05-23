import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Inventiq";

export const Route = createLazyFileRoute("/inventiq")({
  component: Page,
});
