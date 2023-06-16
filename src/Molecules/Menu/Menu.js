import { NavLink } from "react-router-dom";
import { links } from "../../assets/constants";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={styles.Menu}>
      <nav className={styles.navMenu}>
        {links.map((element) => (
          <NavLink key={element.name} to={element.to}>
            <element.icon className={styles.sideNavIcon} />
            {element.name}
          </NavLink>
        ))}
      </nav>
    </section>
  );
};

export default Menu;
