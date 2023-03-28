import React from "react";
import css from "./ColorsDemo.module.css"

const ColorsDemo = () => {
  return (
    <div className={css.div}>
      <div className={`${css.textColor1} ${css.colorDemo}`}><h1>Цвет текста 1</h1></div>
      <div className={`${css.textColor2} ${css.colorDemo}`}><h1>Цвет текста 1</h1></div>
      <div className={`${css.color1} ${css.colorDemo}`}><h1>Цвет 1</h1></div>
      <div className={`${css.color2} ${css.colorDemo}`}><h1>Цвет 2</h1></div>
      <div className={`${css.color3} ${css.colorDemo}`}><h1>Цвет 3</h1></div>
      <div className={`${css.color4} ${css.colorDemo}`}><h1>Цвет 4</h1></div>
      <div className={`${css.color5} ${css.colorDemo}`}><h1>Цвет 5</h1></div>
    </div>
  );
}

export { ColorsDemo };