import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ArtistCard.module.css";
import Image from "../../Atoms/Image/Image";
import Description from "../../Atoms/Description/Description";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <section
      className={styles.artistCard}
      onClick={() => navigate(`/artist/${track?.artists[0].adamid}`)}
    >
      <section className={styles.imageContainer}>
        <Image alt={track?.subtitle} src={track?.images?.coverart} />
      </section>
      <Description>{track?.subtitle}</Description>
    </section>
  );
};

ArtistCard.propTypes = {
  track: PropTypes.object,
};

export default ArtistCard;
