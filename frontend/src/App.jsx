import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import GamePage from "./Pages/GamePage";

// Store
import useControlStore from "./Store/useControlStore";

function App() {
  const { totalWinners, totalPlayers } = useControlStore();

  useEffect(() => {
    localStorage.setItem("totalWinners", totalWinners);
  }, [totalWinners]);

  useEffect(() => {
    localStorage.setItem("totalPlayers", totalPlayers);
  }, [totalPlayers]);
  return (
    <>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
