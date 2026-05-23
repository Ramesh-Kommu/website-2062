import { createFileRoute } from "@tanstack/react-router";

type CareersSearch = { jobtitle?: string; page?: number };

export const Route = createFileRoute("/careers")({
  validateSearch: (search: Record<string, unknown>): CareersSearch => ({
    jobtitle: typeof search.jobtitle === "string" ? search.jobtitle : undefined,
    page: typeof search.page === "number" ? search.page : Number(search.page) || undefined,
  }),
});
