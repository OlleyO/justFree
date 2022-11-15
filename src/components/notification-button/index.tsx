import styles from "./styles.module.scss";

import { AiOutlineBell } from "react-icons/ai";
import classNames from "classnames";

interface Props {
  notificationsNumber: number;
  className?: string;
}

const NotificationButton: React.FC<Props> = ({
  notificationsNumber,
  className,
}) => {
  return (
    <div
      className={classNames(
        styles["notifications-button-container"],
        className
      )}
    >
      <button className={styles["notifications-button"]}>
        <AiOutlineBell className={styles["icon-bell"]} />
      </button>

      {!!notificationsNumber && (
        <div className={styles["notification-number"]}>
          {notificationsNumber}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
