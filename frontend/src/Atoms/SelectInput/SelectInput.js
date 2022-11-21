import PropTypes from "prop-types";
import styles from "./SelectInput.module.css";

const SelectInput = ({ options, value, onChangeHandler }) => {
  return (
    <select
      className={styles.selectInput}
      onChange={onChangeHandler}
      value={value}
    >
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

SelectInput.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SelectInput.defaultProps = {
  options: [],
  value: "POP",
};

export default SelectInput;
