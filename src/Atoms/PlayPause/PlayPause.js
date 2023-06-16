import classnames from "classnames";
import PropTypes from "prop-types";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import styles from "./PlayPause.module.css";

const PlayPause = ({
  type,
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return (
    <section
      className={classnames({
        [styles.playPause]: type === "background",
        [styles.playPauseButton]: type === "button",
        [styles.hover]: !(isPlaying && activeSong?.title === song?.title),
        [styles.isPlaying]: isPlaying && activeSong?.title === song?.title,
      })}
    >
      {isPlaying && activeSong?.title === song?.title ? (
        <FaPauseCircle
          className={styles.playPauseIcon}
          size={35}
          onClick={handlePause}
        />
      ) : (
        <FaPlayCircle
          className={styles.playPauseIcon}
          size={35}
          onClick={handlePlay}
        />
      )}
    </section>
  );
};

PlayPause.propTypes = {
  type: PropTypes.string,
  hover: PropTypes.bool,
};

PlayPause.defaultProps = {
  type: "background",
  hover: false,
};

export default PlayPause;
