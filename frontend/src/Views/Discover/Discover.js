import { genres } from "../../assets/constants";
import ListOfAlbums from "../../Modules/ListOfAlbums/ListOfAlbums";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import SelectInput from "../../Atoms/SelectInput/SelectInput";

function Discover() {
  const genreTittle = "Pop";
  return (
    <>
      <TitleH2>Discover {genreTittle}</TitleH2>
      <SelectInput options={genres} />
      <ListOfAlbums />
    </>
  );
}

export default Discover;
