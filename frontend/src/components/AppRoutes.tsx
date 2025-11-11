import { Routes, Route, useLocation } from "react-router";
import App from "../App.tsx";
import PageTransition from "./PageTransition.tsx";
import Board from "./board/Board.tsx";
import Mission from "./Mission.tsx";
import Events from "./events/Events.tsx";
import Ensemble from "./ensemble/Ensemble.tsx";
import Support from "./Support.tsx";
import Join from "./join/Join.tsx";

function AppRoutes() {
  const location = useLocation();

  return (
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
  );
}

export default AppRoutes;
