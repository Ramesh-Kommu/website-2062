import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SapSupplyChainFinance";

export const Route = createLazyFileRoute("/sap-supply-chain-finance")({
  component: Page,
});
