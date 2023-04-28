import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BookmarkModal } from "../../../entities";
import { BaseButton } from "../../../shared/ui";

const AddBookmark = ({ setBookmarks, addBookmark, getBookmarks }) => {

  const [modalActive, modalSetActive] = useState(false);

  const [bookmarkState, setBookmarkState] = useState({
    title: "",
    description: "",
    link: "",
    tags: "",
    group: ""
  });

  return (
    <div className={sass.main}>
      <BookmarkModal
        onАccept={(newBookmark) => {
          addBookmark({ ...newBookmark });
          setBookmarks(getBookmarks());
        }}
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