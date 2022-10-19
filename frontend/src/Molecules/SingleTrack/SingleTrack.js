import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UseDispatch } from "react-redux";
import { playPause, setActiveSongs } from "../../redux/features/pleyerSlice";
import { loader } from "../../assets";
import styles from "./SingleTrack.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import Image from "../../Atoms/Image/Image";
import PlayPause from "../../Atoms/PlayPause/PlayPause";

const SingleTrack = ({ track, isPlaying, activeSong, data }) => {
  const title = track.title;
  const description = track.subtitle;
  const image = track.images?.coverart;

  const handlePauseClick = () => {};

  const handlePlayClick = () => {};

  return (
    <section className={styles.singleTrack}>
      <section className={styles.imageContainer}>
        <PlayPause
          track={track}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
        <Image src={image ? image : loader} alt={title} />
      </section>
      <Link to={`/track/${track?.key}`}>
        <TitleH3>{title}</TitleH3>
      </Link>
      <Link
        to={
          track.artists
            ? `/artist/${track?.artists[0]?.adamid}`
            : "/top-artists"
        }
      >
        <Description>{description}</Description>
      </Link>
    </section>
  );
};

SingleTrack.propTypes = {
  track: PropTypes.object,
  isPlaying: PropTypes.bool,
  activeSong: PropTypes.object,
  data: PropTypes.array,
};

export default SingleTrack;
