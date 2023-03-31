import React, { useState } from "react";
import css from "./BaseInput.module.css";

const BaseInput = ({ readonly, defaultValue, placeholder }) => {
	const [value, setValue] = useState(defaultValue);

	return (
		<div className={css.main}>
			<input className={`${css.input} ${readonly && css.disable}`}
				type="text" value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly}
				placeholder={placeholder}
			/>
		</div>
	);
}

export { BaseInput };