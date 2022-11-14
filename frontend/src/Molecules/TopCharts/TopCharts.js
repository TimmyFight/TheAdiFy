import { Link } from "react-router-dom";
import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";
import { useSelector } from "react-redux";
import TopChartsCard from "../../Atoms/TopChartsCard/TopChartsCard";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./TopCharts.module.css";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const topPlays = data?.slice(0, 5);

  return (
    <section className={styles.topCharts}>
      <section className={styles.topChartsHeader}>
        <TitleH3>Top Charts</TitleH3>
        <Link to="/top-charts">See More</Link>
      </section>
      <section className={styles.topChartsSongs}>
        {topPlays?.map((song, i) => (
          <TopChartsCard
            song={song}
            data={data}
            i={i + 1}
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </section>
    </section>
  );
};

export default TopCharts;
