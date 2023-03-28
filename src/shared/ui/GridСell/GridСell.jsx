import React from "react";
import css from "./GridСell.module.css";

const GridСell = ({ children }) => {
	return (
		<div className={css.main}>
			<div className={css.wrap}>{children}</div>
		</div >
	);
}

export { GridСell };