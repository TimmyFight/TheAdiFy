// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import Discover from "./Views/Discover/Discover";
import SideBar from "./Modules/SideBar/SideBar";

function App() {
  // const { activeSong } = useSelector((state) => state.player);

  return (
    <section className={styles.body}>
      <section className={styles.sideBar}>
        <SideBar />
      </section>
      <section className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
      </section>
    </section>
  );
}

export default App;
