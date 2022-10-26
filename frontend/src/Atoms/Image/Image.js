import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./Image.module.css";

const Image = ({ alt, src, type }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classnames({
        [styles.image]: true,
        [styles.pure]: type === "pure",
        [styles.standard]: type === "standard",
        [styles.fullImage]: type === "fullImage",
        [styles.icon]: type === "icon",
        [styles.albumImage]: type === "albumImage",
      })}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
};

Image.defaultProps = {
  type: "standard",
};

export default Image;
