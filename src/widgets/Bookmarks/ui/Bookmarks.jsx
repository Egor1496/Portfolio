import React from "react";
import sass from "./Bookmarks.module.sass"

import { Bookmark } from "../../../features"

const Bookmarks = ({ bookmarks }) => {
  return (
    <>
      <div className={sass["bookmarks-wrap"]}>
        {
          bookmarks.map((elem) => {
            const {
              id,
              imgLink = "",
              link = "./",
              title = "",
              description = "",
              tags = null,
              group = null,
              time = ""
            } = elem;

            return < Bookmark
              key={id}
              link={link}
              title={title}
              description={description}
              imgLink={imgLink}
              tags={tags}
              group={group}
              time={time}
            />
          })
        }
      </div>
      <div className={sass.countBookmarks}>закладок - {bookmarks.length}</div>
    </>
  );
}

export { Bookmarks };