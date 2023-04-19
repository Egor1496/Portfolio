import React from "react";
import sass from "./Filters.module.sass"

import { FaFilter } from 'react-icons/fa';

import { BaseButton } from "../../../shared/ui";

const Filters = () => {
  return (
    <div className={sass.main}>
      <BaseButton text="Фильтр" btnStyle="transparent"><FaFilter /></BaseButton>
    </div >
  );
}

export { Filters };