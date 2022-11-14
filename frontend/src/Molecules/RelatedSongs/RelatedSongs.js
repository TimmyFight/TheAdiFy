import { useGetRelatedSongsQuery } from "../../redux/services/shazamCoreApi";
import { useSelector } from "react-redux";
import TopChartsCard from "../../Atoms/TopChartsCard/TopChartsCard";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./RelatedSongs.module.css";

const RelatedSongs = ({ songid, artistSongs, artistId }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  let { data } = useGetRelatedSongsQuery({ songid });
  let songs = data?.slice(0, 5);

  if (artistId) {
    songs = artistSongs;
    data = artistSongs;
  }

  return (
    <section className={styles.topCharts}>
      <section className={styles.topChartsHeader}>
        <TitleH3>Related Songs</TitleH3>
      </section>
      <section className={styles.topChartsSongs}>
        {songs?.map((song, i) => (
          <TopChartsCard
            artistId={artistId}
            song={song}
            data={data}
            i={i + 1}
            key={artistId ? song.id : song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </section>
    </section>
  );
};

export default RelatedSongs;
