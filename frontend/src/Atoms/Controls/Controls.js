import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <section>
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
    />
    {currentSongs?.length && (
      <MdSkipPrevious size={30} color="#FFF" onClick={handlePrevSong} />
    )}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} />
    )}
    {currentSongs?.length && (
      <MdSkipNext size={30} color="#FFF" onClick={handleNextSong} />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
    />
  </section>
);

export default Controls;
