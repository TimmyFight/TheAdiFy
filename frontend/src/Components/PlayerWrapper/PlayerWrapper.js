import styled from "styled-components";
import ListOfTracks from "./ListOfTracks/ListOfTracks";
import AlbumTile from "./AlbumTile/AlbumTile";
import SideControlNav from "../SideControlNav/SideControlNav";

const PlayerWrapperStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  background-color: #05386b;
  color: #ffffff;
  padding: 40px 10px;
`;

function PlayerWrapper() {
  return (
    <PlayerWrapperStyled>
      <SideControlNav />
      <AlbumTile />
      <ListOfTracks />
    </PlayerWrapperStyled>
  );
}

export default PlayerWrapper;
