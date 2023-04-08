import React from "react";
import css from "./BaseRadiocheck.module.css";

const BaseRadiocheck = () => {
	return (
		<div className={`${css["radio"]}`}>
			<input type="radio" name="radio" defaultValue="1" />
		</div>
	);
}

export { BaseRadiocheck };