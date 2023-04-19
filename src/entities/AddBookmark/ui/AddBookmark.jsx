import React from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BaseButton } from "../../../shared/ui";

const AddBookmark = () => {
  return (
    <div className={sass.main}>
      <BaseButton text="Добавить"><AiOutlineAppstoreAdd /></BaseButton>
    </div >
  );
}

export { AddBookmark };