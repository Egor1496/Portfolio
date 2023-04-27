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

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.addBookFrom}>
        <h3>{modalTitle}</h3>
        <div className={sass.formWrap}>
          <MyLabel labelText="Ссылка">
            <BaseInput
              state={state.link}
              setState={(newState) => setState({ ...state, link: newState })}
            />
          </MyLabel>
          <MyLabel labelText="Заголовок">
            <BaseInput
              state={state.title}
              setState={(newState) => setState({ ...state, title: newState })}
            />
          </MyLabel>
        </div>
        <MyLabel labelText="Описание" width="maxWidth">
          <BaseTextarea
            state={state.description}
            setState={(newState) => setState({ ...state, description: newState })}
            width="maxWidth"
          />
        </MyLabel>
        <div className={sass.formWrap}>
          <MyLabel labelText="Тэги">
            <BaseInput
              state={state.tags}
              setState={(newState) => setState({ ...state, tags: newState })}
            />
          </MyLabel>
          <MyLabel labelText="Группа">
            <BaseInput
              state={state.group}
              setState={(newState) => setState({ ...state, group: newState })}
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