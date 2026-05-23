import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapValueCreation";

export const Route = createLazyFileRoute("/sap-value-creation")({
  component: Page,
});
