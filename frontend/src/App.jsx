import { Routes, Route } from "react-router-dom";

// Pages
import GamePage from "./Pages/GamePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
