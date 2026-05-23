import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sfx9-mes")({
  head: () => ({
    meta: [
      { title: "SFX9 MES — The Intelligent Shop Floor Platform | CarbyneTech" },
      {
        name: "description",
        content:
          "SFX9 is CarbyneTech's Manufacturing Execution System — a realtime intelligence layer for OEE, quality, traceability, maintenance and energy across every plant.",
      },
      { property: "og:title", content: "SFX9 MES — The Intelligent Shop Floor Platform" },
      {
        property: "og:description",
        content:
          "Unify your shop floor into a realtime operating system. Six pillars of SFX9 intelligence — OEE, quality, traceability, maintenance, energy and adaptive manufacturing.",
      },
    ],
  }),
});
