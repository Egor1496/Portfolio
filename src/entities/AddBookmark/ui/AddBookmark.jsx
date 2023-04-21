import React, { useState } from "react";
import sass from "./AddBookmark.module.sass"

import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";

const AddBookmark = ({ onAddBookmark }) => {

  const [modalActive, modalSetActive] = useState(true);

  return (
    <div className={sass.main}>
      <BaseModal active={modalActive} setActive={modalSetActive}>
        <div className={sass.addBookFrom}>
          <h3>Добавить закладку</h3>
          <MyLabel labelText="URL">
            <BaseInput placeholder="https://www.youtube.com/" />
          </MyLabel>

          <MyLabel labelText="Заголовок">
            <BaseInput placeholder="youtube" />
          </MyLabel>

          <MyLabel labelText="Описание">
            <BaseTextarea placeholder="Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео." />
          </MyLabel>

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