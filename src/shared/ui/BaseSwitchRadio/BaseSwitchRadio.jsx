import React from "react";
import css from "./BaseSwitchRadio.module.css";

const BaseSwitchRadio = () => {
	return (
		<div className={`${css["switch"]}`}>
			<input type="checkbox" className={`${css["switch"]}`} />
		</div>
	);
}

export { BaseSwitchRadio };