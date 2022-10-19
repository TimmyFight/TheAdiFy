import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <section>
    <div className={`${isPlaying && isActive ? "animate" : ""} hidden`}>
      <img src={activeSong?.images?.coverart} alt="cover art" />
    </div>
    <div>
      <p>{activeSong?.title ? activeSong?.title : "No active Song"}</p>
      <p>{activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}</p>
    </div>
  </section>
);

export default Track;
