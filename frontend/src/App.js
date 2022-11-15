import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import classnames from "classnames";
import styles from "./App.module.css";
import Discover from "./Views/Discover/Discover";
import SongDetails from "./Views/SongDetails/SongDetails";
import AroundYou from "./Views/AroundYou/AroundYou";
import ArtistDetails from "./Views/ArtistDetails/ArtistDetails";
import NavBar from "./Modules/NavBar/NavBar";
import TopPlay from "./Modules/TopPlay/TopPlay";
import MusicPlayer from "./Modules/MusicPlayer/MusicPlayer";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <>
      <NavBar />
      <section
        className={classnames({
          [styles.body]: true,
          [styles.musicBarOn]: activeSong?.title,
        })}
      >
        <section className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/song/:songid" element={<SongDetails />} />
            <Route path="/artist/:artistid" element={<ArtistDetails />} />
            <Route path="/around-you" element={<AroundYou />} />
          </Routes>
        </section>
        <TopPlay />
        {activeSong?.title && <MusicPlayer />}
      </section>
    </>
  );
}

export default App;
