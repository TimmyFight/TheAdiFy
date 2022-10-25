import { Link } from "react-router-dom";
import TitleH3 from "../../Atoms/TitleH3/TitleH3";
import styles from "./TopCharts.module.css";

const TopCharts = () => {
  return (
    <section className={styles.topChartsHeader}>
      <TitleH3>Top Charts</TitleH3>
      <Link to="/top-charts">See More</Link>
    </section>
  );
};

export default TopCharts;
