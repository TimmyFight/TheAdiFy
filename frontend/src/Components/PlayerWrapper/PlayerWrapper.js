import { useState, useEffect } from "react";
import styled from "styled-components";
import ListOfTracks from "./ListOfTracks/ListOfTracks";
import AlbumTile from "./AlbumTile/AlbumTile";
import SideControlNav from "../SideControlNav/SideControlNav";
import Config from "../../config.json";

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
    const endpoint = "https://api.spotify.com/v1/recommendations";
    const artists = "6sFIWsNpZYqfjUpaCgueju";
    const danceability = encodeURIComponent("0.9");

    fetch(
      `${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Config.access_token}`,
        },
      }
    )
      .then((response) => response.json())
      .then(({ tracks }) => {
        setListOfTracks(tracks);
      });
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
