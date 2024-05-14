import { Link } from "react-router-dom";
import { useGetTopChartsQuery } from "../../redux/services/shazamCoreApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Image from "../../Atoms/Image/Image";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./TopArtists.module.css";
import "./TopArtists.css";

const TopArtists = () => {
  const { data } = useGetTopChartsQuery();

  const topPlays = data?.slice(0, 5);

  return (
    <section className={styles.topArtists}>
      <section className={styles.topArtistsHeader}>
        <TitleH3>Top Artists</TitleH3>
        <Link to="/top-artists">See More</Link>
      </section>
      <section className={styles.SingleArtist}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className={styles.swipper}
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song.key}
              style={{ width: "16%", height: "auto" }}
              className={styles.swiperSlide}
            >
              <Link to={`/artist/${song?.relationships?.artists?.data[0]?.id}`}>
                <Image
                  alt={song.subtitle}
                  src={song.images?.background}
                  type="pure"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default TopArtists;
