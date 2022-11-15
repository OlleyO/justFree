import { IconContext } from "react-icons";
import styles from "./styles.module.scss";

interface Props {
  renderRoutes(): JSX.Element[];
}

const LeftNavbar: React.FC<Props> = ({ renderRoutes }) => {
  return (
    <IconContext.Provider value={{ className: "react-icon" }}>
      <nav className={styles["left-navbar"]}>
        <div className={styles["just-free"]}>
          <span className={styles.left}>@just</span>
          <span className={styles.right}>Free</span>
        </div>
        {renderRoutes()}
      </nav>
    </IconContext.Provider>
  );
};

export default LeftNavbar;
