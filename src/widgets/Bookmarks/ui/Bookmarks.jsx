import React, { useState } from "react";
import sass from "./Bookmarks.module.sass";

import { deleteBookmark, editBookmark } from "../../../widgets";
import { Bookmark } from "../../../features";
import { BookmarkModal, DialogModal } from "../../../entities";

const Bookmarks = ({ bookmarks, setBookmarks }) => {

  const [deleteModalActive, SetDeleteModalActive] = useState(false);
  const [editModalActive, editModalSetActive] = useState(false);

  const [form, setForm] = useState({
    id: 0,
    title: "",
    description: "",
    link: "",
    tags: "",
    group: ""
  });

  const onDeleteBookmark = (elem) => {
    setForm({ ...elem });
    SetDeleteModalActive(true);
  }

  const onEditBookmark = (elem) => {
    console.log(elem)
    setForm({ ...elem });
    editModalSetActive(true);
  }

  return (
    <>
      <DialogModal
        modalTitle={`Удалить "${form.title}" ?`}
        textAccept="Удалить"
        textСancele="Отмена"
        modalActive={deleteModalActive}
        modalSetActive={SetDeleteModalActive}
        onАccept={() => {
          deleteBookmark(form.id, setBookmarks);
        }}
      />
      <BookmarkModal
        modalTitle={`Редактировать "${form.title}"`}
        modalActive={editModalActive}
        modalSetActive={editModalSetActive}
        onАccept={(newBookmark) => { editBookmark(form.id, newBookmark, setBookmarks); }}
        state={form}
        setState={setForm}
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