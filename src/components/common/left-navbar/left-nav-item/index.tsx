import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  link: string;
  icon: JSX.Element;
}

const LeftNavItem: React.FC<Props> = ({ text, link, icon }) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <div
      className={classNames(styles["nav-item"], {
        [styles["nav-item--active"]]: isActive,
      })}
    >
      {icon}
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default LeftNavItem;
