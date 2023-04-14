import React from "react";
import css from "./BaseCheckbox.module.sass";

const BaseCheckbox = ({ disabled }) => {
	return (
		<div className={`${css["check"]}`}>
			<input type="checkbox" disabled={disabled} />
		</div>
	);
}

export { BaseCheckbox };