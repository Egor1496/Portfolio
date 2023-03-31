import React from "react";

import { BaseButton } from "../../../shared/ui";

const ThemeSelect = ({ setTheme }) => {
  return (
    <div>
      <BaseButton text="1" callBack={() => { setTheme(0) }} />
      <BaseButton text="2" callBack={() => { setTheme(1) }} />
    </div>
  );
}

export { ThemeSelect };