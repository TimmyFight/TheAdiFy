import TopCharts from "../../Molecules/TopCharts/TopCharts";
import TopArtists from "../../Molecules/TopArtists/TopArtists";
import styles from "./TopPlay.module.css";

const TopPlay = () => {
  return (
    <section className={styles.TopPlay}>
      <TopCharts />
      <TopArtists />
    </section>
  );
};

export default TopPlay;
