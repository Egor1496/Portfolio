import React, { useState } from "react";
import sass from "./GroupLinks.module.sass";

import { BaseButton } from "../../../shared/ui";

import { AiFillFolderOpen } from 'react-icons/ai';

const GroupLinks = ({ groups = [] }) => {
  const [activeList, setActiveList] = useState(new Array(groups.size).fill(false));
  const COUNT_VISIBLE_GROUPS = 5;

  const onClick = (active, setActive, i, text) => {
    const newList = [...active];
    newList[i] = !newList[i];
    setActive(newList);
  }

  return (
    <div className={sass.main}>
      {
        [...groups].slice(0, COUNT_VISIBLE_GROUPS).map((el, i) => {
          return (
            <BaseButton
              key={el} text={el}
              btnStyle="transparent"
              callBack={() => { onClick(activeList, setActiveList, i, el) }}
              buttonActive={activeList[i] && "buttonActive"}
            ><AiFillFolderOpen /></BaseButton>
          )
        })
      }
    </div >
  );
}

export { GroupLinks };