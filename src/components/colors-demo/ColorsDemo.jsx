import React from "react";
import styles from "./ColorsDemo.module.css"

const ColorsDemo = () => {
	return (
    <div className={styles.div}>
      <div className={styles.color1}><h1>Цвет 1</h1></div>
      <div className={styles.color2}><h1>Цвет 2</h1></div>
      <div className={styles.color3}><h1>Цвет 3</h1></div>
      <div className={styles.color4}><h1>Цвет 4</h1></div>
      <div className={styles.color5}><h1>Цвет 5</h1></div>
    </div>
  );
}

export default ColorsDemo;