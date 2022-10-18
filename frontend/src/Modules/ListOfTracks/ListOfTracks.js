import styles from "./ListOfTracks.module.css";
import SingleTrack from "../../Atoms/SingleTrack/SingleTrack";

import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";

const ListOfTracks = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  return (
    <section className={styles.tracksGrip}>
      {data?.map((track) => {
        return (
          <SingleTrack
            title={track.title}
            description={track.subtitle}
            image={track.images.background}
            key={track.key}
          />
        );
      })}
    </section>
  );
};

export default ListOfTracks;
