import React from "react";
import css from "./BaseSwitchRadio.module.sass";

const BaseSwitchRadio = ({ disabled }) => {
	return (
		<div className={`${css["switch"]}`}>
			<input type="checkbox" className={`${css["switch"]}`} disabled={disabled} />
		</div>
	);
}

export { BaseSwitchRadio };