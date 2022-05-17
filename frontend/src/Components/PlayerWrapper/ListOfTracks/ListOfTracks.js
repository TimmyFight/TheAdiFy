import styled from "styled-components";
import Track from "./Track/Track";

const ListOfTracksStyled = styled.div`
  width: 50%;
  height: 100%;
`;

function ListOfTracks(props) {
  const { listOfTracks } = props;
  listOfTracks.forEach((track, index) => {
    console.log("Track index " + index + " track name: " + track.name);
  });

  return (
    <ListOfTracksStyled>
      <Track />
      <Track />
    </ListOfTracksStyled>
  );
}

export default ListOfTracks;
