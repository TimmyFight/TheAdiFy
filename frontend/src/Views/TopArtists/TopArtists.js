import styles from "./TopArtists.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import ArtistCard from "../../Molecules/ArtistCard/ArtistCard";
import Loader from "../../Atoms/Loader/Loader";
import Error from "../../Atoms/Error/Error";

import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader message="Wait, loading top artists..." />;
  if (error) return <Error message={error} />;
  return (
    <>
      <TitleH2>Discover Top Artists</TitleH2>
      <section className={styles.tracksGrip}>
        {data?.map((track, index) => {
          return <ArtistCard track={track} key={track.key} />;
        })}
      </section>
    </>
  );
};

export default TopArtists;
