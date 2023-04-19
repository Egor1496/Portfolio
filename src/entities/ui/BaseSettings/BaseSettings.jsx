import React from "react";
import sass from "./BaseSettings.module.sass"

import { IoMdSettings } from 'react-icons/io';
import { BaseButton } from "../../../shared/ui";

const BaseSettings = () => {
  return (
    <div className={sass.main}>
      <BaseButton sizeStyle="big" btnStyle="transparent"><IoMdSettings /></BaseButton>
    </div >
  );
}

export { BaseSettings };