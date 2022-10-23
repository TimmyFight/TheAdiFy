import styles from "./Seekbar.module.css";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <section className={styles.seekBarContainer}>
      <button type="button" onClick={() => setSeekTime(appTime - 5)}>
        -
      </button>
      <p>{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
      <p>{max === 0 ? "0:00" : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)}>
        +
      </button>
    </section>
  );
};

export default Seekbar;
