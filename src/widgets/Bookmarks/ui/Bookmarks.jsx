import React, { useState } from "react";
import sass from "./Bookmarks.module.sass";

import { deleteBookmark, editBookmark } from "../../../widgets";
import { Bookmark } from "../../../features";
import { BookmarkModal, DialogModal } from "../../../entities";

let idActiveBookmark,
  titleActiveBookmark,
  defaultForm = {};

const Bookmarks = ({ bookmarks, setBookmarks }) => {

  const [deleteModalActive, SetDeleteModalActive] = useState(false);
  const [editModalActive, editModalSetActive] = useState(false);

  const onDeleteBookmark = (elem) => {
    defaultForm = elem;
    idActiveBookmark = elem.id;
    titleActiveBookmark = elem.title;
    SetDeleteModalActive(true);
  }

  const onEditBookmark = (elem) => {
    defaultForm = elem;
    idActiveBookmark = elem.id;
    titleActiveBookmark = elem.title;
    editModalSetActive(true);
  }

  return (
    <>
      <DialogModal
        title={`Удалить "${titleActiveBookmark}" ?`}
        textAccept="Удалить"
        textСancele="Отмена"
        modalActive={deleteModalActive}
        modalSetActive={SetDeleteModalActive}
        OnАccept={() => {
          deleteBookmark(idActiveBookmark, setBookmarks);
        }}
      />
      <BookmarkModal
        modalActive={editModalActive}
        modalSetActive={editModalSetActive}
        title="Редактировать закладку"
        OnАccept={(newBookmark) => { editBookmark(idActiveBookmark, newBookmark, setBookmarks); }}
        titleInputDefault={defaultForm.title}
        descriptionInputDefault={defaultForm.description}
        linkInputDefault={defaultForm.linkI}
        tagsInputDefault={defaultForm.tags}
        groupInputDefault={defaultForm.group}
      />
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
              onDeleteBookmark={() => { onDeleteBookmark(elem); }}
              onEditBookmark={() => { onEditBookmark(elem); }}
            />
          })
        }
      </div>
      <div className={sass.countBookmarks}>закладок - {bookmarks.length}</div>
    </>
  );
}

export { Bookmarks };