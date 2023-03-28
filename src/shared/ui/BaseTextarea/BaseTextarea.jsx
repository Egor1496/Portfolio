import React, { useState } from "react";
import css from "./BaseTextarea.module.css";

const BaseTextarea = ({ readonly }) => {
	const [value, setValue] = useState("");

	return (
		<div className={css.main}>
			<textarea className={`${css.textarea} ${readonly && css.disable}`}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly} />
		</div>
	);
}

export { BaseTextarea };