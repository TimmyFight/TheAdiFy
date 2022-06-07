import styled from "styled-components";
import ButtonPlayPause from "./ButtonPlayPause/ButtonPlayPause";

const TrackStyled = styled.div`
  width: 50%;
  height: 50px;
`;

function millisecondsToTime(props) {
  const { trackInfo } = props;
  var seconds = Math.floor((trackInfo.duration_ms / 1000) % 60);
  var minutes = Math.floor((trackInfo.duration_ms / (60 * 1000)) % 60);
  minutes = minutes === 0 ? "00" : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}

function Track(props) {
  const { trackInfo, playPauseMusic } = props;
  console.log({ trackInfo });
  return (
    <TrackStyled>
      <ButtonPlayPause
        playPauseMusic={playPauseMusic}
        trackUrl={trackInfo.external_urls.spotify}
      />
      {trackInfo.name} {millisecondsToTime(props)}
    </TrackStyled>
  );
}

export default Track;
