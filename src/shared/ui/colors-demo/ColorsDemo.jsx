import React from "react";
import styles from "./ColorsDemo.module.css"

const ColorsDemo = () => {
  return (
    <div className={styles.div}>
      <div className={`${styles.textColor1} ${styles.colorDemo}`}><h1>Цвет текста 1</h1></div>
      <div className={`${styles.textColor2} ${styles.colorDemo}`}><h1>Цвет текста 1</h1></div>
      <div className={`${styles.color1} ${styles.colorDemo}`}><h1>Цвет 1</h1></div>
      <div className={`${styles.color2} ${styles.colorDemo}`}><h1>Цвет 2</h1></div>
      <div className={`${styles.color3} ${styles.colorDemo}`}><h1>Цвет 3</h1></div>
      <div className={`${styles.color4} ${styles.colorDemo}`}><h1>Цвет 4</h1></div>
      <div className={`${styles.color5} ${styles.colorDemo}`}><h1>Цвет 5</h1></div>
    </div>
  );
}

export { ColorsDemo };