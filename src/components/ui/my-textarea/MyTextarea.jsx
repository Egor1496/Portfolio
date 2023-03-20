import React, { useState } from "react";
import styles from "./MyTextarea.module.css";

const MyTextarea = () => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.main}>
			<textarea className={styles.textarea}
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)} />
		</div>
	);
}

export default MyTextarea;