const SelectInput = ({ options }) => {
  return (
    <select>
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
