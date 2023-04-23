import React, { useState } from "react";
import sass from "./Bookmarks.module.sass";

import { BaseButton, BaseModal } from "../../../shared/ui";
import { Bookmark } from "../../../features";

const Bookmarks = ({ bookmarks }) => {

  const [deleteModalActive, deleteModalSetActive] = useState(false);
  const [editModalActive, editModalSetActive] = useState(false);

  const onDeleteBookmark = () => {
    deleteModalSetActive(true);
  }

  const onEditBookmark = () => {
    editModalSetActive(true);
  }

  return (
    <>
      <BaseModal active={deleteModalActive} setActive={deleteModalSetActive}>
        <div className={sass.deleteBookFrom}>
          <h3>Удалить закладку</h3>
          <div className={sass.buttonWrap}>
            <BaseButton text="Удалить"
              callBack={() => { deleteModalSetActive(false); }}
            />
            <BaseButton text="Отмена" btnStyle="transparent"
              callBack={() => { deleteModalSetActive(false) }}
            />
          </div>
        </div>
      </BaseModal>
      <BaseModal active={editModalActive} setActive={editModalSetActive}>
        <div className={sass.editBookFrom}>
          <h3>Редактировать (заглушка)</h3>
          <div className={sass.buttonWrap}>
            <BaseButton text="Принять"
              callBack={() => { editModalSetActive(false); }}
            />
            <BaseButton text="Отмена" btnStyle="transparent"
              callBack={() => { editModalSetActive(false) }}
            />
          </div>
        </div>
      </BaseModal>
      <div className={sass["bookmarks-wrap"]}>
        {
          bookmarks.map((elem) => {
            return <Bookmark
              key={elem.id}
              id={elem.id}
              link={elem.link}
              title={elem.title}
              description={elem.description}
              imgLink={elem.imgLink}
              tags={elem.tags}
              group={elem.group}
              time={elem.time}
              onDeleteBookmark={onDeleteBookmark}
              onEditBookmark={onEditBookmark}
            />
          })
        }
      </div>
      <div className={sass.countBookmarks}>закладок - {bookmarks.length}</div>
    </>
  );
}

export { Bookmarks };