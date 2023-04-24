import React, { useState } from "react";
import sass from "./BookmarkModal.module.sass";

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";

const BookmarkModal = (props) => {

  const {
    modalActive,
    modalSetActive,
    OnАccept,
    title,
    titleInputDefault = "youtube",
    descriptionInputDefault = "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
    linkInputDefault = "https://www.youtube.com/",
    tagsInputDefault = "Видео, Соц. сеть",
    groupInputDefault = "Избранные",
  } = props;

  const [titleInput, setTitleInput] = useState(titleInputDefault);
  const [descriptionInput, setFescriptionInput] = useState(descriptionInputDefault);
  const [linkInput, setLinkInput] = useState(linkInputDefault);
  const [tagsInput, setTagsInput] = useState(tagsInputDefault);
  const [groupInput, setGroupInput] = useState(groupInputDefault);

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.addBookFrom}>
        <h3>{title}</h3>
        <div className={sass.formWrap}>
          <MyLabel labelText="Ссылка">
            <BaseInput
              state={linkInput}
              setState={setLinkInput}
            />
          </MyLabel>
          <MyLabel labelText="Заголовок">
            <BaseInput
              state={titleInput}
              setState={setTitleInput}
            />
          </MyLabel>
        </div>
        <MyLabel labelText="Описание" width="maxWidth">
          <BaseTextarea
            state={descriptionInput}
            setState={setFescriptionInput}
            width="maxWidth"
          />
        </MyLabel>
        <div className={sass.formWrap}>
          <MyLabel labelText="Тэги">
            <BaseInput
              state={tagsInput}
              setState={setTagsInput}
            />
          </MyLabel>
          <MyLabel labelText="Группа">
            <BaseInput
              state={groupInput}
              setState={setGroupInput}
            />
          </MyLabel>
        </div>
        <div className={sass.buttonWrap}>
          <BaseButton text="Принять"
            callBack={() => {
              modalSetActive(false);
              OnАccept({
                link: linkInput,
                title: titleInput,
                description: descriptionInput,
                tags: tagsInput,
                group: groupInput,
              });
            }}
          />
          <BaseButton text="Отмена" btnStyle="transparent"
            callBack={() => { modalSetActive(false) }}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export { BookmarkModal };