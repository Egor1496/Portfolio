import React, { useState } from "react";
import css from "./BaseRadiocheck.module.css";

const BaseRadiocheck = ({ disabled }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className={css.main}>
			<input
				className={`${css.input} ${disabled && css.disabled}`}
				type="radio"
				checked={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
				disabled={disabled}
			/>
		</div>
	);
}

export { BaseRadiocheck };