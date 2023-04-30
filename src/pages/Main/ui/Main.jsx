import React, { useState } from "react";
import sass from "./Main.module.sass"

import { AiFillFolderOpen } from 'react-icons/ai';

import { Sort } from "../../../entities";
import { SelectStyleBookmark, Filters, AddBookmark, LoadBookmark } from "../../../features";
import { Bookmarks, getBookmarks, uploadBookmarks } from "../../../widgets";
import { BaseButton } from "../../../shared/ui";

const Main = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  return (
    <div className={sass.main}>
      <div className={sass["inner"]}>
        <div className={sass.historyWrap}>
          <BaseButton text="Закладки" btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
          <span>ᐳ</span>
          <BaseButton text="Избранные" btnStyle="transparent" />
        </div>

        <SelectStyleBookmark />
      </div>
      <div className={sass["inner"]}>
        <div className={sass["sort-wrap"]}>
          <Sort />
          <Filters />
        </div>
        <div className={sass["sort-wrap"]}>
          <AddBookmark
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
            uploadBookmarks={uploadBookmarks}
          />
          <LoadBookmark
            uploadBookmarks={uploadBookmarks}
            setBookmarks={setBookmarks}
          />
        </div>
      </div>
      <Bookmarks
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    </div>
  );
};

export { Main };