import React, { useState } from "react";
import sass from "./Main.module.sass"

import { AiFillFolderOpen } from 'react-icons/ai';

import { Sort } from "../../../entities";
import { SelectStyleBookmark, Filters, AddBookmark } from "../../../features";
import { Bookmarks, getBookmarks, uploadBookmarks } from "../../../widgets";
import { BaseButton } from "../../../shared/ui";

const Main = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

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
        <AddBookmark
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
          uploadBookmarks={uploadBookmarks}
        />
      </div>
      <Bookmarks
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    </div>
  );
};

export { Main };