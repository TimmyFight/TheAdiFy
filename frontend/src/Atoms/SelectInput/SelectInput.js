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

export default SelectInput;
