import React, { useState } from "react";
import { Link } from "react-router-dom";

import sass from "./MainMenu.module.sass";

import { ThemeSelect } from "../../../entities";
import { ThemeParams } from "../../../features";

import { BaseDropMenu, Br, Logo } from "../../../shared/ui";

const MainMenu = () => {
  const [numberTheme, setTheme] = useState(1);

  return (
    <div className={sass["mainMenuWrap"]}>
      <Link to="/" ><Logo /></Link>
      <Br style={{ "margin": "5px 0", "marginTop": "20px" }} />
      <BaseDropMenu />
      <Br style={{ "margin": "5px 0", "marginBottom": "20px" }} />
      <ThemeParams thisNumberTheme={numberTheme} />
      <ThemeSelect setTheme={setTheme} />
    </div>
  );
}

export { MainMenu };