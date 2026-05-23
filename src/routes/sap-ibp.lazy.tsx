import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapIbp";

export const Route = createLazyFileRoute("/sap-ibp")({
  component: Page,
});
