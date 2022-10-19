import PropTypes from "prop-types";
import styles from "./SelectInput.module.css";

const SelectInput = ({ options }) => {
  return (
    <select className={styles.selectInput}>
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
};

SelectInput.defaultProps = {
  options: [],
};

export default SelectInput;
