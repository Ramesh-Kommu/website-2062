import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import NotFound from "@/pages/NotFound";

import appCss from "../styles.css?url";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CarbyneTech" },
      { name: "description", content: "CarbyneTech — Intelligent enterprise solutions" },
      { property: "og:title", content: "CarbyneTech" },
      { name: "twitter:title", content: "CarbyneTech" },
      { property: "og:description", content: "CarbyneTech — Intelligent enterprise solutions" },
      { name: "twitter:description", content: "CarbyneTech — Intelligent enterprise solutions" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/26713a9c-13b2-4f98-b6e4-8824838b0cf2/id-preview-37b9b4de--9ac6e506-f3cd-48bd-bd3f-373d708e5a41.lovable.app-1778223331755.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/26713a9c-13b2-4f98-b6e4-8824838b0cf2/id-preview-37b9b4de--9ac6e506-f3cd-48bd-bd3f-373d708e5a41.lovable.app-1778223331755.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
