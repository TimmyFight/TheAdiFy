import { useParams } from "react-router-dom";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";

const SongDetails = () => {
  const { songid } = useParams();
  return (
    <>
      <TitleH2>Single Song {songid}</TitleH2>
    </>
  );
};

export default SongDetails;
