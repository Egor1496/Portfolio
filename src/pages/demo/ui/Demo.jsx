import React from "react";

import css from "./Demo.module.sass";

import {
  TypographyDemo,
  Custom
} from "../../../entities";

const Demo = () => {
  return (
    <div className={css.main}>
      <Custom />
      <TypographyDemo />
    </div>
  );
};

export { Demo };