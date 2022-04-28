import styled from "styled-components";

const AlbumImageStyled = styled.div`
  height: 20%;
`;

const ImageStyled = styled.img`
  background-color: #05386b;
`;

function ListOfTracks() {
  return (
    <AlbumImageStyled>
      <ImageStyled />
    </AlbumImageStyled>
  );
}

export default ListOfTracks;
