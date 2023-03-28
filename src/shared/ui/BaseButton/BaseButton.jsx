import React from "react";
import css from "./BaseButton.module.css";

const BaseButton = ({ text, disabled }) => {
	return (
		<div className={css.main}>
			<button
				className={`${css.button} ${disabled && css.buttonDisabled}`}
				disabled={disabled}>
				{text}
			</button>
		</div >
	);
}

export { BaseButton };