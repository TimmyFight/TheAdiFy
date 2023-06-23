import { useParams } from "react-router-dom";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import RelatedSongs from "../../Molecules/RelatedSongs/RelatedSongs";
import Error from "../../Atoms/Error/Error";
import Loader from "../../Atoms/Loader/Loader";
import { useGetArtistDetailsQuery } from "../../redux/services/shazamCoreApi";

const ArtistDetails = () => {
  const { artistid } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ artistid });

  if (isFetchingArtistDetails)
    return <Loader title="Searching artist details..." />;

  if (error) return <Error />;

  return (
    <>
      <TitleH3>
        {artistData?.["data"]?.["0"]?.attributes?.name} - Top Songs
      </TitleH3>
      <RelatedSongs
        artistSongs={Object.values(
          artistData?.["data"]?.["0"]?.["views"]?.["top-songs"]?.["data"]
        )}
        artistId={artistid}
      />
    </>
  );
};

export default ArtistDetails;
