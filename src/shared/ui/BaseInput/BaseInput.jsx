import React, { useState } from "react";
import css from "./BaseInput.module.css";

const BaseInput = ({ readonly }) => {
	const [value, setValue] = useState("");

	return (
		<div className={css.main}>
			<input className={`${css.input} ${readonly && css.disable}`}
				type="text" value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly} />
		</div>
	);
}

export { BaseInput };