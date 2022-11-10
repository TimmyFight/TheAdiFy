import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import styles from "./TopChartsCard.module.css";
import TitleH3 from "../TitleH3/TitleH3";
import Image from "../Image/Image";
import PlayPause from "../PlayPause/PlayPause";

const TopChartsCard = ({ song, data, i, isPlaying, activeSong }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className={styles.card}>
      <TitleH3>{i}.</TitleH3>
      <Image alt={song.title} src={song.images?.coverart} type="icon" />
      <TitleH3>
        <Link to={`/song/${song?.key}`}>{song.title}</Link>
      </TitleH3>
      <PlayPause
        type="button"
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

TopChartsCard.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default TopChartsCard;
