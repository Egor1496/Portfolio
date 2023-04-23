import React, { useState } from "react";
import sass from "./Main.module.sass"

import { AiFillFolderOpen } from 'react-icons/ai';

import { AddBookmark, Sort } from "../../../entities";
import { SelectStyleBookmark, Filters } from "../../../features";
import { Bookmarks, getBookmarks, addBookmark } from "../../../widgets";
import { BaseButton } from "../../../shared/ui";

const Main = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  const addAndUpdateBookmarks = (bookmark) => {
    addBookmark(bookmark);
    setBookmarks(getBookmarks());
  }

  return (
    <div className={sass.main}>
      <div className={sass["inner"]}>
        <BaseButton text="Все закладки /" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
        <SelectStyleBookmark />
      </div>
      <div className={sass["inner"]}>
        <div className={sass["sort-wrap"]}>
          <Sort />
          <Filters />
        </div>
        <AddBookmark bookmarks={bookmarks} addAndUpdateBookmarks={addAndUpdateBookmarks} />
      </div>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  );
};

export { Main };