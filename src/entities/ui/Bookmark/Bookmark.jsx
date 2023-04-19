import React from "react";
import sass from "./Bookmark.module.sass"

import { BaseButton } from "../../../shared/ui"

import { AiFillFolderOpen } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';

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

  const elemImg = imgLink && (
    <div className={`${sass["preview"]}`}>
      <img src={baseURL + imgLink + postfixUrl} alt="" />
    </div>
  );

  const elemTitle = title && (<h2 className={`${sass["title"]}`}>{title}</h2>);

  const elemDescription = description && (
    <div className={`${sass["inner"]}`}>
      <p className={`${sass["description"]}`}>{description}</p>
    </div>
  );

  const elemTags = tags && (
    <ul className={`${sass["tags"]}`}>
      {
        tags.map((elem, i) =>
          <li key={i} className={`${sass["tags-item"]}`}>
            <BaseButton text={elem} sizeStyle="small"></BaseButton>
          </li>)
      }
    </ul>
  );

  const elemGroup = group && (
    <ul className={`${sass["group"]}`}>
      {
        group.map((elem, i) =>
          <li key={i} className={`${sass["group-item"]}`}>
            <BaseButton text={elem} btnStyle="transparent"><AiFillFolderOpen /></BaseButton>
          </li>)
      }
    </ul>
  );

  const elemTime = time && (<div className={`${sass["time"]}`}><span>{time}</span></div>);

  return (
    <a className={`${sass["bookmark"]}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={sass.changeBookmark}>
        <RxPencil2 />
      </div>
      <div className={`${sass["main-inner"]}`}>
        {elemImg}
        {elemTitle}
      </div>
      {
        (description || tags || group || time) &&
        <div className={`${sass["main-inner"]}`}>
          {elemDescription}
          <div className={`${sass["inner"]}`}>
            {elemTags}
            {elemGroup}
            {elemTime}
          </div>
        </div>
      }
    </a >
  );
}

export { Bookmark };