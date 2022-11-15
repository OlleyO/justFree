import Link from "next/link";
import styles from "./styles.module.scss";

const Page404View = () => (
  <div className={styles["page-404"]}>
    <h1>404</h1>
    <p>Page not found</p>
    <Link href="/">Go back to the website</Link>
  </div>
);

export default Page404View;
