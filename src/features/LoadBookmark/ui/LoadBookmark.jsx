import React, { useState } from "react";
import sass from "./LoadBookmark.module.sass"

import { AiFillFileText } from 'react-icons/ai';

import { BaseModal, BaseButton, BaseTextarea } from "../../../shared/ui";
import { getTitle, getObject } from "../../../shared/model";

const DEFAULT_TEXTAREA = `
{
  "bookmarks": [
    {
      "link": "https://www.youtube.com/",
      "title": "youtube",
      "description": "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
      "tags": "Видео, Соц. сеть",
      "group": "Избранные"
    }
  ]
}
`;

const LoadBookmark = ({ uploadBookmarks, setBookmarks }) => {
  const [modalActive, modalSetActive] = useState(false);

  const [textarea, setTextarea] = useState(DEFAULT_TEXTAREA);

  const loadBookmark = (bookmarks) => {
    getObject(bookmarks).bookmarks.forEach(el => {
      el.title = getTitle(el.title, el.link);
      uploadBookmarks({ ...el }, setBookmarks);
    });
  }

  return (
    <div className={sass.main}>
      <BaseModal
        active={modalActive}
        setActive={modalSetActive}
      >
        <div className={sass.addBookFrom}>
          <h3>Загрузить закладки</h3>
          <BaseTextarea
            state={textarea}
            setState={(newState) => setTextarea(newState)}
            placeholder={`[\n{ link: "https://www.youtube.com/" },\n{ link: "https://ya.ru/" }\n]`}
            width="medium"
          />
        </div>
        <div className={sass.buttonWrap}>
          <BaseButton text="Принять"
            callBack={() => { modalSetActive(false); loadBookmark(textarea); }}
          />
          <BaseButton text="Отмена" btnStyle="transparent"
            callBack={() => { modalSetActive(false) }}
          />
        </div>
      </BaseModal >
      <BaseButton text="Загрузить" callBack={() => { modalSetActive(true); }} >
        <AiFillFileText />
      </BaseButton>
    </div >
  );
}

export { LoadBookmark };