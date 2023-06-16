import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./TitleH3.module.css";

const TitleH3 = ({ children, margin }) => {
  return (
    <h3
      className={classnames({
        [styles.marginNone]: margin === "none",
      })}
    >
      {children}
    </h3>
  );
};

TitleH3.propTypes = {
  margin: PropTypes.string,
};

export default TitleH3;
