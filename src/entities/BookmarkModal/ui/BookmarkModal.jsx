import React from "react";
import sass from "./BookmarkModal.module.sass";

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";

const BookmarkModal = (props) => {
  const {
    modalActive,
    modalSetActive,
    modalTitle,
    onАccept,
    state,
    setState,
  } = props;

  const plhld = {
    title: "YouTube",
    description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
    link: "https://www.youtube.com/",
    tags: "видео, соц сеть",
    group: "избранные"
  };

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.addBookFrom}>
        <h3>{modalTitle}</h3>
        <div className={sass.formWrap}>
          <MyLabel labelText="Ссылка">
            <BaseInput
              state={state.link}
              setState={(newState) => setState({ ...state, link: newState })}
              placeholder={plhld.link}
            />
          </MyLabel>
          <MyLabel labelText="Заголовок">
            <BaseInput
              state={state.title}
              setState={(newState) => setState({ ...state, title: newState })}
              placeholder={plhld.title}
            />
          </MyLabel>
        </div>
        <MyLabel labelText="Описание" width="maxWidth">
          <BaseTextarea
            state={state.description}
            setState={(newState) => setState({ ...state, description: newState })}
            placeholder={plhld.description}
            width="maxWidth"
          />
        </MyLabel>
        <div className={sass.formWrap}>
          <MyLabel labelText="Тэги">
            <BaseInput
              state={state.tags}
              setState={(newState) => setState({ ...state, tags: newState })}
              placeholder={plhld.tags}
            />
          </MyLabel>
          <MyLabel labelText="Группа">
            <BaseInput
              state={state.group}
              setState={(newState) => setState({ ...state, group: newState })}
              placeholder={plhld.group}
            />
          </MyLabel>
        </div>
        <div className={sass.buttonWrap}>
          <BaseButton text="Принять"
            callBack={() => {
              modalSetActive(false);
              onАccept({
                link: state.link,
                title: state.title,
                description: state.description,
                tags: state.tags,
                group: state.group,
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