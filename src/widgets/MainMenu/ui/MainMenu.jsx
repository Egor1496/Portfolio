import React, { useState } from "react";
import { Link } from "react-router-dom";

import sass from "./MainMenu.module.sass";

import { ThemeSelect } from "../../../entities";
import { GroupLinks, ThemeParams } from "../../../features";

import { BaseDropMenu, Br, Logo } from "../../../shared/ui";

const MainMenu = ({ getGroups }) => {

  const [numberTheme, setTheme] = useState(1);

  return (
    <div className={sass["mainMenuWrap"]}>
      <Link to="/" ><Logo /></Link>
      <Br style={{ "margin": "10px 0" }} />
      <BaseDropMenu />
      <Br style={{ "margin": "10px 0" }} />
      <GroupLinks groups={getGroups()} />
      <Br style={{ "margin": "10px 0" }} />
      <ThemeSelect setTheme={setTheme} />
      <ThemeParams thisNumberTheme={numberTheme} />
      <Br style={{ "marginTop": "10px" }} />
    </div>
  );
}

export { MainMenu };