import React from "react";
import css from "./Bookmarks.module.sass"

import { Bookmark } from "../../../entities/ui"

const Bookmarks = ({ bookmarks }) => {

  return (
    <>
      <div className={css["bookmarks-wrap"]}>
        {bookmarks.map((elem) => {
          const {
            imgLink = "",
            link = "./",
            title = "",
            description = "",
            tags = null,
            group = null,
            time = ""
          } = elem;

          return < Bookmark key={link}
            link={link}
            title={title}
            description={description}
            imgLink={imgLink}
            tags={tags}
            group={group}
            time={time}
          />
        })}
      </div>
    </>
  );
}

export { Bookmarks };