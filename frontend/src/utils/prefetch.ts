// Cache to store prefetch promises
const prefetchCache = new Map<string, Promise<unknown>>();

// Prefetch lazy-loaded components
export const prefetchRoute = (route: string) => {
  // Return early if already prefetched
  if (prefetchCache.has(route)) {
    return prefetchCache.get(route);
  }

  let prefetchPromise: Promise<unknown> | undefined;

  switch (route) {
    case "/board":
      prefetchPromise = import("../components/board/Board.tsx");
      break;
    case "/mission":
      prefetchPromise = import("../components/Mission.tsx");
      break;
    case "/events":
      prefetchPromise = import("../components/events/Events.tsx");
      break;
    case "/ensemble":
      prefetchPromise = import("../components/ensemble/Ensemble.tsx");
      break;
    case "/support":
      prefetchPromise = import("../components/Support.tsx");
      break;
    case "/join":
      prefetchPromise = import("../components/join/Join.tsx");
      break;
  }

  if (prefetchPromise) {
    prefetchCache.set(route, prefetchPromise);
  }

  return prefetchPromise;
};

// Prefetch all routes at once (useful for after initial page load)
export const prefetchAllRoutes = () => {
  const routes = [
    "/board",
    "/mission",
    "/events",
    "/ensemble",
    "/support",
    "/join",
  ];
  routes.forEach((route) => prefetchRoute(route));
};
