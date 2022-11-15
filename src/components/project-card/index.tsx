import { useState, useEffect } from "react";
import { projectData } from "../../core/types";
import styles from "./styles.module.scss";

import { AiOutlineClockCircle, AiOutlineMessage } from "react-icons/ai";

import Image from "next/image";
import ProgressBar from "./progress-bar";

interface Props {
  data: projectData;
}

const ProjectCard: React.FC<Props> = ({ data }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    fetch("https://random.imagecdn.app/61/61").then((res) => setUrl(res.url));
  }, []);

  return (
    <div className={styles["project-card-container"]}>
      {!!url && (
        <div className={styles["img-container"]}>
          <Image
            className={styles.img}
            src={url}
            width={61}
            height={61}
            alt=""
          />
        </div>
      )}

      <div className={styles.text}>
        <h3>{data.name}</h3>
        <span>{data.department}</span>
      </div>

      <div className={styles["last-updated"]}>
        <span>Last Updated:</span>
        <span>{data.lastUpdated}</span>
      </div>
      <div className={styles.separator} />
      <div className={styles["time-spent"]}>
        <AiOutlineClockCircle className={styles.icon} />
        <span>{data.timeSpent}</span>
      </div>
      <div className={styles["messages"]}>
        <AiOutlineMessage className={styles.icon} />
        <span>{data.messages}</span>
      </div>

      <ProgressBar className={styles.progress} progress={data.progress} />
    </div>
  );
};

export default ProjectCard;
