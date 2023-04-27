import React from "react";
import sass from "./DialogModal.module.sass";

import { BaseButton, BaseModal } from "../../../shared/ui";

const DialogModal = (props) => {

  const {
    modalActive,
    modalSetActive,
    onАccept,
    modalTitle,
    modalDescription,
    textAccept,
    textСancele
  } = props;

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.BookFrom}>
        <h3 className={sass.title}>{modalTitle}</h3>
        <p className={sass.description}>{modalDescription}</p>
        <div className={sass.buttonWrap}>
          <BaseButton text={textAccept}
            callBack={() => { modalSetActive(false); onАccept(); }}
          />
          <BaseButton text={textСancele} btnStyle="transparent"
            callBack={() => { modalSetActive(false) }}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export { DialogModal };