import PropTypes from "prop-types";
import styles from "./TitleH1.module.css";

const TitleH1 = ({ children }) => {
  return <h1 className={styles.titleH1}>{children}</h1>;
};

TitleH1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default TitleH1;
