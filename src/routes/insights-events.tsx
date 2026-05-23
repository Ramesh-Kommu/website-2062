import { createFileRoute } from "@tanstack/react-router";

type InsightsSearch = { case?: string; q?: string; industry?: string };

export const Route = createFileRoute("/insights-events")({
  validateSearch: (search: Record<string, unknown>): InsightsSearch => ({
    case: typeof search.case === "string" ? search.case : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
    industry: typeof search.industry === "string" ? search.industry : undefined,
  }),
});
