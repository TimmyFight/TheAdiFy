import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
import styles from "./VolumeBar.module.css";
import Input from "../Input/Input";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <section className={styles.volumeBar}>
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {(value === 0 || value === "0") && (
      <BsFillVolumeMuteFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(1)}
      />
    )}
    <Input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChangeHandler={onChange}
    />
  </section>
);

export default VolumeBar;
