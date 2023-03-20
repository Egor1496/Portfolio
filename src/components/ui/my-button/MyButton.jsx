import React from "react";
import styles from "./MyButton.module.css";

const MyButton = ({text}) => {
	return (
		<div className={styles.main}>
			<button>{text}</button>
		</div>
	);
}

export default MyButton;