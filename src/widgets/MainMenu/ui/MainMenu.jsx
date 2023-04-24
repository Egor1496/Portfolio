import React from "react";
import sass from "./MainMenu.module.sass";

import { BaseDropMenu, Br } from "../../../shared/ui";

const MainMenu = () => {

  return (
    <div className={sass["mainMenuWrap"]}>
      <h1>Bookmark</h1>
      <Br style={{ "margin": "5px 0" }} />
      <BaseDropMenu />
    </div>
  );
}

export { MainMenu };