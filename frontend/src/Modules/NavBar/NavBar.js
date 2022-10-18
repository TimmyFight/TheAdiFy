import styles from "./NavBar.module.css";
import TitleH1 from "../../Atoms/TitleH1/TitleH1";

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <TitleH1>TheAdiFy</TitleH1>
    </section>
  );
};

export default NavBar;
