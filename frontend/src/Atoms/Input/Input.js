import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  type,
  step,
  value,
  min,
  max,
  onInputHandler,
  onChangeHandler,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      step={step}
      value={value}
      min={min}
      max={max}
      onInput={(e) => onInputHandler(e)}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  step: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onInputHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  onInputHandler: () => {},
  onChangeHandler: () => {},
};

export default Input;
