import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";
import { getBookmarks, addBookmarks } from "../../../widgets";

const AddBookmark = ({ setBookmarks }) => {

  const [modalActive, modalSetActive] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setFescriptionInput] = useState("");
  const [urlInput, setUrlInput] = useState("https://ya.ru/");
  const [tagsInput, setTagsInput] = useState("");
  const [groupInput, setGroupInput] = useState("");

  const addBookmark = () => {
    const bookmarks = getBookmarks();
    const bookmark = {
      id: Date.now(),
      link: urlInput,
      title: titleInput,
      description: descriptionInput,
      tags: tagsInput.trim().toLocaleLowerCase().split(" "),
      group: [groupInput],
    }
    addBookmarks(bookmark);
    setBookmarks(bookmarks);
  }

  return (
    <div className={sass.main}>
      <BaseModal active={modalActive} setActive={modalSetActive}>
        <div className={sass.addBookFrom}>
          <h3>Добавить закладку</h3>
          <div className={sass.formWrap}>
            <MyLabel labelText="URL">
              <BaseInput
                placeholder="https://www.youtube.com/"
                state={urlInput}
                setState={setUrlInput}
              />
            </MyLabel>
            <MyLabel labelText="Заголовок">
              <BaseInput
                placeholder="youtube"
                state={titleInput}
                setState={setTitleInput}
              />
            </MyLabel>
          </div>
          <MyLabel labelText="Описание">
            <BaseTextarea
              placeholder="Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео."
              state={descriptionInput}
              setState={setFescriptionInput}
            />
          </MyLabel>
          <div className={sass.formWrap}>
            <MyLabel labelText="Тэги">
              <BaseInput
                placeholder="видео"
                state={tagsInput}
                setState={setTagsInput}
              />
            </MyLabel>
            <MyLabel labelText="Группа">
              <BaseInput
                placeholder="Просмотр"
                state={groupInput}
                setState={setGroupInput}
              />
            </MyLabel>
          </div>
          <div className={sass.buttonWrap}>
            <BaseButton text="Принять"
              callBack={() => { modalSetActive(false); addBookmark(); }}
            />
            <BaseButton text="Отмена" btnStyle="transparent"
              callBack={() => { modalSetActive(false) }}
            />
          </div>
        </div>
      </BaseModal>
      <BaseButton text="Добавить"
        callBack={() => { modalSetActive(true) }}
      >
        <AiOutlineAppstoreAdd />
      </BaseButton>
    </div >
  );
}

export { AddBookmark };