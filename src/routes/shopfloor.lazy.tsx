import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ShopFloor";

export const Route = createLazyFileRoute("/shopfloor")({
  component: Page,
});
