import React, { useState } from "react";
import styles from "./MyTextarea.module.css";

const MyTextarea = ({ readOnly, labelText }) => {
	const [value, setValue] = useState("");

	const textarea = (
		<textarea className={`${styles.textarea} ${readOnly && styles.disable}`}
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			readOnly={readOnly} />
	);

	return (
		<div className={styles.main}>
			{
				labelText ?
					<label className={styles.label}>{labelText}{textarea}</label>
					:
					textarea
			}
		</div>
	);
}

export { MyTextarea };