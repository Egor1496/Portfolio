import React from "react";
import css from "./Grid.module.sass";

const Grid = ({ children }) => {
	return (
		<div className={css.main}>
			<div className={css.wrap}>{children}</div>
		</div >
	);
}

export { Grid };