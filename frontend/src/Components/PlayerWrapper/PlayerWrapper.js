import { useState, useEffect } from "react";
import axios from "axios";
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
  const [listOfTracks, setListOfTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios("http://localhost:8888").then(
        (res) => {
          setListOfTracks(res.data.tracks);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    fetchData();
  }, []);

  return (
    <PlayerWrapperStyled>
      <SideControlNav />
      <AlbumTile />
      <ListOfTracks listOfTracks={listOfTracks} />
    </PlayerWrapperStyled>
  );
}

export default PlayerWrapper;
