import styles from "./NavBar.module.css";
import Menu from "../../Molecules/Menu/Menu";
import TitleH1 from "../../Atoms/TitleH1/TitleH1";

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <TitleH1>TheAdiFy</TitleH1>
      <Menu />
    </section>
  );
};

export default NavBar;
