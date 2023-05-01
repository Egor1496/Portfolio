import React from "react";
import sass from "./TagСloud.module.sass"

import { IoMdPricetag } from "react-icons/io";

import { BaseButton } from "../../../shared/ui";

const TagСloud = ({ tags, activeList, setActiveList, onClick }) => {

  return (
    <div className={sass.main}>
      {
        [...tags].map((el, i) => {
          return (
            <BaseButton
              key={el}
              sizeStyle="small"
              text={el}
              callBack={() => { onClick(activeList, setActiveList, i, el) }}
              buttonActive={activeList[i] && "buttonActive"}
            >
              <IoMdPricetag style={{ transform: "translateY(1px)" }} />
            </BaseButton>
          )
        })
      }

    </div >
  );
}

export { TagСloud };