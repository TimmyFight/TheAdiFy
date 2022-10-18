import { genres } from "../../assets/constants";
import ListOfTracks from "../../Modules/ListOfTracks/ListOfTracks";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import SelectInput from "../../Atoms/SelectInput/SelectInput";

function Discover() {
  const genreTittle = "Pop";
  return (
    <>
      <TitleH2>Discover {genreTittle}</TitleH2>
      <SelectInput options={genres} />
      <ListOfTracks />
    </>
  );
}

export default Discover;
