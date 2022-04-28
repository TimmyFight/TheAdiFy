import styled from "styled-components";
import AlbumImage from "./AlbumImage/AlbumImage";
import AlbumTitle from "./AlbumTitle/AlbumTitle";

const AlbumTileStyled = styled.div`
  width: 30%;
  height: 100%;
`;

function AlbumTile() {
  return (
    <AlbumTileStyled>
      <AlbumTitle />
      <AlbumImage />
    </AlbumTileStyled>
  );
}

export default AlbumTile;
