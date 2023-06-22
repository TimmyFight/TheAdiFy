import { useParams } from "react-router-dom";
import RelatedSongs from "../../Molecules/RelatedSongs/RelatedSongs";
import DetailsHeader from "../../Molecules/DetailsHeader/DetailsHeader";
import Error from "../../Atoms/Error/Error";
import Loader from "../../Atoms/Loader/Loader";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import Description from "../../Atoms/Description/Description";
import {
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} from "../../redux/services/shazamCoreApi";

const SongDetails = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  const { isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery(
    {
      songid,
    }
  );

  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title="Searching song details..." />;

  if (error) return <Error />;

  return (
    <>
      <DetailsHeader songData={songData} />
      <TitleH3>Lyrics:</TitleH3>
      {songData?.sections[1].type === "LYRICS" ? (
        songData?.sections[1].text.map((line, i) => (
          <Description fontColor="fontColorGray" key={i}>
            {line}
          </Description>
        ))
      ) : (
        <Description fontColor="fontColorGray">
          Lyric are not available for this song.
        </Description>
      )}
      <RelatedSongs songid={songid} />
    </>
  );
};

export default SongDetails;
