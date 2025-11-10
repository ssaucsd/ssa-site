import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import App from "../App.tsx";
import LoadingFallback from "./LoadingFallback.tsx";
import PageTransition from "./PageTransition.tsx";

// Lazy load route components for better performance
const Board = lazy(() => import("./board/Board.tsx"));
const Mission = lazy(() => import("./Mission.tsx"));
const Events = lazy(() => import("./events/Events.tsx"));
const Ensemble = lazy(() => import("./ensemble/Ensemble.tsx"));
const Support = lazy(() => import("./Support.tsx"));
const Join = lazy(() => import("./join/Join.tsx"));

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <PageTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route path="/board" element={<Board />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ensemble" element={<Ensemble />} />
          <Route path="/support" element={<Support />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </PageTransition>
    </Suspense>
  );
}

export default AppRoutes;
