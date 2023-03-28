import React, { useState } from "react";
import css from "./BaseCheckbox.module.css";

const BaseCheckbox = ({ disabled }) => {
	const [IsChecked, setIsChecked] = useState(false);

	return (
		<div className={css.main}>
			<input
				className={`${css.input} ${disabled && css.disabled}`}
				type="checkbox"
				checked={IsChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
				disabled={disabled}
			/>
		</div>
	);
}

export { BaseCheckbox };