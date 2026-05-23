import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ShopFloorDigitalApps";

export const Route = createLazyFileRoute("/shopfloor-digital-apps")({
  component: Page,
});
