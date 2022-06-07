import { useState } from "react";
import styled from "styled-components";
import Track from "./Track/Track";

const ListOfTracksStyled = styled.div`
  width: 50%;
  height: 100%;
`;

function ListOfTracks(props) {
  const { listOfTracks } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  function playPauseMusic(event) {
    const trackurl = new Audio(event.target.dataset.trackurl);
    trackurl.type = "audio/wav";
    if (isPlaying && event.target.classList.contains("playing")) {
      event.target.classList.remove("playing");
      event.target.classList.add("stoped");
      trackurl.pause();
      setIsPlaying(false);
    } else if (!isPlaying) {
      event.target.classList.add("playing");
      event.target.classList.remove("stoped");
      trackurl.play();
      setIsPlaying(true);
    } else {
      document.querySelectorAll("button.playing").forEach((item) => {
        item.classList.remove("playing");
        item.classList.add("stoped");
      });
      event.target.classList.add("playing");
      event.target.classList.remove("stoped");
      trackurl.pause();
      setIsPlaying(true);
    }
  }

  return (
    <ListOfTracksStyled>
      {listOfTracks.map((track) => (
        <Track
          trackInfo={track}
          key={track.id}
          playPauseMusic={playPauseMusic}
          isPlaying={isPlaying}
        />
      ))}
    </ListOfTracksStyled>
  );
}

export default ListOfTracks;
