import React from "react";
import sass from "./Bookmark.module.sass"

import { BaseButton } from "../../../shared/ui"
import { fillBookmark } from "../../../features"

import { AiFillFolderOpen } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { AiOutlineDelete } from 'react-icons/ai';


const Bookmark = (props) => {

  const baseURL = "https://besticon-demo.herokuapp.com/icon?url=",
    postfixUrl = "&size=80";

  const {
    bookmark,
    onEditBookmark,
    onDeleteBookmark
  } = props;

  const fB = fillBookmark(bookmark);

  const elemImg = fB.imgLink && (
    <div className={`${sass["preview"]}`}>
      <img src={baseURL + fB.imgLink + postfixUrl} alt="" />
    </div>
  );

  const elemTitle = fB.title && (<h2 className={`${sass["title"]}`}>{fB.title}</h2>);

  const elemDescription = fB.description && (
    <div className={`${sass["inner"]}`}>
      <p className={`${sass["description"]}`}>{fB.description}</p>
    </div>
  );

  const elemTags = fB.tags && (
    <ul className={`${sass["tags"]}`}>
      {
        fB.tags.map((elem, i) =>
          <li key={i} className={`${sass["tags-item"]}`}>
            <BaseButton text={elem.trim()} sizeStyle="small"></BaseButton>
          </li>)
      }
    </ul>
  );

  const elemGroup = fB.group && (
    <ul className={`${sass["group"]}`}>
      {
        fB.group.map((elem, i) =>
          <li key={i} className={`${sass["group-item"]}`}>
            <BaseButton text={elem.trim()} btnStyle="transparent" hoverStyle="noHoverStyle"><AiFillFolderOpen /></BaseButton>
          </li>)
      }
    </ul>
  );

  const elemTime = fB.time && (<div className={`${sass["time"]}`}><span>{fB.time}</span></div>);
  return (
    <div className={sass.bookamrkWrap}>
      <div className={sass.deleteBookmark} onClick={(e) => { onDeleteBookmark(); }}>
        <AiOutlineDelete />
      </div>
      <div className={sass.changeBookmark} onClick={(e) => { onEditBookmark(); }}>
        <RxPencil2 />
      </div>
      <a className={`${sass["bookmark"]}`} href={fB.link} target="_blank" rel="noreferrer">
        <div className={`${sass["main-inner"]}`}>
          {elemImg}
          {elemTitle}
        </div>
        {
          (fB.description || fB.tags || fB.group || fB.time) &&
          <div className={`${sass["main-inner"]}`}>
            {elemDescription}
            <div className={`${sass["inner"]}`}>
              {elemTags}
              {elemGroup}
              {elemTime}
            </div>
          </div>
        }
      </ a>
    </div>

  );
}

export { Bookmark };