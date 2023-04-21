import React, { useState } from "react";
import sass from "./Main.module.sass"

import { AddBookmark, Sort } from "../../../entities";
import { SelectStyleBookmark, Filters } from "../../../features";
import { Bookmarks, getBookmarks, addBookmarks } from "../../../widgets";

const Main = () => {
  const [bookmarks, setBookmarks] = useState(getBookmarks());

  const bookmarkClick = () => {
    addBookmarks({
      id: -1,
      link: "https://www.youtube.com/",
      description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
      tags: ["Видео", "Соц. сеть"],
      group: ["Избранные"],
    },);
    setBookmarks(getBookmarks());
  }

  return (
    <div className={sass.main}>
      <div className={sass["inner"]}>
        <div className={sass["sort-wrap"]}>
          <Sort />
          <SelectStyleBookmark />
          <Filters />
        </div>
        <AddBookmark onAddBookmark={bookmarkClick} />
      </div>
      <Bookmarks bookmarks={bookmarks} />
    </div>
  );
};

export { Main };

/*
  link *
  title *
*/