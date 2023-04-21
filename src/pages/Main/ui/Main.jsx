import React, { useState } from "react";
import sass from "./Main.module.sass"

import { AddBookmark, Sort } from "../../../entities";
import { SelectStyleBookmark, Filters } from "../../../features";
import { Bookmarks, getBookmarks } from "../../../widgets";

const Main = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  return (
    <div className={sass.main}>
      <div className={sass["inner"]}>
        <div className={sass["sort-wrap"]}>
          <Sort />
          <SelectStyleBookmark />
          <Filters />
        </div>
        <AddBookmark bookmarks={bookmarks} setBookmarks={setBookmarks} />
      </div>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  );
};

export { Main };