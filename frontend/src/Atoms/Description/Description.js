import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Description.module.css";

const Description = ({ children, fontWeight }) => {
  return (
    <p
      className={classnames({
        [styles.fontBold]: fontWeight === "bold",
      })}
    >
      {children}
    </p>
  );
};

Description.propTypes = {
  children: PropTypes.string.isRequired,
  fontWeight: PropTypes.string,
};

export default Description;
