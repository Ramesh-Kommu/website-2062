import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapApplicationSupport";

export const Route = createLazyFileRoute("/sap-application-support")({
  component: Page,
});
