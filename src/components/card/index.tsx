import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  noSidePadding?: boolean;
}

const Card: React.FC<Props> = ({ children, noSidePadding }) => (
  <div
    className={classNames(styles.card, {
      [styles.noSidePadding]: noSidePadding,
    })}
  >
    {children}
  </div>
);

export default Card;
