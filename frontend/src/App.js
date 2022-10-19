import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Discover from "./Views/Discover/Discover";
import SideBar from "./Modules/SideBar/SideBar";
import NavBar from "./Modules/NavBar/NavBar";
import MusicPlayer from "./Modules/MusicPlayer/MusicPlayer";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <>
      <NavBar />
      <section className={styles.body}>
        <section className={styles.sideBar}>
          <SideBar />
        </section>
        <section className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </section>
        {activeSong?.title && (
          <section>
            <MusicPlayer />
          </section>
        )}
      </section>
    </>
  );
}

export default App;
