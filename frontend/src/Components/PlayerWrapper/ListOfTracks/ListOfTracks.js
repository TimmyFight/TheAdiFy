import styled from "styled-components";
import Track from "./Track/Track";

const ListOfTracksStyled = styled.div`
  width: 50%;
  height: 100%;
`;

function ListOfTracks() {
  return (
    <ListOfTracksStyled>
      <Track />
      <Track />
    </ListOfTracksStyled>
  );
}

export default ListOfTracks;
