import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BookmarkModal } from "../../../entities";
import { BaseButton } from "../../../shared/ui";

const AddBookmark = ({ uploadBookmarks, setBookmarks }) => {

  const [modalActive, modalSetActive] = useState(false);

  const [bookmarkState, setBookmarkState] = useState({
    link: "https://www.youtube.com",
    title: "",
    description: "",
    tags: "",
    group: ""
  });

  return (
    <div className={sass.main}>
      <BookmarkModal
        onАccept={(newBookmark) => {
          uploadBookmarks({ ...newBookmark }, setBookmarks)
        }}
        modalActive={modalActive}
        modalSetActive={modalSetActive}
        modalTitle="Создать закладку"
        state={bookmarkState}
        setState={setBookmarkState}
      />
      <BaseButton text="Создать"
        callBack={() => { modalSetActive(true) }}
      >
        <AiOutlineAppstoreAdd />
      </BaseButton>
    </div >
  );
}

export { AddBookmark };