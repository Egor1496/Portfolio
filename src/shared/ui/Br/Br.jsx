import React from "react";
import css from "./Br.module.sass";

const Br = ({ style }) => {
	return (
		<div className={css.main} >
			<div className={`${css.border}`} style={style} />
		</div >
	);
}

export { Br };