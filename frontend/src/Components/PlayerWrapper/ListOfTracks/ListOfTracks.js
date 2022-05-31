import styled from "styled-components";
import Track from "./Track/Track";

const ListOfTracksStyled = styled.div`
  width: 50%;
  height: 100%;
`;

function ListOfTracks(props) {
  const { listOfTracks } = props;

  return (
    <ListOfTracksStyled>
      {listOfTracks.map((track) => (
        <Track trackInfo={track} key={track.id} />
      ))}
    </ListOfTracksStyled>
  );
}

export default ListOfTracks;
