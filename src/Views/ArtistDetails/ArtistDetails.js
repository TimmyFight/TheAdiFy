import { useParams } from "react-router-dom";
import DetailsHeader from "../../Molecules/DetailsHeader/DetailsHeader";
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

  return (
    <>
      <DetailsHeader artistId={artistid} artistData={artistData} />
      <RelatedSongs
        artistSongs={Object.values(
          artistData?.["data"]?.[0]?.["views"]?.["top-songs"]?.["data"]
        )}
        artistId={artistid}
      />
    </>
  );
};

export default ArtistDetails;
