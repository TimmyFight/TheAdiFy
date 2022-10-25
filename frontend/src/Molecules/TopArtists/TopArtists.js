import { Link } from "react-router-dom";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./TopArtists.module.css";

const TopArtists = () => {
  return (
    <section className={styles.topArtistsHeader}>
      <TitleH3>Top Artists</TitleH3>
      <Link to="/top-artists">See More</Link>
    </section>
  );
};

export default TopArtists;
