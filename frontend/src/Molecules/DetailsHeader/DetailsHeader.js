import { Link } from "react-router-dom";
import styles from "./DetailsHeader.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import Image from "../../Atoms/Image/Image";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artist[artistId].attributes;
  return (
    <section className={styles.detailsHeader}>
      <div>
        <Image
          type="icon"
          src={artistId ? artist.artwork?.url : songData?.images?.coverart}
          alt={"alt"}
        />
      </div>
      <div className={styles.detailsInfo}>
        <TitleH2>{artistId ? artist.name : songData?.title}</TitleH2>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <TitleH3 margin="none">{songData?.subtitle}</TitleH3>
          </Link>
        )}
        <Description fontColor="fontColorGray">
          {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
        </Description>
      </div>
    </section>
  );
};

export default DetailsHeader;
