import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { loader } from "../../assets";
import styles from "./SingleTrack.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import Image from "../../Atoms/Image/Image";
import PlayPause from "../../Atoms/PlayPause/PlayPause";

const SingleTrack = ({ song, isPlaying, activeSong, data, i }) => {
  const title = song.title;
  const description = song.subtitle;
  const image = song.images?.coverart;

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <section className={styles.singleTrack}>
      <section className={styles.imageContainer}>
        <PlayPause
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
        <Image src={image ? image : loader} alt={title} />
      </section>
      <Link to={`/song/${song?.key}`}>
        <TitleH3>{title}</TitleH3>
      </Link>
      <Link
        to={
          song.artists ? `/artist/${song?.artists[0]?.adamid}` : "/top-artists"
        }
      >
        <Description>{description}</Description>
      </Link>
    </section>
  );
};

SingleTrack.propTypes = {
  song: PropTypes.object,
  isPlaying: PropTypes.bool,
  activeSong: PropTypes.object,
  data: PropTypes.array,
};

export default SingleTrack;
