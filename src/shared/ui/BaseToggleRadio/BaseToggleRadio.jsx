import React, { useState } from "react";
import css from "./BaseToggleRadio.module.css";

const BaseToggleRadio = () => {
	const [isChecked, setChecked] = useState(false);

	return (
		<div className={`${css["switch_wrap"]}`}>
			<input type="checkbox" className={`${css["switch"]}`}
				checked={isChecked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
		</div>
	);
}

export { BaseToggleRadio };