import React from "react";
import css from "./Br.module.sass";

const Br = () => {
	return (
		<div className={css.main}>
			<div className={`${css.border}`} />
		</div >
	);
}

export { Br };