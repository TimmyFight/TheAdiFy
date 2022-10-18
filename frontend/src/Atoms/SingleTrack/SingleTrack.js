import styles from "./SingleTrack.module.css";
import TitleH3 from "../TitleH3/TitleH3";
import Description from "../Description/Description";

const SingleTrack = ({ title, description, image }) => {
  return (
    <div className={styles.singleTrack}>
      <img className={styles.albumImage} src={image} alt={title} />
      <TitleH3>{title}</TitleH3>
      <Description>{description}</Description>
    </div>
  );
};

export default SingleTrack;
