import React, { useState } from "react";
import styles from "./MyInput.module.css";

const MyInput = ({ readonly, labelText }) => {
	const [value, setValue] = useState("");

	const input = (
		<input className={`${styles.input} ${readonly && styles.disable}`}
			type="text" value={value}
			onChange={(e) => setValue(e.target.value)}
			readOnly={readonly} />
	);

	return (
		<div className={styles.main}>
			{
				labelText ?
					<label className={styles.label}>{labelText}{input}</label> :
					input
			}
		</div>
	);
}

export { MyInput };