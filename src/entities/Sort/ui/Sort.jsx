import React from "react";
import sass from "./Sort.module.sass"

import { TbArrowsTransferDown } from 'react-icons/tb';

import { BaseButton } from "../../../shared/ui";

const Sort = () => {
  return (
    <div className={sass.main}>
      <BaseButton text="Сортировка" btnStyle="transparent"><TbArrowsTransferDown /></BaseButton>
    </div >
  );
}

export { Sort };