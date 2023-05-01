import React, { useState } from "react";
import sass from "./MainAside.module.sass";

import { TagСloud } from "../../../entities"

const MainAside = ({ getTags }) => {

  const [activeList, setActiveList] = useState(new Array(getTags().size).fill(false));

  const onClick = (active, setActive, i, text) => {
    const newList = [...active];
    newList[i] = !newList[i];
    setActive(newList);
  }

  return (
    <div className={sass["mainAsideWrap"]}>
      <TagСloud
        tags={getTags()}
        activeList={activeList}
        setActiveList={setActiveList}
        onClick={onClick}
      />
    </div>
  );
}

export { MainAside };