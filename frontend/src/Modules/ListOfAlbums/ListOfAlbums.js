import styles from "./ListOfAlbums.module.css";
import AlbumTile from "../../Atoms/AlbumTile/AlbumTile";

import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";

const ListOfAlbums = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);
  return (
    <section className={styles.albumsGrip}>
      <AlbumTile
        title="Tytuł Albumu"
        description="Opis Albumu"
        image="https://img.myloview.pl/fototapety/album-fotograficzny-linia-ikona-zarys-wektor-znak-piktogram-styl-liniowy-na-bialym-tle-symbol-ilustracja-logo-skok-do-edycji-400-107634935.jpg"
      />
    </section>
  );
};

export default ListOfAlbums;
