import React, { useContext } from "react";

import sass from "./GroupLinks.module.sass";
import { AiFillFolderOpen } from 'react-icons/ai';

import { FilterButtons } from "../../../processes/model/context"

import { BaseButton } from "../../../shared/ui";

const GroupLinks = ({ groups = [] }) => {

  const [activeList, onClick] = useContext(FilterButtons);

  return (
    <div className={sass.main}>
      {
        [...groups].map((el, i) => {
          return (
            <BaseButton
              key={el} text={el}
              btnStyle="transparent"
              callBack={() => { onClick(i, el) }}
              buttonActive={activeList[i] && "buttonActive"}
            ><AiFillFolderOpen /></BaseButton>
          )
        })
      }
    </div >
  );
}

export { GroupLinks };