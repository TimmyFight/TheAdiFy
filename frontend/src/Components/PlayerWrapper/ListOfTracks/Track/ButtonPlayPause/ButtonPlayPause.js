import styled from "styled-components";
import styles from "./ButtonPlayPause.css";

const ButtonPlayPauseStyled = styled.button`
  width: 50px;
  height: 50px;
`;

function ButtonPlayPause(props) {
  const { playPauseMusic } = props;
  return (
    <ButtonPlayPauseStyled
      onClick={playPauseMusic.bind(this)}
      className={"stoped"}
    ></ButtonPlayPauseStyled>
  );
}

export default ButtonPlayPause;
