import React from "react";
import styles from "./Colors-demo.module.css"

const ColorsDemo = () => {
	return (
    <div className={styles.div}>
      <div className={styles.color1}>Цвет 1</div>
      <div className={styles.color2}>Цвет 2</div>
      <div className={styles.color3}>Цвет 3</div>
      <div className={styles.color4}>Цвет 4</div>
      <div className={styles.color5}>Цвет 5</div>
    </div>
  );
}

export default ColorsDemo;