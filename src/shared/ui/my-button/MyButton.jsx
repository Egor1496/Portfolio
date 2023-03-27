import React from "react";
import styles from "./MyButton.module.css";

const MyButton = ({ text, disable }) => {
	return (
		<div className={styles.main}>
			<button className={`${styles.button} ${disable && styles.disable}`}>{text}</button>
		</div>
	);
}

export { MyButton };