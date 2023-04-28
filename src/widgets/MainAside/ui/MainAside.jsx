import React from "react";
import sass from "./MainAside.module.sass";

import { TagСloud } from "../../../entities"

const MainAside = () => {
  return (
    <div className={sass["mainAsideWrap"]}>
      <TagСloud />
    </div>
  );
}

export { MainAside };