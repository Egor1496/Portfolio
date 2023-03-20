import React, { useState } from "react";
import styles from "./MyTextarea.module.css";

const myTextarea = () => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.main}>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
}

export default myTextarea;