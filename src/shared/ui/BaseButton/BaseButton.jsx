import React from "react";
import css from "./BaseButton.module.sass";

const BaseButton = ({ text, disabled, callBack, floatIcon, children }) => {
	return (
		<div className={css.main}>
			<button
				className={`${css.button} ${css[floatIcon]} ${disabled && css.buttonDisabled}`}
				onClick={callBack}
				disabled={disabled}>
				{children}
				{text}
			</button>
		</div >
	);
}

export { BaseButton };