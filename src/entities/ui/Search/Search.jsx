import React from "react";
import sass from "./Search.module.sass"

import { BaseInput } from "../../../shared/ui";

const Search = () => {
  return (
    <div className={sass.main}>
      <BaseInput placeholder="Поиск" />
    </div >
  );
}

export { Search };