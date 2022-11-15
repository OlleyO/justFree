import styles from "./styles.module.scss";

interface Props {
  name: string;
  value: number;
  color: string;
}

const Legend: React.FC<Props> = ({ name, value, color }) => (
  <div className={styles.legend}>
    <div
      className={styles["color-marker"]}
      style={{ backgroundColor: color }}
    />
    <div className={styles["company-name"]}>{name}</div>
    <div className={styles.value}>{`${String(value).replace(".", ":")} h`}</div>
  </div>
);

export default Legend;
