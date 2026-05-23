import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Sfx9Mes";

export const Route = createLazyFileRoute("/sfx9-mes")({
  component: Page,
});
