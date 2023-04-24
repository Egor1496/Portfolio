import React from "react";
import sass from "./DialogModal.module.sass";

import { BaseButton, BaseModal } from "../../../shared/ui";

const DialogModal = ({ modalActive, modalSetActive, OnАccept, title, description, textAccept, textСancele }) => {

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.BookFrom}>
        <h3 className={sass.title}>{title}</h3>
        <p className={sass.description}>{description}</p>
        <div className={sass.buttonWrap}>
          <BaseButton text={textAccept}
            callBack={() => { modalSetActive(false); OnАccept(); }}
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