import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapEwm";

export const Route = createLazyFileRoute("/sap-ewm")({
  component: Page,
});
