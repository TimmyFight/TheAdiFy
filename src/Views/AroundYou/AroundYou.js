import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./AroundYou.module.css";
import SingleTrack from "../../Molecules/SingleTrack/SingleTrack";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import Loader from "../../Atoms/Loader/Loader";
import Error from "../../Atoms/Error/Error";

import { useGetSongsByCountryQuery } from "../../redux/services/shazamCoreApi";

const AroundYou = () => {
  const [countryId, setCountryId] = useState("US");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(countryId);

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        setCountry(response.data.country_name);
        setCountryId(response.data.country_code);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [country]);

  if (loading && isFetching)
    return <Loader message="Wait, loading song around you..." />;
  if (error && country) return <Error message={error} />;
  return (
    <>
      <TitleH2>Around You in {country}</TitleH2>
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

export default AroundYou;
