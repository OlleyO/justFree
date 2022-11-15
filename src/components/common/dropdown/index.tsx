import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { AiOutlineDown } from "react-icons/ai";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: "dropdown-account" | "dropdown-timeline" | "dropdown-graph";
  onItemClick: (item: number) => void;
}

const Dropdown: React.FC<Props> = ({ type, onItemClick, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  useEffect(() => {
    document.body.addEventListener("click", () => setOpen(false));

    return () =>
      document.body.removeEventListener("click", () => setOpen(false));
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const accountItems = [
    {
      id: 0,
      title: "My Profile",
    },
    {
      id: 1,
      title: "Settings",
    },
    {
      id: 3,
      title: "Log out",
    },
  ];

  const timelineItems = [
    {
      id: 0,
      value: 2,
    },
    {
      id: 1,
      value: 3,
    },
    {
      id: 2,
      value: 4,
    },
    {
      id: 3,
      value: 5,
    },
    {
      id: 4,
      value: 6,
    },
    {
      id: 5,
      value: 7,
    },
  ];

  const graphItems = [
    {
      id: 0,
      title: "THIS WEEK",
    },
    {
      id: 1,
      title: "THIS MONTH",
    },
  ];

  const renderItems = () => {
    switch (type) {
      case "dropdown-account":
        return accountItems.map((item) => (
          <div
            className={styles["dropdown-item"]}
            onClick={() => onItemClick(item.id)}
            key={item.id}
          >
            {item.title}
          </div>
        ));

      case "dropdown-timeline":
        return timelineItems.map(
          (item) =>
            item.id !== selectedItem && (
              <div
                className={styles["dropdown-item"]}
                onClick={() => onItemClick(item.value)}
                key={item.id}
              >
                {`${item.value} days`}
              </div>
            )
        );

      case "dropdown-graph":
        return graphItems.map(
          (item) =>
            item.id !== selectedItem && (
              <div
                className={styles["dropdown-item"]}
                onClick={() => onItemClick(item.id)}
                key={item.id}
              >
                {item.title}
              </div>
            )
        );
    }
  };

  const renderActive = () => {
    switch (type) {
      case "dropdown-account":
        return "Fillip J.";

      case "dropdown-timeline":
        return `${timelineItems[selectedItem].value} days`;
      case "dropdown-graph":
        return graphItems[selectedItem].title;
    }
  };

  return (
    <div
      {...props}
      className={classNames(styles[type], styles.dropdown, {
        [styles["dropdown-open"]]: isOpen,
      })}
    >
      <div className={styles["visible-part"]} onClick={handleToggle}>
        <div className={styles["active-option"]}>{renderActive()}</div>
        <AiOutlineDown className={styles["icon-down"]} />
        {type === "dropdown-account" && (
          <div className={styles["profile-image"]}>F</div>
        )}
      </div>
      {isOpen && <div className={styles["options-list"]}>{renderItems()}</div>}
    </div>
  );
};

export default Dropdown;
