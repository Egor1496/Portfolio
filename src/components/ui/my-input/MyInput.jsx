import React, { useState } from "react";
import styles from "./MyInput.module.css";

const Myinput = () => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.main}>
			<input className={styles.input}
						 type="text" value={value}
						 onChange={(e) => setValue(e.target.value)} />
		</div>
	);
}

export default Myinput;