import { useGetRelatedSongsQuery } from "../../redux/services/shazamCoreApi";
import { useSelector } from "react-redux";
import TopChartsCard from "../../Atoms/TopChartsCard/TopChartsCard";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./RelatedSongs.module.css";

const RelatedSongs = ({ songid }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetRelatedSongsQuery({ songid });

  const songs = data?.slice(0, 5);

  return (
    <section className={styles.topCharts}>
      <section className={styles.topChartsHeader}>
        <TitleH3>Related Songs</TitleH3>
      </section>
      <section className={styles.topChartsSongs}>
        {songs?.map((song, i) => (
          <TopChartsCard
            song={song}
            data={data}
            i={i}
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </section>
    </section>
  );
};

export default RelatedSongs;
