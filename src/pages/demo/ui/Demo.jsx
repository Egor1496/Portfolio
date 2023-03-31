import React from "react";

import css from "./Demo.module.css";

import {
  TypographyDemo,
  RadiocheckDemo
} from "../../../entities/ui";

const Demo = () => {
  return (
    <div className={css.main}>
      <RadiocheckDemo />
      <TypographyDemo />
    </div>
  );
};

export { Demo };