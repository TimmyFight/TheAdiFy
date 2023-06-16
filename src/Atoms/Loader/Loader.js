import PropTypes from "prop-types";
import styles from "./Loader.module.css";
import { loader } from "../../assets";
import Image from "../Image/Image";
import TitleH2 from "../TitleH2/TitleH2";

const Loader = ({ message }) => {
  return (
    <section className={styles.loader}>
      <TitleH2>{message}</TitleH2>
      <Image alt={message} src={loader} type="fullImage" />
    </section>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: "Loading ...",
};

export default Loader;
