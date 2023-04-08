import React from "react";
import css from "./BaseCheckbox.module.css";

const BaseCheckbox = () => {
	return (
		<div className={`${css["check"]}`}>
			<input type="checkbox" />
		</div>
	);
}

export { BaseCheckbox };