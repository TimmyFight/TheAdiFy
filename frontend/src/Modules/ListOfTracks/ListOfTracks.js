import { useSelector } from "react-redux";
import styles from "./ListOfTracks.module.css";
import SingleTrack from "../../Molecules/SingleTrack/SingleTrack";
import Loader from "../../Atoms/Loader/Loader";
import Error from "../../Atoms/Error/Error";

import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";

const ListOfTracks = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader message="Wait, loading is in progress." />;
  if (error) return <Error message={error} />;
  return (
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
  );
};

export default ListOfTracks;
