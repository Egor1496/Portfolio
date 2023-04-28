import React from "react";
import sass from "./TagСloud.module.sass"

import { IoMdPricetag } from "react-icons/io";

import { BaseButton } from "../../../shared/ui";

const TagСloud = () => {
  return (
    <div className={sass.main}>
      <BaseButton
        sizeStyle="small"
        text="Видео">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Шпаргалка">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Документация">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Переводчик">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Соц. сеть">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Генератор">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Орфограф">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="ИИ">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
      <BaseButton
        sizeStyle="small"
        text="Валидатор">
        <IoMdPricetag style={{ transform: "translateY(1px)" }} />
      </BaseButton>
    </div >
  );
}

export { TagСloud };