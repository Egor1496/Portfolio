import React from "react";
import css from "./Main.module.sass"

import { Bookmarks } from "../../../features/ui";
import { getBookmarks } from "../../../entities/model";
import { AddBookmark, Filters, SelectStyleBookmark, Sort } from "../../../entities/ui";

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