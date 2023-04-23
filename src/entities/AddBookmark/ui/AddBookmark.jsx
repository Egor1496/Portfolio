import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";

const AddBookmark = ({ addAndUpdateBookmarks }) => {

  const [modalActive, modalSetActive] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setFescriptionInput] = useState("");
  const [linkInput, setLinkInput] = useState("https://www.youtube.com/");
  const [tagsInput, setTagsInput] = useState("");
  const [groupInput, setGroupInput] = useState("");

  const onAddBookmark = () => {
    const bookmark = {
      link: linkInput,
      title: titleInput,
      description: descriptionInput,
      tags: tagsInput,
      group: groupInput,
    };
    addAndUpdateBookmarks(bookmark);
  }

  return (
    <div className={sass.main}>
      <BaseModal active={modalActive} setActive={modalSetActive}>
        <div className={sass.addBookFrom}>
          <h3>Добавить закладку</h3>
          <div className={sass.formWrap}>
            <MyLabel labelText="Ссылка">
              <BaseInput
                placeholder="https://www.youtube.com/"
                state={linkInput}
                setState={setLinkInput}
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
                placeholder="видео, ютуб"
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
              callBack={() => { modalSetActive(false); onAddBookmark(); }}
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