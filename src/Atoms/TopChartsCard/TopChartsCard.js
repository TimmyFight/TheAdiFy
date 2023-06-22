import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import styles from "./TopChartsCard.module.css";
import TitleH3 from "../TitleH3/TitleH3";
import Image from "../Image/Image";
import PlayPause from "../PlayPause/PlayPause";

const TopChartsCard = ({ artistId, song, data, i, isPlaying, activeSong }) => {
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
      <Image
        alt={artistId ? song.attributes?.name : song.title}
        src={artistId ? song.attributes?.artwork?.url : song.images?.coverart}
        type="icon"
      />
      <TitleH3>
        {artistId ? (
          song.attributes?.name
        ) : (
          <Link to={`/song/${song?.key}`}>{song.title}</Link>
        )}
      </TitleH3>
      {!artistId && (
        <PlayPause
          type="button"
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      )}
    </div>
  );
};

TopChartsCard.propTypes = {
  song: PropTypes.object,
  index: PropTypes.number,
};

export default TopChartsCard;
