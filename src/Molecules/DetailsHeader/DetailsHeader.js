import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./DetailsHeader.module.css";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import Image from "../../Atoms/Image/Image";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId].attributes;
  return (
    <section className={styles.detailsHeader}>
      <div className={styles.detailsImage}>
        <Image
          type="pure"
          src={artistId ? artist.artwork?.url : songData?.images?.coverart}
          alt={"alt"}
        />
      </div>
      <div className={styles.detailsInfo}>
        <TitleH2>{artistId ? artist.name : songData?.title}</TitleH2>
        {!artistId && (
          <Link to={`/artist/${songData?.artists[0].adamid}`}>
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

DetailsHeader.propTypes = {
  artistId: PropTypes.string,
  artistData: PropTypes.object,
  songData: PropTypes.object,
};

export default DetailsHeader;
