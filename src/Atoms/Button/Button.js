import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, type, onClickHandler, parameter }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={() => onClickHandler(parameter)}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  parameter: PropTypes.number,
};

export default Button;
