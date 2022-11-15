import styles from "./styles.module.scss";

import { AiOutlineSearch } from "react-icons/ai";
import NotificationButton from "../../notification-button";
import classNames from "classnames";
import Dropdown from "../dropdown";

const Topnavbar = () => {
  return (
    <div className={styles["top-navbar"]}>
      <div className={styles.left}>
        <div className={styles["search-input-group"]}>
          <AiOutlineSearch className={styles["icon-search"]} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.right}>
        <NotificationButton
          className={styles["mg-r-20"]}
          notificationsNumber={8}
        />
        <div className={classNames(styles["mg-r-20"], styles.separator)} />
        <Dropdown
          type="dropdown-account"
          onItemClick={() => {
            return;
          }}
        />
      </div>
    </div>
  );
};

export default Topnavbar;
