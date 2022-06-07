import styled from "styled-components";
import "./ButtonPlayPause.css";

const ButtonPlayPauseStyled = styled.button`
  width: 50px;
  height: 50px;
`;

function ButtonPlayPause(props) {
  const { playPauseMusic, trackUrl } = props;
  return (
    <ButtonPlayPauseStyled
      onClick={playPauseMusic.bind(this)}
      className={"stoped"}
      data-trackurl={trackUrl}
    ></ButtonPlayPauseStyled>
  );
}

export default ButtonPlayPause;
