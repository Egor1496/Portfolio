import React from "react";
import sass from "./FastLinks.module.sass";

import { BaseButton } from "../../../shared/ui";

import { AiOutlineYoutube, AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai';
import { FaYandex } from 'react-icons/fa';
import { HiTranslate } from 'react-icons/hi';
import { BsTelegram, BsTwitch } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';


const FastLinks = () => {
  return (
    <div className={sass.main}>
      <a href="https://ya.ru/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><FaYandex /></BaseButton>
      </a>
      <a href="https://www.google.ru/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><AiFillGoogleCircle /></BaseButton>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><AiOutlineYoutube /></BaseButton>
      </a>
      <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><BsTwitch /></BaseButton>
      </a>
      <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><SlSocialVkontakte /></BaseButton>
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
        <BaseButton ><BsTelegram /></BaseButton>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <BaseButton ><AiFillFacebook /></BaseButton>
      </a>
      <a href="https://translate.yandex.ru" target="_blank" rel="noopener noreferrer">
        <BaseButton ><HiTranslate /></BaseButton>
      </a>
    </div >
  );
}

export { FastLinks };