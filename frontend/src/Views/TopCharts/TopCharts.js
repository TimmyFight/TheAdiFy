import { useSelector } from "react-redux";
import styles from "./TopCharts.module.css";
import SingleTrack from "../../Molecules/SingleTrack/SingleTrack";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Loader from "../../Atoms/Loader/Loader";
import Error from "../../Atoms/Error/Error";

import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader message="Wait, loading top charts..." />;
  if (error) return <Error message={error} />;
  return (
    <>
      <TitleH2>Discover Top Charts</TitleH2>
      <section className={styles.tracksGrip}>
        {data?.map((song, index) => {
          return (
            <SingleTrack
              song={song}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default TopCharts;
