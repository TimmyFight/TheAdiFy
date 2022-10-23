import PropTypes from "prop-types";
import styles from "./Track.module.css";
import Description from "../Description/Description";
import Image from "../Image/Image";

const Track = ({ activeSong }) => (
  <section className={styles.trackContainer}>
    <div>
      <Image src={activeSong?.images?.coverart} alt="Cover art" type="icon" />
    </div>
    <div>
      <Description fontWeight="bold">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </Description>
      <Description>
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </Description>
    </div>
  </section>
);

Track.propTypes = {
  activeSong: PropTypes.object,
};

export default Track;
