import { NavLink } from "react-router-dom";
import { links } from "../../assets/constants";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <section className={styles.sideBar}>
      <nav className={styles.sideNav}>
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

export default SideBar;
