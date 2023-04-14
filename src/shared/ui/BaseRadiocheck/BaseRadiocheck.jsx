import React from "react";
import css from "./BaseRadiocheck.module.sass";

const BaseRadiocheck = ({ disabled }) => {
	return (
		<div className={`${css["radio"]}`}>
			<input type="radio" name="radio" defaultValue="1" disabled={disabled} />
		</div>
	);
}

export { BaseRadiocheck };