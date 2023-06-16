import styles from "./Seekbar.module.css";
import Description from "../Description/Description";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <section className={styles.seekBarContainer}>
      <Button
        type="button"
        onClickHandler={setSeekTime}
        parameter={appTime - 5}
      >
        -
      </Button>
      <Description>{value === 0 ? "0:00" : getTime(value)}</Description>
      <Input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInputHandler={onInput}
      />
      <Description>{max === 0 ? "0:00" : getTime(max)}</Description>
      <Button
        type="button"
        onClickHandler={setSeekTime}
        parameter={appTime + 5}
      >
        +
      </Button>
    </section>
  );
};

export default Seekbar;
