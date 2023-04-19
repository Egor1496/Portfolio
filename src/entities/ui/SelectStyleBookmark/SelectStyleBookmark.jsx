import React from "react";
import sass from "./SelectStyleBookmark.module.sass";

import { HiOutlineViewGrid } from 'react-icons/hi';

import { BaseButton } from "../../../shared/ui";

const SelectStyleBookmark = () => {
  return (
    <div className={sass.main}>
      <BaseButton text="Вид" btnStyle="transparent"><HiOutlineViewGrid /></BaseButton>
    </div >
  );
}

export { SelectStyleBookmark };