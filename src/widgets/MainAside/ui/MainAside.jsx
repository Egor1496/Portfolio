import React from "react";
import sass from "./MainAside.module.sass";

import { TagСloud } from "../../../entities"

const MainAside = ({ tags }) => {
  return (
    <div className={sass["mainAsideWrap"]}>
      <TagСloud tags={tags} />
    </div>
  );
}

export { MainAside };