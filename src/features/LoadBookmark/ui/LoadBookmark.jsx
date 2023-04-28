import React, { useState } from "react";
import sass from "./LoadBookmark.module.sass"

import { AiFillFileText } from 'react-icons/ai';

import { BaseModal, BaseButton, MyLabel, BaseTextarea } from "../../../shared/ui";

const LoadBookmark = () => {
  const [modalActive, modalSetActive] = useState(false);

  const [inputState, setInputState] = useState("");

  return (
    <div className={sass.main}>
      <BaseModal
        active={modalActive}
        setActive={modalSetActive}
      >
        <div className={sass.addBookFrom}>
          <h3>"Загрузить закладки"</h3>
          <MyLabel labelText="Описание" width="maxWidth">
            <BaseTextarea
              state={inputState}
              setState={(newState) => setInputState(newState)}
              placeholder={`[\n{ link: "https://www.youtube.com/" },\n{ link: "https://ya.ru/" }\n]`}
              width="maxWidth"
            />
          </MyLabel>
        </div>
        <div className={sass.buttonWrap}>
          <BaseButton text="Принять"
            callBack={() => { modalSetActive(false) }}
          />
          <BaseButton text="Отмена" btnStyle="transparent"
            callBack={() => { modalSetActive(false) }}
          />
        </div>
      </BaseModal >
      <BaseButton text="Загрузить" callBack={() => { modalSetActive(true) }} >
        <AiFillFileText />
      </BaseButton>
    </div >
  );
}

export { LoadBookmark };