import React from "react";
import css from "./Bookmark.module.sass"

const Bookmark = (props) => {
  const baseURL = "https://besticon-demo.herokuapp.com/icon?url=",
    postfixUrl = "&size=80";

  const {
    imgLink = "",
    link = "./",
    title = "",
    description = "",
    tags = null,
    group = null,
    time = ""
  } = props;

  return (
    <a className={`${css["bookmark"]}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`${css["main-inner"]}`}>
        {
          imgLink &&
          <div className={`${css["preview"]}`}>
            <img src={baseURL + imgLink + postfixUrl} alt="" />
          </div>
        }
        {title && <h2 className={`${css["title"]}`}>{title}</h2>}
      </div>
      {
        (description || tags || group || time) &&
        <div className={`${css["main-inner"]}`}>
          {
            description &&
            <div className={`${css["inner"]}`}>
              <p className={`${css["description"]}`}>{description}</p>
            </div>
          }
          <div className={`${css["inner"]}`}>
            {
              tags &&
              <ul className={`${css["tags"]}`}>
                {tags.map((elem, i) => <li key={i} className={`${css["tags-item"]}`}>{elem}</li>)}
              </ul>
            }
            {
              group &&
              <ul className={`${css["group"]}`}>
                {group.map((elem, i) => <li key={i} className={`${css["group-item"]}`}>{elem}</li>)}
              </ul>
            }
            {time && <div className={`${css["time"]}`}><span>{time}</span></div>}
          </div>
        </div>
      }
    </a >
  );
}

export { Bookmark };