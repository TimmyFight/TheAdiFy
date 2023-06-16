import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Description.module.css";

const Description = ({ children, fontWeight, fontColor }) => {
  return (
    <p
      className={classnames({
        [styles.fontBold]: fontWeight === "bold",
        [styles.fontColorGray]: fontColor === "fontColorGray",
      })}
    >
      {children}
    </p>
  );
};

Description.propTypes = {
  children: PropTypes.string.isRequired,
  fontWeight: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Description;
