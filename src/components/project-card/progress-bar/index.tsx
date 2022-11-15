import classNames from "classnames";
import { generateRandomColor } from "../../../core/utils";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress, className }) => {
  const color = generateRandomColor();

  return (
    <div className={classNames(styles.progress, className)}>
      <div
        className={styles["bar"]}
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};

export default ProgressBar;
