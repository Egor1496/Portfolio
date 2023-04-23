import React from "react";

import css from "./ThemeSelect.module.sass"

import { BaseButton } from "../../../shared/ui";

const ThemeSelect = ({ setTheme }) => {
  return (
    <div className={css.main}>
      {
        [...Array(29)].map((el, i) =>
          <BaseButton key={i} text={i + 1} callBack={() => { setTheme(i) }} />
        )
      }
    </div>
  );
}

export { ThemeSelect };