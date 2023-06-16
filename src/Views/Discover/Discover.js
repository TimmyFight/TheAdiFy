import { genres } from "../../assets/constants";
import { useSelector, useDispatch } from "react-redux";
import { selectGenreListId } from "../../redux/features/playerSlice";
import ListOfTracks from "../../Modules/ListOfTracks/ListOfTracks";
import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import SelectInput from "../../Atoms/SelectInput/SelectInput";

function Discover() {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  let genreTitle = genres.find((genre) => {
    return genre.value === genreListId;
  });
  if (!genreTitle) {
    genreTitle = { value: "POP", title: "Pop" };
  }

  return (
    <>
      <TitleH2>Discover {genreTitle.title}</TitleH2>
      <SelectInput
        onChangeHandler={(e) => dispatch(selectGenreListId(e.target.value))}
        value={genreListId || "POP"}
        options={genres}
      />
      <ListOfTracks genreListId={genreListId || "POP"} />
    </>
  );
}

export default Discover;
