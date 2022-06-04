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
  const [playingSong, setPlayingSong] = useState("");

  function playPauseMusic(event) {
    if (!isPlaying) {
      document.querySelectorAll("button.playing").forEach((item) => {
        item.classList.remove("playing");
        item.classList.add("stoped");
      });
      event.target.classList.add("playing");
      event.target.classList.remove("stoped");
      // playingSong.play();
      setIsPlaying(true);
    } else {
      event.target.classList.remove("playing");
      event.target.classList.add("stoped");
      // playingSong.pause();
      setIsPlaying(false);
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
