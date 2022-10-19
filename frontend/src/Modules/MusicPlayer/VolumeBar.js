import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <section>
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
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  </section>
);

export default VolumeBar;
