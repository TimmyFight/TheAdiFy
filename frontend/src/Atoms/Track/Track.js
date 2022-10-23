import React from "react";
import Image from "../Image/Image";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <section>
    <div className={`${isPlaying && isActive ? "animate" : ""} hidden`}>
      <Image src={activeSong?.images?.coverart} alt="cover art" type="icon" />
    </div>
    <div>
      <p>{activeSong?.title ? activeSong?.title : "No active Song"}</p>
      <p>{activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}</p>
    </div>
  </section>
);

export default Track;
