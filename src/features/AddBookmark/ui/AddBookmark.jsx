import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BookmarkModal } from "../../../entities";
import { BaseButton } from "../../../shared/ui";

const AddBookmark = ({ setBookmarks, addBookmark, getBookmarks }) => {

  const [modalActive, modalSetActive] = useState(false);

  const [bookmarkState, setBookmarkState] = useState({
    title: " YouTube",
    description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
    link: "https://www.youtube.com/",
    tags: "видео, соц сеть",
    group: "избранные"
  });

  const addAndUpdateBookmarks = (bookmark) => {
    addBookmark(bookmark);
    setBookmarks(getBookmarks());
  }

  return (
    <div className={sass.main}>
      <BookmarkModal
        onАccept={(newBookmark) => { addAndUpdateBookmarks(newBookmark); }}
        modalActive={modalActive}
        modalSetActive={modalSetActive}
        title="Добавить закладку"
        state={bookmarkState}
        setState={setBookmarkState}
      />
      <BaseButton text="Добавить"
        callBack={() => { modalSetActive(true) }}
      >
        <AiOutlineAppstoreAdd />
      </BaseButton>
    </div >
  );
}

export { AddBookmark };