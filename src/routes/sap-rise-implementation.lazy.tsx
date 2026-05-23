import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapRiseImplementation";

export const Route = createLazyFileRoute("/sap-rise-implementation")({
  component: Page,
});
