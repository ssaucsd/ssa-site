// Prefetch lazy-loaded components
export const prefetchRoute = (route: string) => {
  switch (route) {
    case "/board":
      import("../components/board/Board.tsx");
      break;
    case "/mission":
      import("../components/Mission.tsx");
      break;
    case "/events":
      import("../components/events/Events.tsx");
      break;
    case "/ensemble":
      import("../components/ensemble/Ensemble.tsx");
      break;
    case "/support":
      import("../components/Support.tsx");
      break;
    case "/join":
      import("../components/join/Join.tsx");
      break;
  }
};
