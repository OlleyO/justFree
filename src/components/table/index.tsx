import classNames from "classnames";
import { clientInfo } from "../../core/types";
import styles from "./styles.module.scss";

interface Props {
  clientInformation: clientInfo;
}

const Table: React.FC<Props> = ({ clientInformation }) => (
  <div className={styles.table}>
    <div
      className={classNames(styles["table-border"], styles["table-border-top"])}
    />
    <div className={styles.cell}>
      <span className={styles.label}>Working Hours:</span>
      <span className={styles.value}>
        {`${clientInformation.workingHours} hours`}
      </span>
    </div>
    <div className={styles.cell}>
      <span className={styles.label}>Amount Total</span>
      <span className={styles.value}>
        {`$ ${clientInformation.amountTotal}`}
      </span>
    </div>
    <div
      className={classNames(
        styles["table-border"],
        styles["table-border-middle-vertical"]
      )}
    />
    <div
      className={classNames(
        styles["table-border"],
        styles["table-border-middle-horizontal"]
      )}
    />

    <div className={styles.cell}>
      <span className={styles.label}>Overdue</span>
      <span className={styles.value}>{`$ ${clientInformation.overdue}`}</span>
    </div>
    <div className={styles.cell}>
      <span className={styles.label}>% overall work</span>
      <span className={styles.value}>
        {`${clientInformation.overallWork}%`}
      </span>
    </div>

    <div
      className={classNames(
        styles["table-border"],
        styles["table-border-bottom"]
      )}
    />
  </div>
);

export default Table;
