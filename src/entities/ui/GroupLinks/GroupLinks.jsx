import React from "react";
import sass from "./GroupLinks.module.sass";

import { BaseButton } from "../../../shared/ui";

import { AiFillFolderOpen } from 'react-icons/ai';

const GroupLinks = () => {
  return (
    <div className={sass.main}>
      <BaseButton text="Избранные" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
      <BaseButton text="Инструменты" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
      <BaseButton text="Просмотр" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
      <BaseButton text="Шпаргалки" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
    </div >
  );
}

export { GroupLinks };