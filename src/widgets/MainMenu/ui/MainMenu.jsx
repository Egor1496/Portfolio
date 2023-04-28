import React, { useState } from "react";
import sass from "./MainMenu.module.sass";

import { ThemeSelect } from "../../../entities";
import { ThemeParams } from "../../../features";

import { BaseDropMenu, Br } from "../../../shared/ui";

const MainMenu = () => {
  const [numberTheme, setTheme] = useState(1);

  return (
    <div className={sass["mainMenuWrap"]}>
      <h1>Bookmark</h1>
      <Br style={{ "margin": "5px 0" }} />
      <BaseDropMenu />
      <Br style={{ "margin": "5px 0", "margin-bottom": "20px" }} />
      <ThemeParams thisNumberTheme={numberTheme} />
      <ThemeSelect setTheme={setTheme} />
    </div>
  );
}

export { MainMenu };