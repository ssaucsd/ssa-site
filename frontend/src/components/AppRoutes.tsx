import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import PageTransition from "./PageTransition.tsx";
import LoadingScreen from "./LoadingScreen.tsx";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import Home from "./home/Home.tsx";

// Lazy load all route components except home content
const Board = lazy(() => import("./board/Board.tsx"));
const Mission = lazy(() => import("./Mission.tsx"));
const Events = lazy(() => import("./events/Events.tsx"));
const Ensemble = lazy(() => import("./ensemble/Ensemble.tsx"));
const Support = lazy(() => import("./Support.tsx"));
const Join = lazy(() => import("./join/Join.tsx"));

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <PageTransition locationKey={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/board"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Board />
              </Suspense>
            }
          />
          <Route
            path="/mission"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Mission />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="/ensemble"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Ensemble />
              </Suspense>
            }
          />
          <Route
            path="/support"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Support />
              </Suspense>
            }
          />
          <Route
            path="/join"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Join />
              </Suspense>
            }
          />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}

export default AppRoutes;
