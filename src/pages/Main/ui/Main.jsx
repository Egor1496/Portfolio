import React from "react";
import css from "./Main.module.sass"

import { Bookmarks } from "../../../features";
import { getBookmarks } from "../../../entities";
import { AddBookmark, Filters, SelectStyleBookmark, Sort } from "../../../entities";

const Main = () => {
  return (
    <div className={css.main}>
      <div className={css["inner"]}>
        <div className={css["sort-wrap"]}>
          <Sort />
          <SelectStyleBookmark />
          <Filters />
        </div>
        <AddBookmark />
      </div>
      <Bookmarks bookmarks={getBookmarks()} />
    </div>
  );
};

export { Main };

/*
  link *
  title *
*/