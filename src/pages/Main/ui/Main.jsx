import React from "react";
import css from "./Main.module.sass"

import { Bookmarks } from "../../../features/ui";

import { getBookmarks } from "../../../entities/model";

const Main = () => {
  return (
    <div className={css.main}>
      <Bookmarks bookmarks={getBookmarks()} />
    </div>
  );
};

export { Main };

/*
  link *
  title *
*/