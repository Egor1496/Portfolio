import React, { useState } from "react";
import css from "./BaseTextarea.module.css";

const BaseTextarea = ({ readonly, defaultValue, placeholder }) => {
	const [value, setValue] = useState(defaultValue);

	return (
		<div className={css.main}>
			<textarea className={`${css.textarea} ${readonly && css.disable}`}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly}
				placeholder={placeholder}
			/>
		</div>
	);
}

export { BaseTextarea };