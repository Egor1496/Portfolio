import React, { useState } from "react";
import sass from "./MainAside.module.sass";

import { ThemeSelect } from "../../../entities";
import { ThemeParams } from "../../../features";

const MainAside = () => {
  const [numberTheme, setTheme] = useState(1);
  return (
    <div className={sass["MainAside-wrap"]}>
      <ThemeParams thisNumberTheme={numberTheme} />
      <ThemeSelect setTheme={setTheme} />
    </div>
  );
}

export { MainAside };