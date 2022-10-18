import PropTypes from "prop-types";
import styles from "./Error.module.css";
import TitleH2 from "../TitleH2/TitleH2";
import Description from "../Description/Description";

const Error = ({ message }) => {
  console.log("message: ", message);
  return (
    <section className={styles.error}>
      <TitleH2>{message.error}</TitleH2>
      <Description>Something went wrong. Try again later.</Description>
    </section>
  );
};

Error.prototypes = {
  message: PropTypes.object.isRequired,
};

export default Error;
