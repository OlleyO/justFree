import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const ProfileImg: React.FC = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    fetch("https://random.imagecdn.app/33/33").then((res) => setUrl(res.url));
  }, []);

  return url ? (
    <Image
      className={styles.container}
      src={url ?? ""}
      width={33}
      height={33}
      alt=""
    />
  ) : null;
};

export default ProfileImg;
