import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/Culture";

export const Route = createLazyFileRoute("/culture")({
  component: Page,
});
