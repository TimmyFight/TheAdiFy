// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Discover from "./Views/Discover/Discover";

function App() {
  // const { activeSong } = useSelector((state) => state.player);

  return (
    <Routes>
      <Route path="/" element={<Discover />} />
    </Routes>
  );
}

export default App;
