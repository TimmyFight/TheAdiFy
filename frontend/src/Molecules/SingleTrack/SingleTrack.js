import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UseDispatch } from "react-redux";
import styles from "./SingleTrack.module.css";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import Image from "../../Atoms/Image/Image";
import PlayPause from "../../Atoms/PlayPause/PlayPause";
import { playPause, setActiveSongs } from "../../redux/features/pleyerSlice";

const SingleTrack = ({ track }) => {
  const title = track.title;
  const description = track.subtitle;
  const image = track.images.background;
  return (
    <div className={styles.singleTrack}>
      <Image src={image} alt={title} />
      <TitleH3>{title}</TitleH3>
      <Description>{description}</Description>
    </div>
  );
};

SingleTrack.propTypes = {
  track: PropTypes.object,
};

export default SingleTrack;
